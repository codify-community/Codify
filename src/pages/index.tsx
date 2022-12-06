import Head from "next/head";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";
import { KeenSliderInstance, useKeenSlider } from 'keen-slider/react'

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
    '(max-width: 1024px)': {
      slides: {
        perView: 2,
        spacing: 32,
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

export default function Home() {
  const [staffSliderRef] = useKeenSlider(
  {
    ...sliderConfig
  },
  [
    (slider) => {
      let timeout: any
      let mouseOver = false
      function clearNextTimeout() {
        clearTimeout(timeout)
      }
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
          slider.next()
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
    },
  ])

  const [boosterSliderRef] = useKeenSlider(
    {
      ...sliderConfig
    },
    [
      (slider) => {
        let timeout: any
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
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
            <DetailCard title="Canais" value="80" />
            <DetailCard title="Membros" value="7125" />
            <DetailCard title="Staffs" value="15" />
            <DetailCard title="Anos" value="2" />
          </DetailCards>
        </AboutContainer>

        <CardSection>
          <Title text="Staffs" />
          
          <Cards ref={staffSliderRef} className="keen-slider">
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
          </Cards>

          <Title text="Boosters" />
          
          <Cards ref={boosterSliderRef} className="keen-slider">
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
          </Cards>
        </CardSection>
      </Container>
    </>
  )
}