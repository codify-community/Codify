import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    userSelect: 'none',
  },

  /*  Scrollbar */
  'body::-webkit-scrollbar': {
    width: 12,
  },

  'body::-webkit-scrollbar-track': {
    background: '$purpleCodify900',
  },

  'body::-webkit-scrollbar-thumb': {
    backgroundColor: '$blue500',
    border: '3px solid $purpleCodify900B',
    borderRadius: 20,
    height: 20,
  },
  /* Scrollbar */

  body: {
    backgroundColor: '$purpleCodify900',
    color: '$white',
    '--webkit-font-smoothing': 'antialiased',
  },

  'body, input, button, textarea': {
    fontSize: '1rem',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
  },

  '@media (max-width: 700px)': {
    ':root': {
      fontSize: 12,
    }
  }
})