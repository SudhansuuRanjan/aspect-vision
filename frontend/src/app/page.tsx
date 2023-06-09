import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import Highlights from '@/components/Highlights'
import About from '@/components/About'
import Services from '@/components/Services'
import Faq from '@/components/FAQ'
import Pricing from '@/components/Pricing'
import Reviews from '@/components/Reviews'

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
      <Reviews/>
      <Pricing/>
      <Faq/>
    </Layout>
  )
}
