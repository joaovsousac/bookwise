import { keyframes, styled } from "@stitches/react";

const fadeIn = keyframes({
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  });

export const FlexContainer = styled('div', {
  display: 'flex',
  
})

export const Title = styled('div', {
    display: 'flex',
    marginRight: 'auto',
    alignItems: 'center',
    gap: '0.75rem'
})

export const ExploreContainer = styled('div', {
    marginTop: 1.25 * 16,
    marginBottom: 1.25 * 16,
    paddingLeft: '6rem',

    header: {
        justifyContent: 'space-between',
        display: 'flex',
        width: '80rem',
        height: '3rem',
        alignItems: 'center'
    }
})

export const InputContainer = styled('div', {
    marginLeft: 'auto', // Empurra o Input para a direita,
    width: '27rem',
});

export const TagContainer = styled('div', {
    paddingTop: '2.5rem',
    display: 'flex',
    justifyContent: 'space-between'
})

export const BookContainer = styled('section', {
    display: "grid",
    height: "100%",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridAutoRows: 188,
    gap: "$5",
    overflowY: "auto",
    paddingTop: 40,
    width: '80rem',
  
    "&::-webkit-scrollbar": {
      display: "none"
    },
}
)

export const NoBookFound = styled('p', {
    justifyContent: 'center',
    alignItems: 'center',
    height: '30rem',
    display: 'flex',
    width: '80rem',
    color: '$gray-300',
    fontWeight: 700,
    fontSize: '$2xl',
    animation: `${fadeIn} 0.5s ease-in-out forwards`,
})