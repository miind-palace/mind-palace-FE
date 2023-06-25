import Layout from '@/components/Layout/Layout'
import globalStyles from '@/styles/globalStyles'
import theme from '@/styles/theme'
import { Global, ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
