import { useRouter } from 'next/router' 

export default function FreelaPage() {
  const { query } = useRouter()
  const { freelaId } = query

  return (
    <>
      <h1>Work in progress</h1>
      <p>Freela id: {freelaId}</p>
    </>
  )
}