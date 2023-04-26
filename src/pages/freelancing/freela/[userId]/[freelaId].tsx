import { GetServerSideProps } from 'next'
import { freelancingApi } from '../../../../lib/axios'

import { FreelaHeader } from '../../../../components/freelancing/FreelaHeader'

import {
  FreelaContainer,
  Header,
  Content,
} from '../../../../styles/pages/freelancing/freela'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import Head from 'next/head'

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

interface FreelaPageProps {
  freela: Freela
}

export default function FreelaPage({ freela }: FreelaPageProps) {
  return (
    <>
      <Head>
        <title>Codify Community</title>
        <link rel="icon" href="/logo.svg" />

        <meta property="og:title" content={`${freela.title}`} />

        <meta property="og:description" content={freela.description} />
        <meta name="description" content={freela.description} />

        <meta property="og:image" content={freela.user_avatar} />
        <meta property="og:image:width" content="128" />
        <meta property="og:image:height" content="128" />
        <meta property="og:type" content="article" />
      </Head>

      <FreelaContainer>
        <Header>
          <h1>Code Freelas</h1>
          <FreelaHeader freela={freela} />
        </Header>

        <Content>
          <div>
            <ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown">
              {freela.description}
            </ReactMarkdown>
          </div>
        </Content>
      </FreelaContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<
  any,
  { userId: string; freelaId: string }
> = async ({ params }) => {
  const userId = params?.userId
  const freelaId = params?.freelaId

  try {
    const freela = await freelancingApi.get(`/${userId}/${freelaId}`)

    return {
      props: {
        freela: {
          ...freela.data,
        },
      },
    }
  } catch (err) {
    return {
      notFound: true,
    }
  }
}
