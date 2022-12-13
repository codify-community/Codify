import Image from "next/image";

import { LoadingContainer } from "../styles/components/loading";
import { Title } from "./Title";

export function Loading() {
  return (
    <LoadingContainer>
      <Title text="Aguarde um momento enquanto carregamos tudo" />
    </LoadingContainer>
  )
}