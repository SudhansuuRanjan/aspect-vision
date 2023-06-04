import Image from 'next/image'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import Highlights from '@/components/Highlights'
import About from '@/components/About'
import Services from '@/components/Services'
import Faq from '@/components/FAQ'

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
      <Services/>
      <Faq/>
    </Layout>
  )
}
