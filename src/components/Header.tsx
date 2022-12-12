import Image from 'next/image';
import Link from 'next/link';

import { useEffect, useState } from 'react'

import { HeaderContainer, Content, Navigation } from "../styles/components/Header";

import Logo from "../assets/logo.png"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  function onScroll() {
    if (window.scrollY > 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <Content>
        <Link href="/" prefetch={false}>
          <Image src={Logo} alt="" width={190} height={73} />
        </Link>

        <Navigation>
          <Link href="/codefreelas" prefetch={false}>
            <p>CodeFreelas</p>
          </Link>
        </Navigation>
      </Content>
    </HeaderContainer>
  )
}