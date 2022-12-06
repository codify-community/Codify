import Image from "next/image";

import { GithubLogo } from "phosphor-react";
import { MemberCardContainer, Info, Skills, Role, SkillsContainer } from "../../styles/components/home/MemberCard";

import Sora from "../../assets/sora.png";
import { Tag } from "../Tag";

export function MemberCard() {
  return (
    <MemberCardContainer>
      <Role>MOD</Role>

      <Info>
        <Image src={Sora} alt="" width={100} height={100} />
        <strong>Rust Maniac</strong>
        <span>Rust is Rust OKEY</span>

        <p>Estudante no Instituto Federal Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>

        <a href="">
          <GithubLogo weight="fill" size={42} />
        </a>
      </Info>

      <SkillsContainer>
        <p>Habilidades</p>
        
        <Skills>
          <Tag name="C" />
          <Tag name="CSS" />
          <Tag name="PYTHON" />
          <Tag name="HTML" />
          <Tag name="PYTHON" />
          <Tag name="PYTHON" />
          <Tag name="PYTHON" />
        </Skills>
      </SkillsContainer>
    </MemberCardContainer>
  )
}