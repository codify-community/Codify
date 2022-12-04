import { styled } from "..";

export const HeaderContainer = styled('header', {
  variants: {
    isScrolled: {
      true: {
        'backdrop-filter': 'blur(15px)',
        'box-shadow': '0 6px 15px 0 rgba(0, 0, 0, 0.25)',
      },
    },
  },
  position: "sticky",
  top: 0,

  display: 'flex',
  justifyContent: 'center',

  padding: '1rem 0',

  'transition': 'all 0.3s ease',
})

export const Content = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',  

  maxWidth: '1440px',
  width: '100%',
})

export const Navigation = styled('nav', {
  display: 'flex',
  alignItems: 'center',

  gap: '1rem',
  
  a: {
    textDecoration: 'none',
    borderBottom: '2px solid transparent',

    color: '$white',
    fontSize: '1.375rem',
    fontWeight: 'bold',

    '&:hover': {
      transition: 'all 0.2s ease-in-out',
      borderBottom: '2px solid $purpleCodify500',
    }
  }
})