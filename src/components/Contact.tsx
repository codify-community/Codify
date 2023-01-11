import { DiscordLogo, InstagramLogo, WhatsappLogo } from 'phosphor-react'

import { theme } from '../styles'
import { ContactContainer } from '../styles/components/Contact'

interface ContactProps {
  discord: string
  whatsapp?: string
  instagram?: string
}

export function Contact({ discord, instagram, whatsapp }: ContactProps) {
  return (
    <ContactContainer>
      <a
        href={`https://discordapp.com/users/${discord}`}
        target="_blank"
        rel="noreferrer"
      >
        <DiscordLogo
          weight="fill"
          size={32}
          color={theme.colors.blue500.value}
        />
      </a>
      {whatsapp && (
        <a href={`https://wa.me/${instagram}`} target="_blank" rel="noreferrer">
          <WhatsappLogo
            weight="fill"
            size={32}
            color={theme.colors.green400.value}
          />
        </a>
      )}
      {instagram && (
        <a
          href={`https://www.instagram.com/${whatsapp}`}
          target="_blank"
          rel="noreferrer"
        >
          <InstagramLogo
            weight="fill"
            size={32}
            color={theme.colors.yellow500.value}
          />
        </a>
      )}
    </ContactContainer>
  )
}
