import { Skeleton } from "@mui/material";
import { styled, keyframes } from "@stitches/react";

const skeletonLoading = keyframes({
  '0%': {
    backgroundColor: 'hsl(200, 20%, 80%)',
  },
  '100%': {
    backgroundColor: 'hsl(200, 20%, 95%)',
  }
});


const imageSize = {
  width: 598,
  height: 912,
  // Espaçamentos
  marginLeft: 1.25 * 16, // convertendo rem para pixels (se o valor estiver em rem)
  marginTop: 1.25 * 16,
  marginBottom: 1.25 * 16,
};

const availableWidth = `calc(100% - ${imageSize.width}px - ${imageSize.marginLeft}px)`;
const availableHeight = `calc(100% - ${imageSize.marginTop}px - ${imageSize.marginBottom}px)`;

export const LoginContainer = styled('div', {
  display: 'flex',
  alignItems: 'center'
})

export const LoginImage = styled('div', {
  width: `${imageSize.width}px`,
  height: `${imageSize.height}px`,
  background: 'url(images/home-image.png)',
  marginLeft: `${imageSize.marginLeft}px`,
  marginTop: `${imageSize.marginTop}px`,
  marginBottom: `${imageSize.marginBottom}px`,
  borderRadius: '$md',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
  img: {
    display: 'flex',
    justifyContent: 'center',
    height: '3.625rem',
    width: '14.5rem'
  }
})

export const LoginMethods = styled('div', {
  width: availableWidth,
  height: availableHeight,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  div: {
    
  },

  h2: {
    color: '$gray-100'
  },

  button: {
    width: '23.25rem',
    height: '4.5rem',
    display: 'flex',
    borderRadius: '$md',
    border: 'none',
    backgroundColor: '$gray-600',
    marginBottom: '1rem',
    marginTop: '1rem',
    alignItems: 'center',
    paddingLeft: '1.5rem',
    cursor: 'pointer',
    
    '&:hover': {
      backgroundColor: '$gray-500',
      transition: '0.1s'
    },

    p: {
      color: '$gray-200',
      fontWeight: 'bold',
      fontSize: '$lg',
      paddingLeft: '1.25rem'
    }
  }
})
