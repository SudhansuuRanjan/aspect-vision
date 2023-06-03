import Image from 'next/image'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import Highlights from '@/components/Highlights'
import About from '@/components/About'

export const metadata = {
  title: 'Aspect Vision | Home',
  description: 'Simplifying your Counselling Experience.',
}

export default function Home() {
  return (
    <Layout>
      <Hero/>
      <Highlights/>
      <About/>
    </Layout>
  )
}
