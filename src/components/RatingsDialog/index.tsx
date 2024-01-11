import { CategoriesOnBooks, Category, Rating as PRISMA_RATING, User } from "@prisma/client";
import { BookWithAvgRating } from "../BookCard";
import { RatingWithAuthorAndBook } from "../Rating";
import { Fragment, ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { RatingStars } from "../Rating/styles";
import * as Dialog from '@radix-ui/react-dialog'
import { Avaliate, BookContent, BookDetailsContainer, BookDetailsWrapper, BookImage, BookInfos, DialogClose, DialogContent, DialogOverlay, Ratings } from './styles';
import { BookOpen, BookmarkSimple, X } from "phosphor-react";
import { BookInfo } from "./BookInfo";
import Rating from '@/components/Rating'
import { useSession } from "next-auth/react";
import RatingForm from "../RatingForm";



type BookDetails = BookWithAvgRating & {
  ratings: RatingWithAuthorAndBook[]
  categories: (CategoriesOnBooks & {
    category: Category;
  })[];
}

type RatingsDialogProps = {
  bookId: string,
  ratingId: string,
  userId: string
  children: ReactNode
}

export const RatingsDialog = (
  { ratingId, userId, bookId, children }: RatingsDialogProps,
  { ratings }: BookDetails
) => {
  const { status, data: session } = useSession();
  const [showForm, setShowForm] = useState(false)

  const isAuthenticated = status === "authenticated"

  const handleRate = () => {
    if (!isAuthenticated) {
      // Redirecione para a página de login
      router.push('/login');
      return;
    }
  
    // Mostrar o formulário de avaliação
    setShowForm(true);
  }

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const [open, setOpen] = useState(false);

  const router = useRouter();
  const paramBookId = router.query.book as string;

  useEffect(() => {
    if (paramBookId === bookId) {
      setOpen(true);
    }
  }, [bookId, paramBookId])

  const { data: book } = useQuery<BookDetails>({
    queryKey: ['book', bookId],
    queryFn: async () => {
      const { data } = await api.get(`/books/details/${bookId}`);
      return data.book ?? {};
    },

    enabled: open,
  });

  const ratingsLength = book?.ratings?.length ?? 0;

  const categories = book?.categories?.map(x => x?.category?.name)?.join(", ") ?? "";

  const onOpenChange = (open: boolean) => {
    if (open) {
      router.push(`/explore?book=${bookId}`, undefined, { shallow: true });
    } else {
      router.push("/explore", undefined, { shallow: true });
    }

    setOpen(open);
  }
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>

        <DialogOverlay />
        <DialogContent>
          <DialogClose>
            <X size={24} />
          </DialogClose>
          {!book ? (
            <p>
              Carregando...
            </p>
          ) : (
            <>
              <BookDetailsWrapper>
                <BookDetailsContainer>
                  <BookImage width={171} height={242} alt={book.name} src={book.cover_url} />
                  <BookContent>
                    <div>
                      <h1>{book.name}</h1>
                      <p>{book.author}</p>
                    </div>

                    <div>
                      <RatingStars />
                      <p>{ratingsLength} {ratingsLength === 1 ? "avaliação" : "avaliações"}</p>
                    </div>
                  </BookContent>
                </BookDetailsContainer>

                <BookInfos>
                  <BookInfo icon={<BookmarkSimple />} title="Categorias" info={categories} />
                  <BookInfo icon={<BookOpen />} title="Páginas" info={String(book.total_pages)} />
                </BookInfos>
              </BookDetailsWrapper>
              <Avaliate>
                <div>Avaliações</div>
              {!showForm && <button onClick={handleRate}>Avaliar</button>}
              {showForm && <button><X width={20} height={20} onClick={handleCloseForm}/></button>}
              </Avaliate>
              {showForm && <RatingForm bookId={bookId} userId={userId} />}
                         
                {book.ratings?.map((rating, index) => (
                  <Ratings key={rating.id} style={{ marginRight: '16px' }}>

                    <Rating rating={rating} variant="compact" />
                  </Ratings>
                ))}

            </>

          )}
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}