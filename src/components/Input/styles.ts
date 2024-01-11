import { styled } from "@stitches/react";

export const InputContainer = styled("div", {
  background: "$gray-800",
  border: "1px solid currentColor",
  display: "flex",
  alignItems: "center",
  width: "100%",
  borderRadius: 4,
  gap: "$5",
  paddingRight: "$5",
  color: "$gray-500",
  transition: "0.2s",

  "&:focus-within": {
    color: "$green-200"
  },

  input: {
    height: 48,
    flex: 1,
    paddingLeft: "$5",
    background: "none",
    border: "none",
    color: "$gray-100",
    fontSize: "0.875rem",

    "&::placeholder": {
      color: "$gray-400"
    },

    "&:focus": {
      outline: "none"
    }
  }
})