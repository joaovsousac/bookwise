import Image from "next/image";
import { LoginContainer, LoginImage, LoginMethods } from "./styles";
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from "next/router";

export default function Login() {
  const session = useSession()
  const router = useRouter()

  console.log(session)

  const hasAuthError = !!router.query.error
  const isSignedIn = session.status === 'authenticated'

  async function handleConnectCalendar() {
    await signIn('google')
  }

  return (
    <LoginContainer>
      <LoginImage>
        <img src="images/logo.svg" />
      </LoginImage>
      <LoginMethods>
        <div>
          <h2>Boas vindas!</h2>
          <p>Faça seu login ou acesse como visitante.</p>

          <button onClick={() => signIn('google')}>
            <img src="images/icons/google.svg" />
            <p>Entrar com google</p>
          </button>
          <button>
            <img src="images/icons/github.svg" />
            <p>Entrar com github</p>
          </button>
          <button>
            <img src="images/icons/rocket.svg" />
            <p>Entrar como visitante</p>
          </button>
        </div>
      </LoginMethods>
    </LoginContainer>
  )
}
