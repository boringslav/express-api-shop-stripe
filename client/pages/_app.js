import '../styles/globals.scss'
import Head from 'next/head'
import Navbar from '../components/Navbar'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Boringshop Ecommerce</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
