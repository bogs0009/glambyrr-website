import React from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection.js';
import About from './components/About';
import Contacts from './components/Contacts.js';
import Footer from './components/Footer';
import { Element } from 'react-scroll';

function App() {
  return (
    <div>
      <Navbar />
      <Element name="home"><HeroSlider /></Element>
      <Element name="services"><ServicesSection /></Element>
      <Element name="portfolio"><PortfolioSection /></Element>
      <Element name="about"><About /></Element>
      <Element name="contacts"><Contacts /></Element>
      <Footer />
    </div>
  );
}

export default App;
