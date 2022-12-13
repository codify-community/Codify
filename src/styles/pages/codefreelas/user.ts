import { styled } from "../..";

export const UserContainer = styled('div', {})

export const Banner = styled('header', {
  display: 'flex',
  flexDirection: 'column',

  backgroundColor: '$purpleCodify900B',

  img: {
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
})

export const Header = styled('div', {
  display: 'flex',
  
  margin: '0 auto',
  marginTop: -110,

  maxWidth: '1440px',
  width: '100%',
})

export const Content = styled('div', {
  backgroundColor: '$purpleCodify900B',

  padding: '0 1rem',
  paddingTop: '11.875rem',
})

export const ActivePostsSection = styled('section', {
  margin: '0 auto',
    
  maxWidth: 1440,
  width: '100%',
})

export const Posts = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',

  gap: '4rem 2rem',

  paddingBottom: '5.625rem',

  '@media (max-width: 800px)': {
    gridTemplateColumns: '1fr',
  }
})