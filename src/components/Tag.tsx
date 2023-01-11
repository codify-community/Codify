import { TagContainer } from '../styles/components/Tag'

interface TechnologyProps {
  name: string
}

export function Tag({ name }: TechnologyProps) {
  return <TagContainer>{name.toLowerCase()}</TagContainer>
}
