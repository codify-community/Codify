import { styled } from "../..";

export const UserHeaderContainer = styled('div', {
  position: 'relative',
  display: 'flex',

  gap: 16,

  padding: '2rem 2.5rem',

  width: '100%',

  borderRadius: 8,
  backgroundColor: '#2B1554',

  img: {
    borderRadius: 8,
    width: '9.25rem !important',
  }
})

export const UserInformation = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  justifyContent: 'space-between',
})

export const Details = styled('div', {
  h1: {
    fontSize: '1.5rem',
    lineHeight: '160%',
  },

  div: {
    display: 'flex',
    alignItems: 'center',

    gap: '0.75rem',

    '@media (max-width: 660px)': {
      svg: {
        width: '1rem',
      }
    },
  },

  p: {
    maxHeight: 70,

    overflow: 'hidden',

    lineHeight: '160%',
    color: '$gray400',
  },
})

export const Summary = styled('div', {
  display: 'flex',
  alignItems: 'center',

  gap: 25,

  div: {
    display: 'flex',
    alignItems: 'center',

    gap: 4,
  },

  '@media (max-width: 412px)': {
    gap: 4,
    fontSize: '0.875rem',
  },
})