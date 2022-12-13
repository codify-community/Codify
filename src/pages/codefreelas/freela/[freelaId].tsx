import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { api } from '../../../lib/axios'

import { FreelaHeader } from '../../../components/codefreelas/FreelaHeader'
import { Freela } from '..'
import { Loading } from '../../../components/Loading'

import { FreelaContainer, Header, Content } from '../../../styles/pages/codefreelas/freela'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Head from 'next/head'

interface FreelaPageProps {
  freela: Freela
}

export default function FreelaPage({ freela }: FreelaPageProps) {
  const { isFallback } = useRouter()

  if (isFallback) {
    return <Loading />
  }

  const text = `
  A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  * Lists
  * [ ] todo
  * [x] done
  
  1. ordered
  2. list
  
  A table:
  
  | a | b | 
  | - | - |
  | casdasd | asdad |
`

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
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
          </div>
        </Content>
      </FreelaContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, { freelaId: string }> = async ({ params }) => {
  const freelaId = params?.freelaId
  
  const freela = await api.get('/posts', {
    params: {
      id: freelaId
    }
  })
  
  return {
    props: {
      freela: {
        ...freela.data[0],
      }
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}