import React from 'react'
import './servicesStyle.css'
import {ServicesContainer, ServicesWarp, ItemContainer, Line} from './ServicesSectionElement'
const ServicesSection = () => {
  return (
    <ServicesContainer>
        <h1 class='servicesH1'>SERVICES</h1>
        <h2 class='servicesH2'>What I do?</h2>
        <ServicesWarp>
            <ItemContainer>
                <img class='Icon' src="http://localhost:8080/images/icons/pen.png" />
                <h5 class='ServiceItemTitle'>UI/UX Design</h5>
                <p class='ServiceItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Line />
            </ItemContainer>
            <ItemContainer>
                <img class='Icon' src="http://localhost:8080/images/icons/code.png" />
                <h5 class='ServiceItemTitle'>Front End</h5>
                <p class='ServiceItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Line />
            </ItemContainer>
            <ItemContainer>
                <img class='Icon' src="http://localhost:8080/images/icons/wheels.png" />
                <h5 class='ServiceItemTitle'>Back End</h5>
                <p class='ServiceItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Line />
            </ItemContainer>
            <ItemContainer>
                <img class='Icon' src="http://localhost:8080/images/icons/path.png" />
                <h5 class='ServiceItemTitle'>Grahpic Design</h5>
                <p class='ServiceItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Line />
            </ItemContainer>
            <ItemContainer>
                <img class='Icon' src="http://localhost:8080/images/icons/video.png" />
                <h5 class='ServiceItemTitle'>Edit Videos</h5>
                <p class='ServiceItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Line />
            </ItemContainer>
            <ItemContainer>
                <img class='Icon' src="http://localhost:8080/images/icons/cc.png" />
                <h5 class='ServiceItemTitle'>Subtitles</h5>
                <p class='ServiceItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Line />
            </ItemContainer>
        </ServicesWarp>
    </ServicesContainer>
  )
}

export default ServicesSection