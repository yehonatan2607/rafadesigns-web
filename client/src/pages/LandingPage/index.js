import React, {useState} from 'react'
import './LandingPage.css'
import {LandingDiv} from './LandingPageElements'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'


const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>

      <LandingDiv>
        hello
      </LandingDiv>
    </>
  )
}

export default LandingPage