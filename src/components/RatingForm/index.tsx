import { useSession } from "next-auth/react"
import {
  Buttons,
  Container,
  Errors,
  Footer,
  Form,
  FormTextArea,
  Header,
  UserInformations
} from "./styles"
import React, { ReactNode, useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import ClickableRatingStars from "../ClickableRatingStars";
import { Check, X } from "phosphor-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { queryClient } from "@/lib/queryClient";
import { useRouter } from "next/router";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";


interface RatingFormTyppe {
  bookId: string
  userId: string
}

const rateFormSchema = z.object({
  description: z
    .string()
    .min(1, "")
    .max(450, ""),
  rate: z
    .number()
    .min(1, "")
})

type RateFormData = z.infer<typeof rateFormSchema>

const RatingForm = ({ bookId, userId }: RatingFormTyppe) => {
  const [hasRated, setHasRated] = useState(false);

  useEffect(() => {
    const checkUserRating = async () => {
      try {
        const response = await api.get(`/api/profile/${userId}`);
        const userRatings = response?.data?.profile?.ratings;
        const hasUserRatedBook = userRatings.some((rating: { book_id: string; }) => rating.book_id === bookId);
        setHasRated(hasUserRatedBook);
      } catch (error) {
        console.error("Erro ao verificar a avaliação do usuário:", error);
      }
    };

    checkUserRating();
  }, [bookId]);

  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors }
  } = useForm<RateFormData>({
    resolver: zodResolver(rateFormSchema)
  })

  const [stars, setStars] = useState<number>(0)

  console.log(errors)

  const router = useRouter()

  async function handleRate(data: RateFormData) {
    try {
      await api.post(`/books/${bookId}/rate`, {
        description: data.description,
        rate: data.rate
      })

      router.reload()
    }
    catch (err) {
      if (err instanceof AxiosError && err.response?.data?.message) {
        alert(err.response.data.message)
        return
      }

      console.log(err)
    }
  }

  console.log(handleSubmit)

  const { data: session } = useSession()
  const [userDetails, setUserDetails] = useState<{ name: string; avatar: string }>();

  useEffect(() => {
    if (session?.user?.name && session?.user?.avatar_url) {
      setUserDetails({
        name: session.user.name,
        avatar: session.user.avatar_url,
      });
    }
  }, [session]);

  const [charCount, setCharCount] = useState(0);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;

    if (text.length <= 450) {
      setCharCount(text.length);
      setValue('description', text); // Atualize o valor do campo 'description' no react-hook-form
  }
}

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (charCount === 450 && event.key !== "Backspace" && event.key !== "Delete") {
      event.preventDefault();
    }
  };

  return (
    <Container>
      <Header>
        {userDetails && (
          <UserInformations>
            <Avatar src={userDetails.avatar} />
            <span>{userDetails.name}</span>
          </UserInformations>
        )}
        <ClickableRatingStars
          value={stars}
          onChange={(value) => {
            setStars(value)
            setValue('rate', value, { shouldValidate: true }); 
          }}
        />
      </Header>
      <Form onSubmit={handleSubmit(handleRate)}>
        <FormTextArea
           style={{ height: '10.25rem' }}
           value={watch('description')}
           onKeyDown={handleKeyDown}
           {...register('description', {
             onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => handleTextChange(event),
             maxLength: 450
           })}
        />
        <Footer>
          <span>{charCount}/450</span>
          <Errors>
            {errors.description && (
              <p>Sua avaliação precisa ter conteúdo.</p>
            )}
            {errors.rate && (
              <p>Você precisa selecionar pelo menos uma estrela.</p>
            )}
            {hasRated && (
              <p>Você já avaliou esse livro.</p>
            )}
          </Errors>
          <Buttons>

            <button type="submit"><Check /></button>
          </Buttons>
        </Footer>
      </Form>
    </Container>
  )
}

export default RatingForm