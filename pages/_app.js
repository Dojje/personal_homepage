import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return(<>
  <Component {...pageProps} />
  <Head>
      <title>Dojje</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
  </>)
}

export default MyApp
