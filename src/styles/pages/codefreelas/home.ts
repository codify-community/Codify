import { styled } from "../..";

export const FormContainer = styled('div', {
  padding: '0 1rem',
})

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',

  alignItems: 'center',

  margin: '0 auto',

  maxWidth: '1440px',
  width: '100%',

  h1: {
    textAlign: 'center',
    
    fontWeight: 700,
    lineHeight: '130%',
    fontSize: '6rem',

    paddingTop: '6.875rem',
    paddingBottom: '2.5rem',
  },

  p: {
    textAlign: 'center',

    marginBottom: '2.5rem',

    color: '$blue500',

    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    lineHeight: '130%',
    fontSize: '2.2rem',
  },

  input: {
    border: 'none',
    borderRadius: 8,

    padding: '1rem',

    backgroundColor: '#2B1554',

    marginBottom: -25,
    width: '100%',

    color: '$white',

    '&::placeholder': {
      fontWeight: 300,
      color: '#C6C6C6',
      lineHeight: '160%',
    },

    '&:focus': {
      outline: '$blue500 solid 2px',
    }
  }
})

export const Content = styled('main', {
  display: 'flex',
  flexDirection: 'column',

  padding: '0 1rem',
  paddingTop: '11.25rem',

  backgroundColor: '$purpleCodify900B'
})

export const FreelasContainer = styled('div', {
  margin: '0 auto',
  marginBottom: '10rem',

  maxWidth: '1440px',
  width: '100%',
})

export const Freelas = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',

  gap: '4rem 2rem',

  '@media (max-width: 800px)': {
    gridTemplateColumns: '1fr',
  }
})