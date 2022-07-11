import React from 'react'
import {AboutContainer, AboutWarpper, LeftContainer, RightContainer} from './AboutSectionElements';
import './aboutStyle.css'
import '../../style/index/indexStyle.css'

export const AboutSection = () => {
  return (
    <AboutContainer>
        <h1>BIOGRAPHY</h1>
        <h2>Who am I?</h2>
        <AboutWarpper>
            <LeftContainer>
                <img src="http://localhost:8080/images/logo.png" id="aboutImg" />
            </LeftContainer>
            <RightContainer>
              <div class="rightContainerFlex">
                <div class="rightContainerTitle">About Me</div>
                <p class="aboutText">My name is "Yehonatan Refael Natan" and
                                     I am 18 years old.</p>
                <div className='skillsContainer'>
                  <div class="rightContainerTitle">Skills</div>
                  <div class="skillWarpper">
                      <div className="skillTitle">Photoshop</div>
                      <div class="skillBar">
                        <div class="photoshopSlidebar" />
                      </div>
                  </div>
                  <div class="skillWarpper">
                      <div className="skillTitle">HTML & CSS</div>
                      <div class="skillBar">
                        <div class="htmlCssSlidebar" />
                      </div>
                  </div>
                  <div class="skillWarpper">
                      <div className="skillTitle">Wordpress</div>
                      <div class="skillBar">
                        <div class="wordpressSlidebar" />
                      </div>
                  </div>
                </div>
              </div>
              
            </RightContainer>
        </AboutWarpper>
    </AboutContainer>
  )
}

export default AboutSection
