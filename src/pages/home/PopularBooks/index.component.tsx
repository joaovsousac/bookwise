import { CaretRight } from "phosphor-react";
import { BooksContainer, Container, TitleContainer } from "./styles";
import Rating, { RatingWithAuthorAndBook } from './../../../components/Rating'
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { BookCard, BookWithAvgRating } from "@/components/BookCard";

export default function PopularBooks() {
  const { data: popularBooksQuery } = useQuery<BookWithAvgRating[], Error>({
    queryKey: ["popular-books"],
    queryFn: async () => {
      const { data } = await api.get("/books/popular");
      return data?.books ?? [];
    },
  });

  return (
    <Container>
      <TitleContainer>
        <p>Livros populares</p>
        <button>Ver todos <CaretRight /></button>
      </TitleContainer>
      <BooksContainer>
        {popularBooksQuery?.map(book => (
          <BookCard key={`popular-${book.id}`} book={book} />
        ))}
      </BooksContainer>
    </Container>
  )
}