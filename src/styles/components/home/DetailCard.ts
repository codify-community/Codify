import { styled } from '../..'

export const DetailCardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '$purpleCodify700',

  borderRadius: 16,

  boxShadow: '0px 0px 45px 1px rgba(0, 0, 0, 0.25)',

  transition: 'all 0.3s ease-in-out',

  padding: '3.75rem 0',
  gap: '1.75rem',

  height: '100%',

  strong: {
    fontSize: '3rem',
    fontWeight: 'bold',
  },

  p: {
    fontSize: '1.875rem',
    fontWeight: 500,
    color: '$blue500',
  },

  '&:hover': {
    backgroundColor: '$purpleCodify900B',
    transform: 'translateY(-0.5rem)',
  },
})
