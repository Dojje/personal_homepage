import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return(<>
  <Head>
      <title>Dojje</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
  {/* will use this head as standard */}
  <Component {...pageProps} />
  </>)
}

export default MyApp
