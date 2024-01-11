import { ProfileData } from "@/pages/profile/[id]"
import { BookmarkSimple, BookOpen, Books, UserList } from "phosphor-react"
import { Avatar } from "@mui/material"
import { ProfileDetailsItem } from "./ProfileDetailItem"
import { Container, ProfileDetailsWrapper, UserInfo } from "./styles"

type ProfileDetailsProps = {
    profile: ProfileData
}

export const ProfileDetails = ({ profile }: ProfileDetailsProps) => {
    const memberSinceYear = new Date(profile.user.member_since).getFullYear()

    return (
        <Container>
            <UserInfo>
                <Avatar src={profile.user.avatar_url!} />
                <h1 >{profile.user.name}</h1>
                <p >membro desde {memberSinceYear}</p>
            </UserInfo>

            <ProfileDetailsWrapper>
                <ProfileDetailsItem
                    icon={<BookOpen />}
                    info={profile.readPages}
                    label="Páginas lidas"
                />
                <ProfileDetailsItem
                    icon={<Books />}
                    info={profile.ratedBooks}
                    label="Livros avaliados"
                />
                <ProfileDetailsItem
                    icon={<UserList />}
                    info={profile.readAuthors}
                    label="Autores lidos"
                />
                {profile?.mostReadCategory && (
                    <ProfileDetailsItem
                        icon={<BookmarkSimple />}
                        info={profile.mostReadCategory}
                        label="Categoria mais lida"
                    />
                )}
            </ProfileDetailsWrapper>
        </Container>
    )
}