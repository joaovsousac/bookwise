import { styled } from "@stitches/react";

export const Container = styled("button", {
  background: "none",
  color: "$purple-100",
  border: "1px solid $purple-100",
  padding: "$1 $4",
  borderRadius: "$full",
  transition: "0.2s",
  cursor: 'pointer',

  "&:hover": {
    color: "$gray-100",
    background: "$purple-200",
  },

  variants: {
    active: {
      true: {
        color: "$gray-100",
        background: "$purple-200",
        borderColor: "$purple-200",
      }
    }
  }
})