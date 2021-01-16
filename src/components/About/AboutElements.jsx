import styled, { css } from 'styled-components'

export const AboutContainer = styled.div`
    height: 100%;
    text-align: center;
    background: linear-gradient(${props => props.theme.white}, ${props => props.theme.solitude});
    padding-top: 2vh;

    @media screen and (min-width: 875px){
        height: 100vh;
    }
`

export const AboutH1 = styled.h1`
    color: ${({theme}) => theme.summerSky};
    font-weight: 900;
    text-align: left;
`

export const AboutContent = styled.div`
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const AboutItem = styled.div`
    width: 400px;
    margin: 1vh 1vw;
    padding : 0 10px;
    /* background-color: red; */
`

export const ImageItem = styled.img`
    
`

export const AboutItemRight = styled.div`
    
`

export const AboutP = styled.p`
    font-size: 1rem;
    text-align: left;
    color: ${({theme}) => theme.suvaGrey};
    line-height: 1.6;
    margin-top: 10px;
    text-align: justify;
`