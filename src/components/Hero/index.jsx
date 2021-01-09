import React from 'react'
import Navbar from '../Navbar'
import { ArrowLink, HeroContainer, HeroContent, HeroH1, HeroH2, HeroItems, HeroP } from './HeroElements'
import { ContactMeButton } from '../../config/buttons'
import { BsChevronDoubleDown } from 'react-icons/bs'


const Hero = () => {
    return (
        <HeroContainer>
            <Navbar/>
            <HeroContent>
                <HeroH2>
                    Hello! I'm Evan.
                </HeroH2>
                <HeroItems>
                    <HeroH1>
                        Certified Fullstack Web
                    </HeroH1>
                    <HeroH1>
                        &nbsp;&amp;&nbsp;
                    </HeroH1>
                    <HeroH1>
                        Mobile Developer
                    </HeroH1>
                </HeroItems>
                <HeroP>
                    Need website or mobile app?
                </HeroP>
                <ContactMeButton>Contact Me</ContactMeButton>
                <ArrowLink to='about' smooth={true}>
                    <BsChevronDoubleDown/>
                </ArrowLink>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
