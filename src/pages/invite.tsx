import Head from 'next/head'
import { useEffect } from 'react'

import { InviteContainer } from '../styles/pages/invite'
import { Title } from '../components/Title'

import NotFound from '../assets/NotFound.svg'
import Image from 'next/image'

export default function Invite() {
  useEffect(() => {
    window.location.href = 'https://discord.gg/hU27wXZEns'
  }, [])

  return (
    <>
      <Head>
        <title>Codify Community</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <main>
        <InviteContainer>
          <Title text="Redirecionando..." />
          <Image src={NotFound} alt="" />
        </InviteContainer>
      </main>
    </>
  )
}
