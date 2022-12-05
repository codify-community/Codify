import { styled } from "..";

export const Container = styled('main', {
  display: 'flex',
  flexDirection: 'column',
})

export const Banner = styled('div', {
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  height: '56.937rem',

  paddingTop: '7.5rem',

  '::before': {
    content: '',

    position: 'absolute',
    top: 0,
    left: 0,
    
    width: '100%',
    height: '100%',

    background: 'url(/banner.png) no-repeat center',
    backgroundSize: 'cover',

    boxShadow: 'inset 0px 4px 0px 600px rgba(31, 14, 63, 0.76)',
    filter: 'blur(8px)',

    zIndex: -1, 
  }
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  
  maxWidth: '1440px',
  width: '100%',

  h1: {
    fontSize: '5rem',
    lineHeight: '130%',
    fontWeight: 700,
    color: '$gray200',

    paddingBottom: '1rem',
  },

  h2: {
    fontSize: '3rem',
    fontWeight: 'bold',
    lineHeight: '130%',
    color: '$blue500',
  },

  a: {
    display: 'flex',
    alignItems: 'center',

    gap: '0.625rem',

    marginTop: '5.625rem',
    padding: '1.156rem 1.5rem',

    textDecoration: 'none',

    fontSize: '1.5rem',
    lineHeight: '130%',
    color: '$gray200',

    border: '3px solid $blue500',
    borderRadius: '999px',

    '&:hover': {
      transition: 'all 0.3s ease-in-out',
      backgroundColor: '$blue500',
    }
  }
})