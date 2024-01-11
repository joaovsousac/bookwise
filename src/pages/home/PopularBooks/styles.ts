import { styled } from "@stitches/react";

export const Container = styled('div', {
    width: '20.25rem',
    paddingTop: '9.125rem',
    display: 'flex',
    justifyContent: 'flex-start',
    marginLeft: '15rem',
    maxHeight: '37.625rem',
    flexDirection: 'column',
    gap: '0.75rem',

})

export const TitleContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    height: 30,

    button: {
        all: 'unset',
        color: '$purple-100',
        fontWeight: '700',
        cursor: 'pointer',
        transition: '0.1s',

        '&:hover': {
            color: '$purple-200'
        }
    }
})

export const BooksContainer = styled('div', {
    display: "flex",
    flexDirection: "column",
    gap: "$3",
    marginTop: "$4",
})