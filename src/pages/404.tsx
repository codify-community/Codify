import Head from 'next/head'
import Image from 'next/image'
import { Title } from '../components/Title'

import { Error404Container } from '../styles/pages/404'

import NotFound from '../assets/NotFound.svg'

export default function Page404() {
  return (
    <>
      <Head>
        <title>Codify Community</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <main>
        <Error404Container>
          <Title text="Oooooops" />
          <strong>Página não encontrada</strong>
          <Image src={NotFound} alt="" />
        </Error404Container>
      </main>
    </>
  )
}
