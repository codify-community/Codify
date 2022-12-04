import Head from "next/head";
import Image from "next/image";
import { Container } from "../styles/pages/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Codify Community</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      
      <Container>
        Home page
      </Container>
    </>
  )
}
