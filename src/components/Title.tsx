import { Text } from "../styles/components/Title"

interface TitleProps {
  text: string
}

export function Title({ text }: TitleProps) {
  return (
    <Text>{text}</Text>
  )
}