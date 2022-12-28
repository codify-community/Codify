import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { codeFreelasApi } from '../../../../lib/axios'

import { FreelaHeader } from '../../../../components/codefreelas/FreelaHeader'
import { Loading } from '../../../../components/Loading'

import { FreelaContainer, Header, Content } from '../../../../styles/pages/codefreelas/freela'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Head from 'next/head'

interface FreelaPageProps {
  freela: Freela
}

export interface Freela {
  id: number
  title: string
  description: string
  price: number
  deadline: string
  technologies: string[]
  createdAt: Date
  user_id: string
  user_avatar: string
  user_name: string
  user_whatsapp: string
  user_instagram: string
}

export default function FreelaPage({ freela }: FreelaPageProps) {
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

      <FreelaContainer>
        <Header>
          <h1>Code Freelas</h1>
          <FreelaHeader freela={freela} />
        </Header>
        
        <Content>
          <div>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{freela.description}</ReactMarkdown>
          </div>
        </Content>
      </FreelaContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<any, { userId: string, freelaId: string }> = async ({ params }) => {
  const userId = params?.userId
  const freelaId = params?.freelaId
  
  const freela = await codeFreelasApi.get(`/${userId}/${freelaId}`)

  return {
    props: {
      freela: {
        ...freela.data,
      }
    }
  }
}