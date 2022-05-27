import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'

const Home: NextPage = () => {
  return (
    <div className="min-w-screen min-h-screen bg-[url('/assets/home/background-home-mobile.jpg')] bg-cover p-6">
      <Head>
        <title>Space Tour</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* navbar */}
      <Navbar />
      <main className="mt-[40px] text-center">
        <h5 className="mb-[16px] font-secondary uppercase tracking-[2.7px] text-secondary-100">
          So, you want to travel to space
        </h5>
        <h1 className="mb-[16px] font-primary text-[80px] uppercase leading-[100px] text-white">
          Space
        </h1>
        <p className=" font-paragraph text-[15px] leading-[25px] text-secondary-100">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
        <div className="mx-auto mt-[81px] flex h-[150px] w-[150px] items-center justify-center rounded-full bg-white ring-white/10 transition-all duration-300 ease-out hover:ring-[40px]">
          <button className="font-primary text-[20px] uppercase tracking-[1.25px]">
            Explore
          </button>
        </div>
      </main>
    </div>
  )
}

export default Home
