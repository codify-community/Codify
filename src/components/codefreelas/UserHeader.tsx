import Image from "next/image"

import { formatDistanceToNow } from "date-fns";

import { DiscordLogo, InstagramLogo, Package, PaperPlaneTilt, WhatsappLogo } from "phosphor-react"
import { User } from "../../pages/codefreelas/user/[userId]"
import { theme } from "../../styles"

import { Contact, Summary, UserHeaderContainer, UserInformation, Details } from "../../styles/components/codefreelas/UserHeader"
import { ptBR } from "date-fns/locale";

interface UserHeaderProps {
  user: User
}

export function UserHeader({ user }: UserHeaderProps) {
  return (
    <UserHeaderContainer>
      <Image src={user.avatar_url} alt="" width={148} height={148} />

      <UserInformation>
        <Details>
          <div>
            <h2>{user.name}</h2>

            <Contact>
              <a href={`https://discordapp.com/users/${user._id}`} target="_blank" rel="noreferrer">
                <DiscordLogo weight="fill" size={32} color={theme.colors.blue500.value} />
              </a>
              {user.whatsapp && <a href="https://google.com" target="_blank" rel="noreferrer">
                <WhatsappLogo weight="fill" size={32} color={theme.colors.green400.value} />
              </a>}
              {user.instagram && <a href="https://google.com" target="_blank" rel="noreferrer">
                <InstagramLogo weight="fill" size={32} color={theme.colors.yellow500.value} />
              </a>}
            </Contact>
          </div>

          <p>{user.description}</p>
        </Details>

        <Summary>
          <div>
            <PaperPlaneTilt weight="fill" size={22} color={theme.colors.gray400.value} />
            <p>{user.active_posts} Posts ativos</p>
          </div>
          <div>
            <Package weight="fill" size={22} color={theme.colors.gray400.value} />
            <p>{user.total_posts} Posts totais</p>
          </div>
        </Summary>
      </UserInformation>
    </UserHeaderContainer>
  )
}