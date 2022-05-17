import '../styles/globals.css'
import Head from 'next/head'
import { CookiesProvider } from "react-cookie"

function MyApp({ Component, pageProps }) {
  return(<>
  <Head>
      <title>Dojje</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
  {/* will use this head as standard */}
  <CookiesProvider>
    <Component {...pageProps} />
  </CookiesProvider>
  </>)
}

export default MyApp
