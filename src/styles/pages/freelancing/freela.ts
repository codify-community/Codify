import { styled } from '../..'

export const FreelaContainer = styled('div')

export const Header = styled('header', {
  display: 'flex',
  flexDirection: 'column',

  alignItems: 'center',

  margin: '0 auto',
  marginBottom: -115,
  marginTop: '7rem',

  maxWidth: '1440px',
  width: '100%',

  h1: {
    textAlign: 'center',

    fontWeight: 700,
    lineHeight: '130%',
    fontSize: '6rem',

    paddingTop: '1.875rem',
    paddingBottom: '2.5rem',
  },
})

export const Content = styled('div', {
  paddingTop: '7.5rem',

  backgroundColor: '$purpleCodify900B',

  paddingBottom: '7.5rem',

  div: {
    maxWidth: '1440px',
    width: '100%',
    overflow: 'hidden',

    padding: '2.5rem 2rem',

    margin: '0 auto',

    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
  },
})
