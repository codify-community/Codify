import Image from "next/image";

import { GithubLogo } from "phosphor-react";
import { MemberCardContainer, Info, Skills, Role, SkillsContainer } from "../../styles/components/home/MemberCard";

import { Tag } from "../Tag";

interface MemberCardProps {
  member: {
    id: number
    role: 'mod' | 'admin' | 'owner' | 'booster'
    avatar: string
    name: string
    ocupation: string
    description: string
    github: string
    technologies: string[]
  }
}

export function MemberCard({ member }: MemberCardProps) {
  return (
    <MemberCardContainer className="keen-slider__slide">
      <Role role={member.role}>{member.role.toUpperCase()}</Role>

      <Info>
        <Image src={member.avatar} alt="" width={100} height={100} />
        <strong>{member.name}</strong>
        <span>{member.ocupation}</span>

        <p>{member.description}</p>

        <a href={member.github} target="_blank" rel="noreferrer">
          <GithubLogo weight="fill" size={42} />
        </a>
      </Info>

      <SkillsContainer>
        <p>Habilidades</p>
        
        <Skills>
          {member.technologies.map(technology => (
            <Tag key={technology} name={technology} />
          ))}
        </Skills>
      </SkillsContainer>
    </MemberCardContainer>
  )
}