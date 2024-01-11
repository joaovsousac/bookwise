import { Star, StarFour, StarHalf } from "phosphor-react";
import {
  RatingAvatar,
  RatingBookInformations,
  RatingBookInformationsText,
  RatingContainer,
  RatingHeader,
  RatingStars,
  RatingUserInformations,
  GrayText,
  SeeMore,
  Container,
  CompactRating,
  CompactRatingSummary,
} from "./styles";
import { useState } from 'react'
import { Book, Rating, User } from "@prisma/client";
import { getRelativeTimeString } from "@/utils/getRelativeTimeString";
import { useRouter } from "next/router";



interface TextComponentProps {
  text: string
}

export type RatingWithAuthorAndBook = Rating & {
  user: User
  book: Book
}

type RatingCardProps = {
  rating: RatingWithAuthorAndBook,
  variant?: "default" | "compact"
}

const TextComponent = ({ text }: TextComponentProps) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <p>
        {showMore ? text : text.slice(0, 210)}
        {text.length > 210 && !showMore && '... '}
        {text.length > 210 && (
          <SeeMore onClick={toggleShowMore}>
            {showMore ? 'Ver Menos' : 'ver mais'}
          </SeeMore>
        )}
      </p>
    </div>
  );
};



export default function Rating({ rating, variant = "default" }: RatingCardProps) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating.rate) {
      stars.push(<Star weight='fill' key={i} />);
    } else {
      stars.push(<Star key={i} />);
    }
  }
  const distance = getRelativeTimeString(new Date(rating.created_at), "pt-BR")

  const router = useRouter()

  const goToRatings = () => {
    router.push(`/explore?book=${rating.book_id}`);
  };

  return (
    <div>
      <Container >
        {variant === "default" && (
          <RatingContainer onClick={goToRatings}>
            <RatingHeader>
              <RatingUserInformations>
                <RatingAvatar src={rating.user.avatar_url || 'AVATAR'} alt="Descrição" />
                <div>
                  <div>{rating.user.name}<br />
                    <GrayText>{distance}</GrayText>
                  </div>
                </div>
              </RatingUserInformations>
              <RatingStars>
                {stars}
              </RatingStars>
            </RatingHeader>
            <RatingBookInformations>
              <img src={rating.book.cover_url} width={108} height={152} />
              <RatingBookInformationsText>
                <h4>{rating.book.name}</h4>
                <GrayText>{rating.book.author}</GrayText>
                <br />
                <div>
                  <TextComponent text={rating.description} />
                </div>
              </RatingBookInformationsText>
            </RatingBookInformations>
          </RatingContainer>
        )}
        {variant === "compact" && (
          <CompactRating>
            <RatingHeader>
              <RatingUserInformations>
                <RatingAvatar src={rating.user.avatar_url || 'AVATAR'} alt="Descrição" />
                <div>
                  <div>{rating.user.name}<br />
                    <GrayText>{distance}</GrayText>
                  </div>
                </div>
              </RatingUserInformations>
              <RatingStars>
                {stars}
              </RatingStars>
            </RatingHeader>
              <CompactRatingSummary>
                {rating.description}
              </CompactRatingSummary>
          </CompactRating>
        )}
      </Container>
    </div>
  )
}