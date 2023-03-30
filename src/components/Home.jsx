import React from 'react';

// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Hero from './Hero';
import Cards from './Cards';
import Contact from './Contact';
import Footer from './Footer';
import { NovalRivers } from './NovalRivers';
export const Home = () => {
  Aos.init({
    duration: 1800,
    offset: 100,
  });
  return (
    <div className='overflow-hidden'>
      
      <Hero />
      <Cards />
      <NovalRivers/>
      <Contact />
      <Footer />
    </div>
  )
}
