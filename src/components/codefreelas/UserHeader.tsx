import Image from 'next/image'

import { Package, PaperPlaneTilt } from 'phosphor-react'
import { User } from '../../pages/codefreelas/user/[userId]'
import { theme } from '../../styles'

import {
  Summary,
  UserHeaderContainer,
  UserInformation,
  Details,
} from '../../styles/components/codefreelas/UserHeader'
import { Contact } from '../Contact'

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
            <Contact
              discord={user._id}
              whatsapp={user.whatsapp}
              instagram={user.instagram}
            />
          </div>

          <p>{user.description}</p>
        </Details>

        <Summary>
          <div>
            <PaperPlaneTilt
              weight="fill"
              size={22}
              color={theme.colors.gray400.value}
            />
            <p>{user.active_posts} Posts ativos</p>
          </div>
          <div>
            <Package
              weight="fill"
              size={22}
              color={theme.colors.gray400.value}
            />
            <p>{user.total_posts} Posts totais</p>
          </div>
        </Summary>
      </UserInformation>
    </UserHeaderContainer>
  )
}
