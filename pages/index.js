import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className='bg-[#F3F2EF] text-black dark:bg-black dark:text-white h-screen overflow-y-auto md:space-y-6'>
      <Head>
        <title>Feed | LinkedIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  )
}