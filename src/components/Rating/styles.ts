import { styled } from "@stitches/react";

export const Container = styled('div', {

    variants: {
        variant: {
          default: {
            background: "$gray700",
          },
          compact: {
            background: "$gray600",
          }
        }
      },


})

export const RatingContainer = styled('div', {
    width: '38rem',
    height: '17.5rem',
    
    background: '$gray-700',
    borderRadius: '$md',
    padding: '1.5rem',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'space-between',

 
    '&:hover': {
        width: '38.063rem ',
        cursor: 'pointer',
        border: '1px solid $gray-500'
      }
})

export const RatingHeader = styled('header', {
    width: '100%',
    height: '3rem',
    display: 'flex' 
})

export const RatingUserInformations = styled('div', {
    height: '3rem',
    display: 'flex',
    width: '100%',

    div: {
        height: '3rem'
    }
})

export const RatingAvatar = styled('img', {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '$full',
    border: `2px solid #7FD1CC`,
    marginRight: '1rem'
})

export const RatingStars = styled('div', {
    display: 'flex',
    justifyContent: "flex-end",
    width: '100%',

    svg: {
        color: '$purple-100'
    }
})

export const RatingBookInformations = styled('div', {
    width: '100%',
    height: '9.5rem',
    display: 'flex', // Adicionar display flex
})

export const RatingBookInformationsText = styled('div', {
    width: '27rem',
    paddingLeft: '1.25rem',
    display: 'flex',
    flexDirection: 'column',

    p: {
        justifyContent: 'flex-start',
        margin: 0
    },

    div: {
        width: 432,
        height: 88
    }
})

export const GrayText = styled('span', {
    color: '$gray-400',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    fontSize: '$sm',
    alignItems: 'flex-start'
})

export const SeeMore = styled('button', {
    all: 'unset',
    color: '$purple-100',
    fontWeight: 'bold',
    cursor: 'pointer',

    '&:hover': {
        color: '$purple-200',
        transition: '0.1s'
    }
})

export const CompactRating = styled(RatingContainer, {
    width: '34.75rem',
    height: '100%',

    '&:hover': {
        width: '34.75rem',
        cursor: 'inherit',
        border: 'none'
      }
})

export const CompactRatingSummary = styled('div', {
   paddingTop: '1rem'
})