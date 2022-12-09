import { useRouter } from 'next/router' 

export default function UserPage() {
  const { query } = useRouter()
  const { userId } = query

  return (
    <>
      <h1>Work in progress</h1>
      <p>User id: {userId}</p>
    </>
  )
}