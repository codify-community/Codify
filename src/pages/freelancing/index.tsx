import Head from 'next/head'
import { GetServerSideProps } from 'next'

import React, { useState } from 'react'

// import { freelancingApi } from '../../lib/axios'

import {
  FormContainer,
  Form,
  Content,
  FreelasContainer,
  Freelas,
} from '../../styles/pages/freelancing/home'

import { Title } from '../../components/Title'
import { FreelaCard } from '../../components/FreelaCard'
import { NoResultsFound } from '../../components/NoResultsFound'

export interface ResumeFreela {
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
}

interface HomeProps {
  freelas: ResumeFreela[]
}

export default function Home({ freelas }: HomeProps) {
  const [filter, setFilter] = useState('')
  const [actualFreelas, setActualFreelas] = useState<ResumeFreela[]>(freelas)

  const results = actualFreelas.length
  const resultText = results === 1 ? 'Resultado' : 'Resultados'

  function handleFilter(event: React.ChangeEvent<HTMLInputElement>) {
    const filteredFreelas = freelas.filter(
      (freela) =>
        freela.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
        freela.description
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        freela.technologies
          .join(' ')
          .toLowerCase()
          .includes(event.target.value.toLowerCase()),
    )

    setActualFreelas(filteredFreelas)
    setFilter(event.target.value)
  }

  return (
    <>
      <Head>
        <title>Codify Community</title>
        <link rel="icon" href="/icon.svg" />

        <meta property="og:title" content="Codify Community Freelancing" />

        <meta
          property="og:description"
          content="Serviço de freelance para desenvolvedores. Encontre freelancers para desenvolver seu projeto e encontre projetos para trabalhar."
        />
        <meta
          name="description"
          content="Serviço de freelance para desenvolvedores. Encontre freelancers para desenvolver seu projeto e encontre projetos para trabalhar."
        />
      </Head>

      <FormContainer>
        <Form
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <h1>Code Freelas</h1>
          <p>
            Encontre freelancers para desenvolver seu projeto e encontre
            projetos para trabalhar.
          </p>
          <input
            type="text"
            value={filter}
            onChange={handleFilter}
            spellCheck={false}
            placeholder="Digite as palavras chave"
          />
        </Form>
      </FormContainer>

      <Content>
        <FreelasContainer>
          {results === 0 ? (
            <NoResultsFound />
          ) : (
            <>
              <Title text={`${results} ${resultText}`} />
              <Freelas>
                {actualFreelas.map((freela) => (
                  <FreelaCard key={freela.id} freela={freela} />
                ))}
              </Freelas>
            </>
          )}
        </FreelasContainer>
      </Content>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  // const response = await freelancingApi.get('/freela')

  return {
    props: {
      // freelas: response.data,
      freelas: [],
    },
  }
}
