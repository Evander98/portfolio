import React from 'react'
import { AboutContainer, AboutContent, AboutH1, AboutItemRight, AboutItem, ImageItem, AboutP, AboutH2, ContentWrapper, LogoItem } from './AboutElements'
import MyImage from '../../images/IMG_5433.JPG'
import HTML5 from '../../images/html-5.png'
import CSS3 from '../../images/css.png'
import Javascript from '../../images/javascript.png'
import ReactJSLogo from '../../images/reactjs.png'
import ReactNative from '../../images/react-native.png'
import ReduxLogo from '../../images/redux.png'
import StyledCompsLogo from '../../images/styled-components.png'
import BootstrapLogo from '../../images/bootstrap.png'
import NodeJSLogo from '../../images/nodejs.png'
import ExpressJSLogo from '../../images/ExpressJS.png'
import MysqlLogo from '../../images/mysql.png'
import MongoDBLogo from '../../images/mongodb.png'
import FirebaseLogo from '../../images/firebase.png'

const About = () => {
    return (
        <AboutContainer id='about'>
            <AboutContent>
                <AboutItem>
                    <ImageItem width='100%' height='600px' src={MyImage}/>
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