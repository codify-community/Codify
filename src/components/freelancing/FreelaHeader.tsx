import Image from 'next/image'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Clock, CurrencyDollar } from 'phosphor-react'

import {
  Author,
  FreelaHeaderContainer,
  Profile,
  Header,
  Tags,
  Info,
  FreelaHeaderLink,
} from '../../styles/components/codefreelas/FreelaHeader'
import { theme } from '../../styles'

import { Freela } from '../../pages/freelancing/freela/[userId]/[freelaId]'
import { Tag } from '../Tag'
import { Contact } from '../Contact'

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
          <FreelaHeaderLink href={`/freelancing/user/${freela.user_id}`}>
            <Profile>
              <Image src={freela.user_avatar} alt="" width={38} height={38} />
              <strong>{freela.user_name}</strong>
            </Profile>
          </FreelaHeaderLink>
          <Contact
            discord={freela.user_id}
            whatsapp={freela.user_whatsapp}
            instagram={freela.user_instagram}
          />
        </Author>
        <time dateTime={new Date(freela.createdAt).toISOString()}>
          {FormattedDate}
        </time>
      </Header>

      <h2>{freela.title}</h2>

      <Tags>
        {freela.technologies.map((technology) => (
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
