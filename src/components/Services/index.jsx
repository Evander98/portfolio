import React from 'react'
import { ServicesContainer, ServicesH1, ServiceContent, ServiceItem, LogoItem, ServiceH3, ServiceP, Hr } from './ServicesElements'
import { ContactMeButton } from '../../config/buttons'
import { scroller } from 'react-scroll'
import webDevIcon from '../../images/laptop.svg'
import webDesignIcon from '../../images/computer.svg'
import webAppIcon from '../../images/mobile-app.svg'
const Services = ({heading}) => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>
                {heading}
            </ServicesH1>
            <ServiceContent>
                <ServiceItem>
                    <LogoItem src={webDesignIcon}/>
                    <ServiceH3>Web Design</ServiceH3>
                    <ServiceP>Design what you want.<br/>My goal is to focus on content and convey the message you want to send.</ServiceP>
                </ServiceItem>
                <ServiceItem>
                    <LogoItem src={webDevIcon}/>
                    <ServiceH3>Web Development</ServiceH3>
                    <ServiceP>Develop what you need.<br/>With React.js and Express.js i can build and develop web app you need.</ServiceP>
                </ServiceItem>
                <ServiceItem>
                    <LogoItem src={webAppIcon}/>
                    <ServiceH3>Mobile App</ServiceH3>
                    <ServiceP>Build cross platform app.<br/>With React Native i can help you to build any mobile app you can think of.</ServiceP>
                </ServiceItem>
            </ServiceContent>
            <Hr/>
            <ServiceP auto>Would you like to know more or just discuss something?</ServiceP>
            <ContactMeButton margin='20px' onClick={() => scroller.scrollTo('contact', {smooth: true})}>Contact me</ContactMeButton>
        </ServicesContainer>
    )
}

export default Services
