import React from 'react'
import {HeroContainer, HeroBg, HeroContent, Button, ArrowRight} from './HeroSectionElements'
const HeroSection = () => {
  return (
    <HeroContainer>
        <HeroBg>
            <img src="http://localhost:8080/images/home_background.png" alt="background" />
        </HeroBg>
        <HeroContent>
            <div class="HeroTitle">I'm Yehonatan Natan</div>
            <div class="HeroSubtitle">Graphic Designer & Web Developer</div>
            <Button>Read more<ArrowRight /></Button>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection