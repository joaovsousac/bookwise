import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { styled } from '@stitches/react';

export const DialogOverlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  background: "#00000099"
})

export const DialogContent = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  width: 660,
  height: "100%",
  background: "$gray-800",
  boxShadow: "-4px 0px 30px 0px #00000080",
  padding: "$6 48px",
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",

  "&::-webkit-scrollbar": {
    width: 6
  },

  "&::-webkit-scrollbar-track": {
    background: "$gray-700"
  },

  "&::-webkit-scrollbar-thumb": {
    background: "$gray-600"
  }
})

export const DialogClose = styled(Dialog.Close, {
  color: "$gray-400",
  background: "transparent",
  border: "none",
  marginLeft: "auto",
  marginBottom: "$4",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: 'pointer',
})

export const BookDetailsWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  background: "$gray-700",
  padding: "$6 $8",
  borderRadius: "$md",
})

export const BookDetailsContainer = styled("div", {
  display: "flex",
  gap: "$8",
})

export const BookImage = styled(Image, {
  borderRadius: "$md",
  objectFit: "cover",
  minWidth: 171
})

export const BookContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  h1: {
    fontSize: '$xl'
  }
})

export const BookInfos = styled("div", {
  marginTop: 40,
  paddingTop: 24,
  borderTop: "1px solid $gray-600",
  display: "flex",
  gap: 60
})

export const Avaliate = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  flexDirection: 'row',
  paddingTop: '2.5rem',
  paddingBottom: '0.75rem',

  button: {
    all: 'unset',
    color: '$purple-100',
    fontWeight: 700,
    fontSize: '$lg',
    cursor: 'pointer'
  }
})

export const Ratings = styled('div', {
  paddingTop: '0.75rem',
  
})