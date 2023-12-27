import React from 'react';
import Hero from '../components/hero/Hero';
import Market from '../components/market/Market'
import About from '../components/about/About';
import Join from '../components/join/Join';
import Footer from '../components/footer/Footer';

const Home = ({isScrolled}) => {
  return (
    <>
      <Hero isScrolled={isScrolled} />
      <Market />
      <About />
      <Join />
      <Footer />
    </>
  )
}

export default Home

