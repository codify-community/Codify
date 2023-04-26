import { Head, Html, Main, NextScript } from 'next/document'
import { getCssText } from '../styles'

import Logo from '../assets/logo.svg'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />

        <meta property="og:locale" content="pt_BR" />
        <meta property="og:title" content="Codify Community" />

        <meta
          property="og:description"
          content="Somos uma comunidade de desenvolvedores que tem como objetivo ajudar iniciantes no mundo da programação."
        />
        <meta
          name="description"
          content="Somos uma comunidade de desenvolvedores que tem como objetivo ajudar iniciantes no mundo da programação."
        />

        <meta property="og:image" content={Logo} />
        <meta property="og:image:type" content="image/svg+xml" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:type" content="website" />

        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
