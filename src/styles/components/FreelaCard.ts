import { styled } from "..";
import Link from "next/link";

export const FreelaLink = styled(Link, {
  textDecoration: 'none',
  color: 'inherit',
})

export const FreelaCardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  height: '100%',

  backgroundColor: '$purpleCodify900',
  borderRadius: 16,

  padding: '2rem',

  gap: '1.25rem',

  boxShadow: '0px 0px 45px 1px rgba(0, 0, 0, 0.25)',

  transition: 'background-color 0.3s ease-in-out, outline 0.1s ease-in-out',

  '&:hover': {
    backgroundColor: '$purpleCodify700',
    outline: '$gray400 solid 2px',
  }
})

export const Header = styled('header', {
  display: 'flex',

  justifyContent: 'space-between',
  alignItems: 'center',

  div: {
    display: 'flex',
    alignItems: 'center',

    gap: 6,
    
    img: {
      borderRadius: '50%',
    },

    p: {
      fontWeight: 'bold',
      lineHeight: '160%',
    }
  },

  time: {
    fontFamily: 'PT Sans',
    fontSize: '0.875rem',
    lineHeight: '160%',
    color: '$gray400',
  }
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h3: {
    fontWeight: 'bold',
    fontSize: '1.25rem',
    lineHeight: '120%',
  },

  p: {
    fontFamily: 'PT Sans',
    lineHeight: '160%',
    color: '$gray400',

    padding: '1.25rem 0',

    wordBreak: 'break-word',
  },

  strong: {
    fontWeight: 'bold',
    fontSize: '1.25rem',
    lineHeight: '120%',
    color: '$gray200',
  }
})

export const Tags = styled('div', {
  display: 'flex',
  gap: '0.375rem',

  width: '100%',
  height: '3.5rem',

  flexWrap: 'wrap',
  overflow: 'hidden',

  marginTop: '0.5rem',
})

export const Footer = styled('footer', {
  display: 'flex',
  margin: 'auto 0 0 0',

  gap: '1rem',

  div: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
})