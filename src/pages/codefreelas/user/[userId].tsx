import { useRouter } from 'next/router'
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { ResumeFreela } from '..'
import { FreelaCard } from '../../../components/FreelaCard'
import { Title } from '../../../components/Title'
import { UserHeader } from '../../../components/codefreelas/UserHeader'
import { Loading } from '../../../components/Loading'

import { codeFreelasApi } from '../../../lib/axios'

import { Banner, UserContainer, Content, Posts, Header, ActivePostsSection } from '../../../styles/pages/codefreelas/user'

interface UserProps {
  user: User
}

export interface User {
  _id: string
  name: string
  banner_url: string
  avatar_url: string
  whatsapp: string
  instagram: string
  description: string
  freelas: ResumeFreela[]
  total_posts: number
  active_posts: number
}

export default function UserPage({ user }: UserProps) {
  const { isFallback } = useRouter()

  if (isFallback) {
    return <Loading />
  }

  return (
    <>
      <Head>
        <title>Codify Community</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <UserContainer>
        <Banner>
          <Image src={user.banner_url} alt="" width={1660} height={533} />
          <Header>
            <UserHeader user={user} />
          </Header>
        </Banner>

        <Content>
          <ActivePostsSection>
            <Title text='Posts ativos' />

            <Posts>
              {user.freelas.map(freela => (
                <FreelaCard
                  key={freela.id}
                  id={freela.id}
                  title={freela.title}
                  description={freela.description}
                  price={freela.price}
                  deadline={freela.deadline}
                  technologies={freela.technologies}
                  createdAt={freela.createdAt}
                  user_id={user._id}
                  user_avatar={user.avatar_url}
                  user_name={user.name}
                />
              ))}
            </Posts>
          </ActivePostsSection>
        </Content>
      </UserContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<any, { userId: string }> = async ({ params }) => {
  const userId = params?.userId

  const user = await codeFreelasApi.get(`/${userId}`)

  return {
    props: {
      user: {
        ...user.data
      }
    }
  }
}