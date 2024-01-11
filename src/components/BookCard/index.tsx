import { Book } from "@prisma/client";
import { GrayText } from "../Rating/styles";
import { CompactRatingContainer, CompactRatingInformations, CompactRatingInformationsBookAndAuthor, CompactRatingInformationsText, CompactRatingStars } from "./styles";
import { Star } from "phosphor-react";
import { CSS } from "@stitches/react";
import { RatingsDialog } from "../RatingsDialog";

export type BookWithAvgRating = Book & {
    avgRating: number
    alreadyRead: boolean
  }
  
  type BookCardProps = {
    book: BookWithAvgRating
    size?: "md" | "lg",
    css?: CSS
  }

export const BookCard = ({ book, size = "md", css}: BookCardProps) => {
    const IMAGE_SIZES = {
        md: {
          width: 64,
          height: 94
        },
        lg: {
          width: 108,
          height: 152
        }
      };

    return (
      // @ts-ignore
      <RatingsDialog bookId={book.id}>
        <CompactRatingContainer css={css}>
        <CompactRatingInformations>
          <img width={IMAGE_SIZES[size].width} height={IMAGE_SIZES[size].height} alt={book.name} src={book.cover_url}  />
          <CompactRatingInformationsText>
            <CompactRatingInformationsBookAndAuthor>
            <h4>{book.name}</h4>
            <GrayText>{book.author}</GrayText>
            </CompactRatingInformationsBookAndAuthor>
            <CompactRatingStars>
            <Star weight='fill' />
            <Star weight='fill' />
            <Star weight='fill' />
            <Star weight='fill' />
            <Star />
            </CompactRatingStars>
          </CompactRatingInformationsText>
        </CompactRatingInformations>
      </CompactRatingContainer>
      </RatingsDialog>
    )
}