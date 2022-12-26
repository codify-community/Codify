import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";
import { KeenSliderInstance, useKeenSlider } from 'keen-slider/react'

import { summaryApi } from "../lib/axios";

import 'keen-slider/keen-slider.min.css'
import WaveSvg from "../assets/wave.svg"
import AboutImage from "../assets/aboutMe.png"
import { DiscordLogo } from "phosphor-react";

import { About, AboutContainer, Banner, CardSection, Container, Content, DetailCards, Wave, Cards } from "../styles/pages/home";

import { Title } from "../components/Title";
import { DetailCard } from "../components/home/DetailCard";
import { MemberCard } from "../components/home/MemberCard";

const sliderConfig = {
  loop: true,
  mode: 'free-snap' as any,
  slides: {
    perView: 3,
    spacing: 48,
  },
  breakpoints: {
    '(max-width: 1246px)': {
      slides: {
        perView: 2,
        spacing: 16,
      },
    },
    '(max-width: 499px)': {
      slides: {
        perView: 1,
        spacing: 16,
      },
    },
  },
}

const sliderAnimationConfig = (slider: KeenSliderInstance) => {
  let timeout: any
  let mouseOver = false
  function clearNextTimeout() {
    clearTimeout(timeout)
  }
  function nextTimeout() {
    clearTimeout(timeout)
    if (mouseOver) return
    timeout = setTimeout(() => {
      if (slider.slides.length > 3) slider.next()
    }, 2000)
  }
  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true
      clearNextTimeout()
    })
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false
      nextTimeout()
    })
    nextTimeout()
  })
  slider.on("dragStarted", clearNextTimeout)
  slider.on("animationEnded", nextTimeout)
  slider.on("updated", nextTimeout)
}

interface HomeProps {
  details: Details[]
  staffs: Member[]
  boosters: Member[]
}

interface Details {
  id: number
  title: string
  value: string
}

export interface Member {
  id: number
  role: 'mod' | 'admin' | 'owner' | 'booster'
  avatar: string
  name: string
  ocupation: string
  bio: string
  github: string
  technologies: string[]
}

export default function Home({ details, staffs, boosters }: HomeProps) {
  const [staffSliderRef] = useKeenSlider(
  {
    ...sliderConfig
  },
  [
    (slider) => {
      sliderAnimationConfig(slider)
    },
  ])
  const [boosterSliderRef] = useKeenSlider(
    {
      ...sliderConfig
    },
    [
      (slider) => {
        sliderAnimationConfig(slider)
      },
  ])

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
            {details.map(detail => (
              console.log(detail),
              <DetailCard key={detail.title} title={detail.title} value={detail.value} />
            ))}
          </DetailCards>
        </AboutContainer>

        <CardSection>
          <Title text="Staffs" />
          
          <Cards ref={staffSliderRef} className="keen-slider">
            {staffs.map((member: Member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </Cards>

          <Title text="Boosters" />
          
          <Cards ref={boosterSliderRef} className="keen-slider">
            {boosters.map((member: Member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </Cards>
        </CardSection>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const details = await summaryApi.get('/summary')

  return {
    props: {
      details: details.data.details,
      staffs: details.data.staffs,
      boosters: details.data.boosters,
    },
    revalidate: 60 * 15 // 15 minutes
  }
}