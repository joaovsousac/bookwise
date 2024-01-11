import { styled } from "@stitches/react"
import { TextareaAutosize as TextArea } from "@mui/material"

export const Container = styled("div", {
  background: "$gray-700",
  padding: "$6",
  borderRadius: 8,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column'
})

export const Header = styled('div', {
  height: '2.5rem',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
})

export const UserInformations = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '1rem',
  fontWeight: 700,
})

export const Form = styled('form', {
  paddingTop: '1rem'
})

export const FormTextArea = styled(TextArea, {
  width: '100%',
  height: '10.25rem',
  background: '$gray-800',
  border: '1px solid #252D4A',
  resize: 'none',
  borderRadius: 10,
  color: '#fff',
  padding: '1.5rem',

  '&:focus': {
    borderColor: '$green-200',
    outline: 0
  }
})

export const Buttons = styled('div', {

  display: 'flex',

  gap: '0.5rem',
  paddingTop: '1rem',

  '& > button:nth-child(1)': {
    svg: {
      color: '$purple-100'
    }
  },

  '& > button:nth-child(2)': {
    svg: {
      color: '$green-100'
    }
  },

  button: {
    all: 'unset',
    width: 40,
    height: 40,
    background: '$gray-600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '$md',
    cursor: 'pointer',

    '&:hover': {
      background: '$gray-500'
    },

    svg: {
      width: '24px',
      height: '24px'
    }
  }
})

export const Footer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  width: '100%',
  alignItems: 'center'
})

export const Errors = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  p: {
    fontSize: '80%'
  }
})