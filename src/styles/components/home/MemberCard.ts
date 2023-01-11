import { styled } from '../..'

export const MemberCardContainer = styled('div', {
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  backgroundColor: '$purpleCodify700',

  borderRadius: 8,

  transition: 'background-color 0.3s ease-in-out',

  boxShadow: '0px 0px 45px 1px rgba(0, 0, 0, 0.25)',

  '&:hover': {
    backgroundColor: '$purpleCodify900B',
  },
})

export const Role = styled('div', {
  position: 'absolute',
  top: '2.375rem',
  left: '2.375rem',

  padding: '0.4rem 1rem',

  backgroundColor: '$blue500',

  borderRadius: 8,

  fontFamily: 'PT Sans',
  fontWeight: 'bold',
  fontSize: '1rem',

  variants: {
    role: {
      booster: {
        backgroundColor: '$purpleCodify500',
      },
      mod: {
        backgroundColor: '$blue500',
      },
      admin: {
        backgroundColor: '$red500',
      },
      owner: {
        backgroundColor: '$yellow500',
      },
    },
  },
})

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  padding: '0 2.375rem',

  textAlign: 'center',

  img: {
    marginTop: '4rem',

    borderRadius: 999,
    border: '10px solid transparent',
    outline: '2px solid $blue500',
  },

  strong: {
    marginTop: '1.375rem',

    fontFamily: 'PT Sans',
    fontSize: '2rem',
    fontWeight: 'bold',
  },

  span: {
    marginTop: '0.5rem',

    fontFamily: 'PT Sans',
    color: '$gray200',
  },

  p: {
    marginTop: '1.5rem',

    fontFamily: 'PT Sans',
    fontWeight: 400,
  },

  a: {
    marginTop: '1.5rem',
    padding: '0.2rem 0.3rem',

    border: '1px solid $white',
    borderRadius: 6,

    color: '$white',

    marginBottom: '2rem',

    '&:hover': {
      transition: 'all 0.3s ease-in-out',
      backgroundColor: '$white',
      color: '$purpleCodify900B',
    },
  },
})

export const SkillsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  width: '100%',
  height: '6.375rem',

  marginTop: 'auto',
  padding: '0.5rem 2.375rem',

  borderBottomRightRadius: 8,
  borderBottomLeftRadius: 8,
  backgroundColor: '$purpleCodify500',

  fontFamily: 'PT Sans',
})

export const Skills = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',

  gap: '0.375rem',

  marginTop: '0.375rem',
  overflow: 'hidden',
})
