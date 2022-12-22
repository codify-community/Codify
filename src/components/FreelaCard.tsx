import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Clock, CurrencyDollar } from "phosphor-react";

import { Content, Footer, FreelaCardContainer, FreelaLink, Header, Tags } from "../styles/components/FreelaCard";

import { Freela } from "../pages/codefreelas/freela/[userId]/[freelaId]";
import { Tag } from "./Tag";
import { theme } from "../styles";

export function FreelaCard({ id, title, description, price, technologies, deadline, createdAt, user_id, user_avatar, user_name }: Freela) {
  const FormattedDate = formatDistanceToNow(new Date(createdAt), {
    locale: ptBR,
    addSuffix: true,
  })

  const FormattedDescription = description.length > 240 ? `${description.substring(0, 240)}...` : description

  return (
    <FreelaLink href={`/codefreelas/freela/${user_id}/${id}`} prefetch={false}>
      <FreelaCardContainer>
        <Header>
          <div>
            <Image src={user_avatar} alt="" width={38} height={38} />
            <p>{user_name}</p>
          </div>
          <time dateTime={new Date(createdAt).toISOString()}>{FormattedDate}</time>
        </Header>

        <Content>
          <h3>{title}</h3>
          <p>{FormattedDescription}</p>

          <strong>Tecnologias</strong>
          <Tags>
            {technologies.map(technology => (
              <Tag key={technology} name={technology} />
              ))}
          </Tags>
        </Content>

        <Footer>
          <div>
            <CurrencyDollar size={22} color={theme.colors.green400.value} />
            <p>{price}</p>
          </div>
          <div>
            <Clock size={22} color={theme.colors.gray400.value} />
            <p>{deadline}</p>
          </div>  
        </Footer>
      </FreelaCardContainer>
    </FreelaLink>
  )
}