import { styled } from "@stitches/react" 

export const Container = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
  paddingBottom: 40,

  "&::-webkit-scrollbar": {
    display: "none"
  },

  h1: {
    alignItems:'center',
    display: 'flex',
    gap: '0.5rem',

    svg: {
      color: '$green-100'
    }
  }
})

export const RatingsList = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$6"
})