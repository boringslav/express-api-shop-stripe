import '../styles/globals.scss'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Boringshop Ecommerce</title>
      </Head>
      <Announcement />
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
