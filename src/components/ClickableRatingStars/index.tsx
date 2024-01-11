import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Star } from 'phosphor-react';
import { Container } from './styles';

type RatingState = [boolean, boolean, boolean, boolean, boolean];

const initialRatingState: RatingState = [false, false, false, false, false];

interface ClickableRatingStarsProps {
  value: number; // Recebe o valor da classificação selecionada
  onChange: (value: number) => void; // Retorna o valor da classificação selecionada
}

const ClickableRatingStars = forwardRef(
  ({ value, onChange }: ClickableRatingStarsProps, ref: React.Ref<any>) => {
    const [rating, setRating] = useState<RatingState>(initialRatingState);

    useEffect(() => {
      const newRating = initialRatingState.map((_, i) => i < value);
      setRating(newRating as RatingState);
    }, [value]);

    const handleStarClick = (index: number) => {
      const newRating = initialRatingState.map((_, i) => i <= index);
      setRating(newRating as RatingState);
      onChange(index + 1);
    };

    const handleStarHover = (index: number) => {
      const newRating = initialRatingState.map((_, i) => i <= index);
      setRating(newRating as RatingState);
    };

    const handleStarLeave = () => {
      const newRating = initialRatingState.map((_, i) => i < value);
      setRating(newRating as RatingState);
    };

    return (
      <Container>
        {[0, 1, 2, 3, 4].map((index) => (
          <Star
            key={index}
            weight={rating[index] ? 'fill' : 'regular'}
            onMouseEnter={() => handleStarHover(index)}
            onMouseLeave={handleStarLeave}
            onClick={() => handleStarClick(index)}
          />
        ))}
      </Container>
    );
  }
);

export default ClickableRatingStars;