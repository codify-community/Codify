import { styled } from "..";

export const FooterContainer = styled('footer', {
  backgroundColor: '$purpleCodify900B',

  padding: '2rem 1rem',

  display: 'flex',
  justifyContent: 'center',

  boxShadow: '0 0 45px 1px rgba(0, 0, 0, 0.25)',
})

export const Content = styled('div', {
  maxWidth: '1440px', 
  width: '100%',

  display: 'flex',
  justifyContent: 'space-between',

  '@media (max-width: 525px)': {
    flexDirection: 'column',
    gap: '1.5rem',
  }
})

export const Contact = styled('div', {
  h3: {
    fontSize: '2rem',
    fontWeight: 'bold',
    fontFamily: 'PT Sans',
  },

  div: {
    display: 'flex',
    justifyContent: 'space-between',

    paddingTop: '1.5rem',

    a: {
      color: '$blue500',

      cursor: 'pointer',

      '&:hover': {
        transition: 'all 0.3s ease-in-out',
        '-webkit-transition': '0.5s ease-in',
        rotate: '360deg',
      }
    }
  },

  '@media (max-width: 525px)': {
    svg: {
      width: '6rem',
    }
  }
})

export const Codify = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  fontFamily: 'PT Sans',
  fontSize: '1.5rem',
})