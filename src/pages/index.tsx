import Head from "next/head";
import { DiscordLogo } from "phosphor-react";

import { TypeAnimation } from "react-type-animation";

import { Banner, Container, Content } from "../styles/pages/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Codify Community</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      
      <Container>
        <Banner>
          <Content>
            <h1>Codify Community</h1>
            
            <TypeAnimation
              sequence={[
                'Programação',
                5000,
                'Design',
                5000,
                'Comunidade',
                5000,
                'Code with ❤',
                5000,
              ]}
              wrapper="h2"
              cursor={true}
              repeat={Infinity} 
            />

            <a href="https://discord.com/invite/Hh6tUDy" target="_blank" rel="noopener noreferrer">
              <DiscordLogo weight="fill" size={32} />
              Faça parte da nossa comunidade
            </a>
          </Content>
        </Banner>
      </Container>
    </>
  )
}
