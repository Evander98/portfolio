import styled from 'styled-components'

export const AboutContainer = styled.div`
    height: 100%;
    text-align: center;
    background: linear-gradient(${props => props.theme.white}, ${props => props.theme.solitude});
    padding-top: 2vh;

    @media screen and (min-width: 791px){
        height: 100vh;
    }
`

export const AboutH1 = styled.h1`
    color: ${({theme}) => theme.summerSky};
    font-size: 2rem;
    font-weight: 900;
    text-align: left;
`

export const AboutContent = styled.div`
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const AboutItem = styled.div`
    width: 400px;
    height: 600px;
    margin: 1vh 1vw;
    /* background-color: red; */
`

export const ImageItem = styled.img`
    width: 100%;
    height: 100%;
    /* background-color: pink; */
`

export const AboutItemRight = styled.div`
    width: 100%;
    height: 90%;
    /* background-color: blue; */
`

export const AboutP = styled.p`
    font-size: 1rem;
    /* color: white; */
    text-align: left;
    color: ${({theme}) => theme.suvaGrey};
    line-height: 1.6;
    margin-top: 10px;
`