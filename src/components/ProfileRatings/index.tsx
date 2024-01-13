import { Container, RatingsList } from "./styles"
import { MagnifyingGlass, User } from "phosphor-react"
import { Input } from "../Input";
import { Book, CategoriesOnBooks, Category, Rating } from "@prisma/client";
import { ProfileRatingCard } from "./ProfileRatingCard";
import { useMemo, useState } from "react";
import { useSession } from "next-auth/react";

export type ProfileRating = Rating & {
  book: Book & {
    categories: CategoriesOnBooks & {
      category: Category
    }[]
  }
};

type ProfileRatingsProps = {
  ratings: ProfileRating[]
  isOwnProfile?: boolean
}

export const ProfileRatings = ({ ratings, isOwnProfile }: ProfileRatingsProps) => {
  
  const [search, setSearch] = useState("")

  const filteredRatings = useMemo(() => {
    return ratings.filter(rating => {
      return rating.book.name.toLowerCase().includes(search.toLowerCase())
    })
  }, [ratings, search])

  return (
    <Container>
      {isOwnProfile ? (
        <h1><User /> Perfil</h1>
      ) : (
        <a>Voltar</a>
      )}
      <Input
        placeholder="Buscar livro avaliado"
        icon={<MagnifyingGlass size={20} />}
        css={{ marginTop: 40, marginBottom: 32 }}
        value={search}
        onChange={({ 
            //@ts-ignore
            target }) => setSearch(target.value)}
      />
      <RatingsList>
        {filteredRatings?.map(rating => (
          <ProfileRatingCard key={rating.id} rating={rating} />
        ))}
        {filteredRatings.length <= 0 && (
          <>
            <p>
              {search ? "Nenhum resultado encontrado" : "Nenhuma avaliação encontrada"}
            </p>
          </>
        )}
      </RatingsList>
    </Container>
  )
}