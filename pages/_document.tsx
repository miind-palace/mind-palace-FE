import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="MyPal - Mind Palace" />
        <meta name="description" content="당신의 기억이 사라지지 않도록 보관하세요 " />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mind-palace-fe.vercel.app/" />
        <meta property="og:title" content="MyPal - Mind Palace" />
        <meta property="og:description" content="당신의 기억이 사라지지 않도록 보관하세요 " />
        <meta property="og:image" content="/og/cube_multi.svg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mind-palace-fe.vercel.app/" />
        <meta property="twitter:title" content="MyPal - Mind Palace" />
        <meta property="twitter:description" content="당신의 기억이 사라지지 않도록 보관하세요 " />
        <meta property="twitter:image" content="/og/cube_multi.svg" />

        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>

        {/* allow mixed-content */}
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
      </Head>
      <body>
        <Main />
        <div id="modal-root"></div>
        <NextScript />
      </body>
    </Html>
  )
}
