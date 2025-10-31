import React, { useState } from 'react';
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
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <SEO
        title="Markyet – Digital Marketing, SEO, Social Media & Branding"
        description="Markyet is a digital marketing company helping brands win the digital market with SEO, PPC, social media, web design, and content marketing."
        keywords="digital marketing, SEO, social media marketing, PPC, branding, web design, Google Ads, content marketing"
        url="https://www.markyet.in"
        image="https://www.markyet.in/logo.png"
      />

      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className={`transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <Hero darkMode={darkMode} />
        <Services darkMode={darkMode} />
        <About_us darkMode={darkMode} />
        <Blogs darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;
