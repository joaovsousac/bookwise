import Sidebar from "@/components/Sidebar";
import { ChartLineUp } from 'phosphor-react'
import { FlexContainer, HomeBody, Posts } from "./styles";
import Rating, { RatingWithAuthorAndBook } from "@/components/Rating";
import { useRouter } from "next/router";
import { useSession } from 'next-auth/react'
import { useQuery } from '@tanstack/react-query'
import { api } from "@/lib/axios";
import { ratings } from "../../../prisma/constants/ratings";

export const LatestRatings = () => {
    const { data: ratings } = useQuery<RatingWithAuthorAndBook[]>({
        queryKey: ["latest-ratings"],
        queryFn: async () => {
            const { data } = await api.get("/ratings/latest");
            return data?.ratings ?? [];
        }
    });


const { data: session } = useSession();
}

export default function RatingHome() {
    return (
        <FlexContainer>
            <Sidebar />
            <HomeBody>
                <h2><ChartLineUp /> Início</h2>
                <p>Avaliações mais recentes</p>
                <Posts>
                    <section>
                        {ratings?.map(rating => (
                            <Rating 
                            key={rating.id} 
                            // @ts-ignore
                            rating={rating} />
                        ))}
                    </section>
                </Posts>
            </HomeBody>
        </FlexContainer>
    )
}