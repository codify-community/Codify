import Link from "next/link";
import { styled } from "../..";

export const FreelaHeaderLink = styled(Link, {
  textDecoration: 'none',
  color: 'inherit',
})

export const FreelaHeaderContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  width: '100%',

  padding: '2rem',

  backgroundColor: '#2B1554',
  borderRadius: 8,

  h2: {
    fontSize: '1.5rem',
    lineHeight: '120%',
  }
})

export const Header = styled('header', {
  display: 'flex',

  justifyContent: 'space-between',
  alignItems: 'center',

  marginBottom: '0.75rem',

  time: {
    fontFamily: 'PT Sans',
    fontSize: '0.875rem',
    lineHeight: '160%',
    color: '$gray400',
  }
})

export const Author = styled('div', {
  display: 'flex',
  alignItems: 'center',

  gap: 12,

  a: {
    display: 'flex',
    alignItems: 'center',
  }
})

export const Profile = styled('div', {
  display: 'flex',

  alignItems: 'center',

  gap: '0.75rem',

  backgroundColor: '$purpleCodify700',
  borderRadius: 8,

  padding: '0.5rem 0.75rem',

  img: {
    borderRadius: 999,
  },

  strong: {
    fontWeight: 'bold',
    lineHeight: '160%',
  },

  transition: 'background-color 0.2s ease-in-out',

  '&:hover': {
    backgroundColor: '$purpleCodify900',
  }
})

export const Contact = styled('div', {
  display: 'flex',
  gap: '0.75rem',
})

export const Tags = styled('div', {
  display: 'flex',
  gap: 6,

  flexWrap: 'wrap',

  marginTop: '0.5rem',
})

export const Info = styled('div', {
  display: 'flex',

  gap: '1rem',

  marginTop: '1.25rem',

  div: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,

    fontFamily: 'PT Sans',
  },
})