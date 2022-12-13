import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router' 
import { api } from '../../../lib/axios'

interface FreelaPageProps {
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

export default function FreelaPage({ freela }: FreelaPageProps) {
  console.log(freela)

  return (
    <>
      <h1>Work in progress</h1>
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
        ...freela.data
      }
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}