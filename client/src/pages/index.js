import React, {useState} from 'react'

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import '../style/index/indexStyle.css';
import { Nav } from '../components/Navbar/NavbarElements';
import { FaBlackberry } from 'react-icons/fa';

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <body>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar class="Navigation" toggle={toggle}/>
      <HeroSection />     
      <AboutSection />   
      <ServicesSection />                                  
    </body>
  )
}

export default LandingPage