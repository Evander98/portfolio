import ImgBg from '../../images/background.jpg'
import styled from 'styled-components'
import { Link } from 'react-scroll'

export const HeroContainer = styled.div`
    background: url(${ImgBg});
    background-position: center;
    background-size: cover;
    height: 100vh;
    transition: 0.2s ease;
    
    @media screen and (max-width: 800px){
        height: 100%;
    }

    @media screen and (max-height: 620px){
        height: 100%;
    }
`

export const HeroContent = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-top: 20vh;
    width: 100%;
`

export const HeroItems = styled.div`
    align-items: center;
    text-align: center;

    @media screen and (min-width: 800px){
        display: flex;
    }
`

export const HeroH1 = styled.h1`
    color: white;
    font-weight: 400;
    font-size: 2.5rem;
`

export const HeroH2 = styled.h2`
    color: white;
    font-weight: 100;
    font-size: 1.5rem;
`

export const HeroP = styled.p`
    color: white;
    font-size: 1.2rem;
    font-weight: 100;
    padding-top: 2.5vh;
    margin-bottom: 10vh;
`

export const ArrowLink = styled(Link)`
    color: white;
    cursor: pointer;
    font-size: 2rem;
    margin: 15vh;
`