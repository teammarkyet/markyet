import React from 'react';
import Nav from './components/Nav';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About_us from './sections/About_us';
import Blogs from './sections/Blogs';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import SEO from './components/SEO';
import Why from './sections/Why';
import BackgroundOrbs from './components/BackgroundOrbs';

const App = () => {
  return (
    <>
      <SEO
        title="Markyet – Digital Marketing, SEO, Social Media & Branding"
        description="Markyet is a digital marketing company helping brands win the digital market with SEO, PPC, social media, web design, and content marketing."
        keywords="digital marketing, SEO, social media marketing, PPC, branding, web design, Google Ads, content marketing"
        url="https://www.markyet.in"
        image="https://www.markyet.in/logo.png"

      />
      <Nav />
      <main>
     
        <Hero />
        <Services />
        <About_us />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
