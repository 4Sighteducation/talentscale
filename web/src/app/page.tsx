import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import TrustStrip from '@/components/sections/TrustStrip'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Differentiator from '@/components/sections/Differentiator'
import Roles from '@/components/sections/Roles'
import Quote from '@/components/sections/Quote'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Differentiator />
        <Roles />
        <Quote />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
