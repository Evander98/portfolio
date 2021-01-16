import styled, { css } from 'styled-components'

export const ServicesContainer = styled.div`
    height: 100vh;
    background: linear-gradient(${({theme}) => theme.solitude}, ${({theme}) => theme.white});
    text-align: center;
    padding-top: 2vh;

    @media screen and (max-width: 1123px){
        height: 100%;
    }
`

export const ServicesH1 = styled.div`
    color: ${({theme}) => theme.summerSky};
    font-size: 2rem;
    font-weight: 900;
`

export const ServiceH3 = styled.h3`
    font-weight: 400;
    padding: 1.5vh;
`

export const ServiceContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 10vh;
    margin-bottom: 10px;
`

export const ServiceItem = styled.div`
    /* background: red; */
    border: 1px solid ${({theme}) => theme.suvaGrey};
    border-radius: 10px;
    width: 350px;
    height: 306px;
    margin: 1vh 1vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LogoItem = styled.img`
    width: 100px;
    height: 100px;
    /* background-color: pink; */
    padding-top: 6vh;
`

export const ServiceP = styled.p`
    /* background-color: green; */
    color: ${props => props.theme.suvaGrey};
    /* text-align: left; */
    padding-top: 2vh;
    width: 80%;

    ${props => {
        if(props.auto){
            return css`
                margin: auto;
            `
        }
    }}

    ${props => {
        if(props.padding){
            return css`
                padding: ${props.padding};
            `
        }
    }}
`

export const Hr = styled.hr`
    width: 85vw;
    margin-top: 20px;
    margin: auto;
`