import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Freela } from '..'
import { FreelaCard } from '../../../components/FreelaCard'
import { Title } from '../../../components/Title'
import { UserHeader } from '../../../components/codefreelas/UserHeader'
import { Loading } from '../../../components/Loading'

import { api } from '../../../lib/axios'

import { Banner, UserContainer, Content, Posts, Header, ActivePostsSection } from '../../../styles/pages/codefreelas/user'

interface UserProps {
  user: User
}

export interface User {
  id: number
  avatar: string
  banner: string
  name: string
  description: string
  whatsapp: string
  instagram: string
  total_posts: number
  active_posts: number
  posts: Freela[]
  createdAt: Date
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
          <Image src="https://i0.wp.com/agilecheetah.com/wp-content/uploads/2021/10/Agile-Cheetah-Thinkific-Banner-1440px.png" alt="" width={1660} height={533} />
          <Header>
            <UserHeader user={user} />
          </Header>
        </Banner>

        <Content>
          <ActivePostsSection>
            <Title text='Posts ativos' />

            <Posts>
              {user.posts.map(post => (
                <FreelaCard key={post.id} freela={post} />
              ))}
            </Posts>
          </ActivePostsSection>
        </Content>
      </UserContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, { userId: string }> = async ({ params }) => {
  const userId = params?.userId

  const user = await api.get('/users', {
    params: {
      id: userId
    }
  })

  return {
    props: {
      user: {
        ...user.data[0]
      }
    }
  }
}