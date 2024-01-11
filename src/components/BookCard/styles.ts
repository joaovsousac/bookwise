import { styled } from "@stitches/react"

export const CompactRatingContainer = styled('div', {
    width: '20.25rem',
    height: '8.125rem',
    background: '$gray-700',
    borderRadius: '$md',
    padding: '1.5rem',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: '0.1s',

    "&:hover": {
        cursor: 'pointer',
        background: '$gray-600'
    }
})

export const CompactRatingInformations = styled('div', {
    height: '6.125rem',
    display: 'flex', // Adicionar display flex
 
})

export const CompactRatingInformationsText = styled('div', {
    width: '12.5rem',
    paddingLeft: '1.25rem',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
})

export const CompactRatingInformationsBookAndAuthor = styled('div', {})

export const CompactRatingStars = styled('div', {


    svg: {
        color: '$purple-100'
    }
})