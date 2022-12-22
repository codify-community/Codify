import Image from "next/image"

import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

import { Clock, CurrencyDollar, DiscordLogo, InstagramLogo, WhatsappLogo } from "phosphor-react"

import { Author, FreelaHeaderContainer, Profile, Header, Tags, Info, FreelaHeaderLink, Contact } from "../../styles/components/codefreelas/FreelaHeader"
import { theme } from "../../styles"

import { Freela } from "../../pages/codefreelas/freela/[userId]/[freelaId]";
import { Tag } from "../Tag"

interface FreelaHeaderProps {
  freela: Freela
}

export function FreelaHeader({ freela }: FreelaHeaderProps) {
  const FormattedDate = formatDistanceToNow(new Date(freela.createdAt), {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <FreelaHeaderContainer>
      <Header>
        <Author>
          <FreelaHeaderLink href={`/codefreelas/user/${freela.user_id}`}>
            <Profile>
              <Image src={freela.user_avatar} alt="" width={38} height={38} />
              <strong>{freela.user_name}</strong>
            </Profile>
          </FreelaHeaderLink>
          <Contact>
            <a href={`https://discordapp.com/users/${freela.user_id}`} target="_blank" rel="noreferrer">
              <DiscordLogo weight="fill" size={33} color={theme.colors.blue500.value} />
            </a>
            {freela.user_whatsapp && <a href="https://google.com" target="_blank" rel="noreferrer">
              <WhatsappLogo weight="fill" size={33} color={theme.colors.green400.value} />
            </a>}
            {freela.user_whatsapp && <a href="https://google.com" target="_blank" rel="noreferrer">
              <InstagramLogo weight="fill" size={33} color={theme.colors.yellow500.value} />
            </a>}
          </Contact>
        </Author>
        <time dateTime={new Date(freela.createdAt).toISOString()}>{FormattedDate}</time>
      </Header>

      <h2>{freela.title}</h2>

      <Tags>
        {freela.technologies.map(technology => (
          <Tag key={technology} name={technology} />
        ))}
      </Tags>

      <Info>
        <div>
          <CurrencyDollar size={22} color={theme.colors.green400.value} />
          <p>{freela.price}</p>
        </div>
        <div>
          <Clock size={22} color={theme.colors.gray400.value} />
          <p>{freela.deadline}</p>
        </div>
      </Info>
    </FreelaHeaderContainer>
  )
}