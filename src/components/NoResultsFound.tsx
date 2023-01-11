import Image from 'next/image'

import { NoResultsFoundContainer } from '../styles/components/NoResultsFound'

import Emoji1 from '../assets/Emoji1.png'

export function NoResultsFound() {
  return (
    <NoResultsFoundContainer>
      <Image src={Emoji1} alt="" width={250} height={250} />
      <strong>Nenhum resultado encontrado</strong>
    </NoResultsFoundContainer>
  )
}
