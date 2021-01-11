import React from 'react'
import { AboutContainer, AboutContent, AboutH1, AboutItemRight, AboutItem, ImageItem, AboutP } from './AboutElements'
import MyImage from '../../images/IMG_5433.JPG'

const About = () => {
    return (
        <AboutContainer id='about'>
            <AboutContent>
                <AboutItem>
                    <ImageItem src={MyImage}/>
                </AboutItem>
                <AboutItem>
                    <AboutH1>ABOUT ME</AboutH1>
                    <AboutItemRight>
                        <AboutP>
                            My name is Evander Kristalino, I am a certified fullstack web and mobile developer living in Banggai Laut, Central Sulawesi, Indonesia.
                        </AboutP>
                        <AboutP>
                            I graduated at De La Salle Manado Catholic University. Not only that, I took a coding bootcamp at Purwadhika Startup and Coding School to improve my knowledge of programming.
                        </AboutP>
                        <AboutP>
                            I primarily use Javascript (React.js, React Native and Express.js), but picking up a new framework or language isn't a problem. I am comfortable developing on the frontend, backend or mobile app as well.
                        </AboutP>
                    </AboutItemRight>
                </AboutItem>
            </AboutContent>
        </AboutContainer>
    )
}

export default About