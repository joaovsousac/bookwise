import { styled } from "@stitches/react";

export const Container = styled('div', {
    svg: {
        width: 28,
        height: 28,
        color: '$purple-100',

        '&:hover': {
            cursor: 'pointer',
        }
    }
})