import { ReactNode } from "react"
import { Container } from "./styles"

type BookInfoProps = {
  icon: ReactNode
  title: string
  info: string
}

export const BookInfo = ({ icon, title, info }: BookInfoProps) => {
  return (
    <Container>
      {icon}
      <div>
        <p color="gray-300">{title}</p>
        <h1 color="gray-200">{info}</h1>
      </div>
    </Container>
  )
}