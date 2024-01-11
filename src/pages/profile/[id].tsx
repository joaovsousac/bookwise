import { ReactElement } from "react"
import { HomeContainer } from "../home/styles"
import { ProfileRating, ProfileRatings } from "@/components/ProfileRatings"
import { ProfileDetails } from "@/components/ProfileDetails"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { api } from "@/lib/axios"
import { useSession } from "next-auth/react"
import { RatingWithAuthorAndBook } from "@/components/Rating"
import Sidebar from "@/components/Sidebar"
import PseudoSidebar from "@/components/Sidebar/PseudoSidebar"
import { ProfileContainer } from "./styles"

export type ProfileData = {
    ratings: ProfileRating[]
    user: {
        avatar_url: string
        name: string
        member_since: string
    }
    readPages: number
    ratedBooks: number
    readAuthors: number
    mostReadCategory?: string
}

const ProfilePage = () => {
    const router = useRouter();
    const userId = router.query.id as string;

    const { data: session } = useSession();

    const isOwnProfile = session?.user?.id === userId;

    const { data: profile } = useQuery<ProfileData>({
        queryKey: ["profile", userId],
        queryFn: async () => {
            const { data } = await api.get(`/profile/${userId}`);
            return data?.profile ?? {};
        },
        enabled: !!userId,
    });

    return (
        <HomeContainer>
            <Sidebar />

            {!!profile ? (
                <ProfileContainer>
                    <ProfileRatings isOwnProfile={isOwnProfile} ratings={profile?.ratings} />
                    <ProfileDetails profile={profile} />
                </ProfileContainer>
            ) : (
                <h1>Carregando...</h1>
            )}
        </HomeContainer>
    )
}
export default ProfilePage