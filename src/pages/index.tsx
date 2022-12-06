import Head from "next/head";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Slider from "react-slick";

import { DiscordLogo } from "phosphor-react";

import WaveSvg from "../assets/wave.svg"
import AboutImage from "../assets/aboutMe.png"


import { About, AboutContainer, Banner, CardSection, Container, Content, DetailCards, Wave, Cards } from "../styles/pages/home";

import { Title } from "../components/Title";
import { DetailCard } from "../components/home/DetailCard";
import { MemberCard } from "../components/home/MemberCard";

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

        <Wave>
          <Image src={WaveSvg} alt="" fill />
        </Wave>
        
        <AboutContainer>
          <Title text="Sobre nós" />
          
          <About>
            <p>Somos uma comunidade de desenvolvedores que tem como objetivo ajudar iniciantes no mundo da programação.</p>
            <Image src={AboutImage} alt="" width={489} height={489} />
          </About>

          <DetailCards>
            <DetailCard title="Canais" value="80" />
            <DetailCard title="Membros" value="7125" />
            <DetailCard title="Staffs" value="15" />
            <DetailCard title="Anos" value="2" />
          </DetailCards>
        </AboutContainer>

        <CardSection>
          <Title text="Staffs" />
          
          <Cards>
            <MemberCard />
            <MemberCard />
            <MemberCard />
          </Cards>

          <Title text="Boosters" />
          
          <Cards>
            <MemberCard />
            <MemberCard />
            <MemberCard />
          </Cards>
        </CardSection>
      </Container>
    </>
  )
}
