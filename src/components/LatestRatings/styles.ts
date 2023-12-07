import { styled } from "@stitches/react";

export const FlexContainer = styled('div', {
    display: 'flex',
})

export const HomeBody = styled('div', {
    width: '74.25rem',
    height: '63.7rem',
    marginTop: 1.25 * 16,
    marginBottom: 1.25 * 16,
    flex: 1,
    marginLeft: '6rem',

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

export const Posts = styled('div', {
  display: 'flex',
  gap: '0.75rem',
  flexDirection: 'column'
})