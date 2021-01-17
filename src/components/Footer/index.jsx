import React from 'react'
import { FooterContainer, FooterP, SocialMediaWrap, SocialMedia } from './FooterElements'
import { FaWhatsapp, FaInstagram, FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterP>©2021 Evander Kristalino</FooterP>
            <SocialMediaWrap>
                <SocialMedia href="https://wa.me/+6281543130252" >
                    <FaWhatsapp/>
                </SocialMedia>
                <SocialMedia href="https://www.instagram.com/_rednave" >
                    <FaInstagram/>
                </SocialMedia>
                <SocialMedia href="https://github.com/Evander98">
                    <FaGithub/>
                </SocialMedia>
            </SocialMediaWrap>
        </FooterContainer>
    )
}

export default Footer