import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Clock, CurrencyDollar } from "phosphor-react";

import { Content, Footer, FreelaCardContainer, FreelaLink, Header, Tags } from "../styles/components/FreelaCard";

import { Tag } from "./Tag";
import { theme } from "../styles";

interface FreelaCardProps {
  freela: {
    id: number
    title: string
    description: string
    price: number
    deadline: string
    author: {
      id: number
      name: string
      avatar: string
    }
    technologies: string[]
    createdAt: Date
  }
}

export function FreelaCard({ freela }: FreelaCardProps) {
  const FormattedDate = formatDistanceToNow(new Date(freela.createdAt), {
    locale: ptBR,
    addSuffix: true,
  })

  const FormattedDescription = freela.description.length > 240 ? `${freela.description.substring(0, 240)}...` : freela.description

  return (
    <FreelaLink href={`codefreelas/freela/${freela.id}`} prefetch={false}>
      <FreelaCardContainer>
        <Header>
          <div>
            <Image src={freela.author.avatar} alt="" width={38} height={38} />
            <p>{freela.author.name}</p>
          </div>
          <time dateTime={new Date(freela.createdAt).toISOString()}>{FormattedDate}</time>
        </Header>

        <Content>
          <h3>{freela.title}</h3>
          <p>{FormattedDescription}</p>

          <strong>Tecnologias</strong>
          <Tags>
            {freela.technologies.map(technology => (
              <Tag key={technology} name={technology} />
              ))}
          </Tags>
        </Content>

        <Footer>
          <div>
            <CurrencyDollar size={22} color={theme.colors.green400.value} />
            <p>{freela.price}</p>
          </div>
          <div>
            <Clock size={22} color={theme.colors.gray400.value} />
            <p>{freela.deadline}</p>
          </div>  
        </Footer>
      </FreelaCardContainer>
    </FreelaLink>
  )
}