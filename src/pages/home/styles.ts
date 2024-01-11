import { styled } from "@stitches/react";

export const FlexContainer = styled('div', {
  display: 'flex',

})

export const HomeRatings = styled('div', {

    height: '63.7rem',
    marginTop: 1.25 * 16,
    marginBottom: 1.25 * 16,
    flex: 1,
    marginLeft: '6rem',
    maxWidth: '38rem',

    h2: {
      marginTop: '3.25rem',

      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',

      svg: {
        color: '$green-100'
      }
    },

    p: {
        marginTop: '3.125rem'
    }
})

export const PopularBooksContainer = styled('div', {
  display: 'flex',
  justifyContent: "center"
})

export const Posts = styled('div', {
  display: 'flex',
  gap: '0.75rem',
  flexDirection: 'column'
})

export const HomeContainer = styled("section", {
  display: "grid",
  height: "100%",
  gridTemplateColumns: "1fr 308px",
  gap: 64,
  overflow: "hidden",
})