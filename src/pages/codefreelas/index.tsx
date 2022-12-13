import { GetStaticProps } from "next";
import Head from "next/head";

import { api } from "../../lib/axios";

import { FormContainer, Form, Content, FreelasContainer, Freelas } from "../../styles/pages/codefreelas/home";

import { Title } from "../../components/Title";
import { FreelaCard } from "../../components/FreelaCard";

interface HomeProps {
  freelas: Freela[];
}

interface Freela {
  id: number
  title: string
  description: string
  price: number
  deadline: string
  author: {
    id: number;
    name: string;
    avatar: string;
  }
  technologies: string[]
  createdAt: Date
}

export default function Home({ freelas }: HomeProps) {
  return (
    <>
      <Head>
        <title>Codify Community</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <FormContainer>
        <Form>
          <h1>Code Freelas</h1>
          <p>Encontre freelancers para desenvolver seu projeto e encontre projetos para trabalhar.</p>
          <input type="text" spellCheck={false} placeholder="Digite as palavras chave" />
        </Form>
      </FormContainer>

      <Content>
        <FreelasContainer>
          <Title text="400 Resultados" />

          <Freelas>
            {freelas.map(freela => (
              <FreelaCard key={freela.id} freela={freela} />
            ))}
          </Freelas>
        </FreelasContainer>
      </Content>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/posts');

  return {
    props: {
      freelas: response.data
    },
    revalidate: 60 * 15 // 15 minutes
  }
}