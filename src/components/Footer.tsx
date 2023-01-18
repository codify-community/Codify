import Image from 'next/image'
import { GithubLogo, DiscordLogo, TelegramLogo } from 'phosphor-react'

import {
  Content,
  FooterContainer,
  Contact,
  Codify,
} from '../styles/components/Footer'

import Logo from '../assets/logo.svg'

export function Footer() {
  return (
    <FooterContainer>
      <Content>
        <Contact>
          <h3>Nossas Comunidades</h3>
          <div>
            <a
              href="https://github.com/codify-community"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo weight="fill" size={60} />
            </a>
            <a
              href="https://discord.com/invite/Hh6tUDy"
              target="_blank"
              rel="noreferrer"
            >
              <DiscordLogo weight="fill" size={60} />
            </a>
            <a
              href="https://t.me/codifycommunity"
              target="_blank"
              rel="noreferrer"
            >
              <TelegramLogo weight="fill" size={60} />
            </a>
          </div>
        </Contact>
        <Codify>
          &copy; 2023 Codify Community
          <Image src={Logo} alt="" width={190} height={73} />
        </Codify>
      </Content>
    </FooterContainer>
  )
}
