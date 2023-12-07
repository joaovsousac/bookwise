import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
    '*': {
        boxSizing: 'border-box',
        padding: 0,
        margin: 0,
        fontFamily: 'Nunito, sans-serif'
      },

      p: {
        margin: 0
      },
    
      body: {
        backgroundColor: '$gray-800',
        color: '$gray-200',
        '-webkit-font-smoothing': 'antialiased',
      },
})