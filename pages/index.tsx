import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Space Tour</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Test</h1>
      </main>
    </div>
  )
}

export default Home
