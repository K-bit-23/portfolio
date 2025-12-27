import React from 'react';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
