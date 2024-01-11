import { ChartLineUp, Binoculars, SignOut, SignIn, User } from "phosphor-react";
import {
    DoLogin,
    SidebarContainer,
    SidebarContent,
    SidebarFooter,
    SidebarLogo,
    SidebarRectangle,
    SidebarSessions
} from "./styles";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { RatingWithAuthorAndBook } from "../Rating";

export default function Sidebar() {
    const handleLogout = () => { signOut() };
    const { data: session } = useSession()
    const user = session?.user
    const router = useRouter()
    const handleOpenProfile = () => {
        router.push(`/profile/${user?.id}`)
    }

    const goHome = () => {
        router.push(`/home`)
    }

    const goToExplore = () => {
        router.push(`/explore`)
    }
    return (
        <SidebarContainer>
            <SidebarContent>
                <SidebarLogo>
                    <img src='/images/logo.svg' />
                </SidebarLogo>
                <SidebarSessions>

                    <button
                        className={router.pathname === '/home' ? 'active' : ''}
                        onClick={goHome}>
                        <ChartLineUp size={24} />
                        Início
                    </button>

                    <button
                        className={router.pathname === '/explore' ? 'active' : ''}
                        onClick={goToExplore}>
                        <Binoculars size={24} />
                        Explorar
                    </button>

                    {session ? (
                        <>
                            <button
                                className={router.pathname === `/profile/${session.user.id}` ? 'active' : ''}
                                onClick={handleOpenProfile}>
                                <User size={24} />
                                Perfil
                            </button>
                        </>) :
                        (<br />)
                    }
                </SidebarSessions>
                <SidebarFooter>
                    {session ? ( // Verifica se há uma sessão ativa
                        <div>
                            <Image
                                src={session.user.avatar_url}
                                alt={session.user.name}
                                width={32}
                                height={32}
                                onClick={handleOpenProfile}
                            />
                            <p>{session.user.name.split(' ')[0]}</p>
                            <button onClick={handleLogout}>
                                <SignOut width={24} height={24} />
                            </button>
                        </div>
                    ) : (
                        <DoLogin onClick={() => router.push('/login')}>
                            <p>Fazer login</p>
                            <SignIn width={24} height={24} />
                        </DoLogin>
                    )}
                </SidebarFooter>
            </SidebarContent>
        </SidebarContainer>
    )
}