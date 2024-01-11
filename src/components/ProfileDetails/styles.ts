import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "max-content",
  paddingLeft: '4rem',
  width: '19.5rem'
})

export const UserInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "&::after": {
    content: "''",
    display: "block",
    width: 32,
    height: 4,
    background: "$gradient-horizontal",
    borderRadius: "$full",
    marginTop: 40
  }
})

export const ProfileDetailsWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 40,
  marginTop: 50,
  justifyContent: 'center'
})