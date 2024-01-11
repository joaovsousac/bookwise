import { ReactNode } from "react"
import { Container } from "./styles"

type ProfileDetailsItemProps = {
  icon: ReactNode
  info: string | number
  label: string
}

export const ProfileDetailsItem = ({ icon, info, label }: ProfileDetailsItemProps) => {
  return (
    <Container>
      {icon}
      <div>
        <h1>{info}</h1>
        <p >{label}</p>
      </div>
    </Container>
  )
}