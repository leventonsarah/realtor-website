import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;1,300&family=DM+Serif+Display&family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400&family=Roboto:ital,wght@0,100;1,100&display=swap" rel="stylesheet" />      
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
