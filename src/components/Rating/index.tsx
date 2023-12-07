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
  SeeMore
} from "./styles";
import { useState } from 'react'
import { Book, Rating, User } from "@prisma/client";


interface TextComponentProps {
  text: string
}

export type RatingWithAuthorAndBook = Rating & {
  user: User
  book: Book
}

type RatingCardProps = {
  rating: RatingWithAuthorAndBook
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



export default function Rating({ rating } : RatingCardProps) {

  return (
    <div>

      <RatingContainer >
        <RatingHeader>
          <RatingUserInformations>
            <RatingAvatar src={rating.user.avatar_url || 'AVATAR'} alt="Descrição" />
            <div>
              <div>{rating.user.name}<br />
                <GrayText>{rating.created_at.toISOString()}</GrayText>
              </div>
            </div>
          </RatingUserInformations>
          <RatingStars>
            <Star weight="fill" />
            <Star weight="fill" />
            <Star weight="fill" />
            <StarHalf />
            <Star />
          </RatingStars>
        </RatingHeader>
        <RatingBookInformations>
          <img src={rating.book.cover_url} />
          <RatingBookInformationsText>
            <h4>John Doe</h4>
            <GrayText>John Doe</GrayText>
            <br />
            <div>
              <TextComponent text={rating.description} />
            </div>
          </RatingBookInformationsText>
        </RatingBookInformations>
      </RatingContainer>
    </div>
  )
  }