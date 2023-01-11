import { DetailCardContainer } from '../../styles/components/home/DetailCard'

interface DetailCardProps {
  title: string
  value: string
}

export function DetailCard({ title, value }: DetailCardProps) {
  return (
    <DetailCardContainer>
      <strong>{value}</strong>
      <p>{title}</p>
    </DetailCardContainer>
  )
}
