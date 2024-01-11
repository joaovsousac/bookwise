import Image from "next/image";
import { LoginContainer, LoginImage, LoginMethods } from "./styles";
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(true); 
  const session = useSession()
  const router = useRouter()

  console.log(session)

  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.replace('/home'); // Utilize replace() para substituir a rota sem histórico
    } else {
      setLoading(false); // Mudança para indicar que o carregamento acabou
    }
  }, [session, router]);

  const handleSignIn = async (provider: any) => {
    setLoading(true); // Ativando o estado de carregamento ao clicar para fazer login
    await signIn(provider);
  };

  return (
    <LoginContainer>
      <LoginImage>
        <img src="images/logo.svg" />
      </LoginImage>
      <LoginMethods>
        <div>
          <h2>Boas vindas!</h2>
          <p>Faça seu login ou acesse como visitante.</p>

          <button onClick={() => handleSignIn('google')}>
            <img src="images/icons/google.svg" />
            <p>Entrar com google</p>
          </button>
          <button onClick={() => router.push('/home')}>
            <img src="images/icons/rocket.svg" />
            <p>Entrar como visitante</p>
          </button>
        </div>
      </LoginMethods>
    </LoginContainer>
  )
}
