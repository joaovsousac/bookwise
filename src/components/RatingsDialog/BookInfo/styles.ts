import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$4",

  div: {
    h1: {
      fontSize: '$md'
    }
  },

  svg: {
    width: 24,
    height: 24,
    color: "$green-100"
  },
})