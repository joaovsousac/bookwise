import { getRelativeTimeString } from "@/utils/getRelativeTimeString"
import Link from "next/link"
import { ProfileRating } from ".."
import { BookDetails, BookImage, CardContent, Container, Stars } from "./styles"
import { RatingStars } from "@/components/Rating/styles"
import { Star } from "phosphor-react"

type ProfileRatingCard = {
  rating: ProfileRating
}


export const ProfileRatingCard = ({ rating }: ProfileRatingCard) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating.rate) {
      stars.push(<Star weight='fill' key={i} />);
    } else {
      stars.push(<Star key={i} />);
    }
  }

  const distance = getRelativeTimeString(new Date(rating.created_at), "pt-BR");
  return (
    <Container>
      <p color="gray-300">{distance}</p>

      <CardContent>
        <BookDetails>
          <Link style={{ display: 'flex' }} href={`/explore?book=${rating.book_id}`}>
            <BookImage src={rating.book.cover_url} alt={rating.book.name} width={98} height={134} />
          </Link>
          <section>
            <div>
              <h2>{rating.book.name}</h2>
              <p>{rating.book.author}</p>
            </div>
            <Stars>
              {stars}
            </Stars>
          </section>
        </BookDetails>
        <p>{rating.description}</p>
      </CardContent>
    </Container>
  )
}