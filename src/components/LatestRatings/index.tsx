import {  Posts } from "./styles";
import Rating, { RatingWithAuthorAndBook } from "@/components/Rating";

import { useQuery } from '@tanstack/react-query'
import { api } from "@/lib/axios";


export const LatestRatings = () => {
    const { data: ratings } = useQuery<RatingWithAuthorAndBook[], Error>({
        queryKey: ["latest-ratings"],
        queryFn: async () => {
            const { data } = await api.get("/ratings/latest");
            return data?.ratings ?? [];
        }
    });

    return (
                <Posts>
                    <section>
                            {ratings?.map((rating, index) => (
                                <div key={rating.id} style={{ marginRight: '16px' }}>
                                    <Rating rating={rating} variant="default"/>
                                </div>
                            ))}
                    </section>
                </Posts>
    )
}
