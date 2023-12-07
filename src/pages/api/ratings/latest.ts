import { api } from "@/lib/axios";
import { prisma } from "@/lib/prisma"
import { Rating } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {

    if (req.method !== "GET") return res.status(405).end()

    const ratings = await prisma.rating.findMany({
        orderBy: {
            created_at: "desc"
        },
        include: {
            book: true,
            user: true
        },
        take: 10
    })

    const { data: ratingsData } = await api.get("/ratings/latest");

    const ratingsWithDateConverted = ratingsData?.ratings.map((rating: Rating) => ({
        ...rating,
    })) ?? [];

    return ratingsWithDateConverted;

    return res.json({ ratings })
}