import React from 'react'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import Services from './sections/Services'
import About_us from './sections/About_us'
import Blogs from './sections/Blogs'
import Footer from './sections/Footer'
import Contact from './sections/Contact'

const App = () => {
  return (
    <>
      <Nav />
      <main>
        <section aria-labelledby="hero-title">
          <Hero />
        </section>
        <section aria-labelledby="services-title">
          <Services />
        </section>
        <section aria-labelledby="about-title">
          <About_us />
        </section>
        <section aria-labelledby="blogs-title">
          <Blogs />
        </section>
        <section aria-labelledby="contact-title">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
