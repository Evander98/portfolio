import styled, { css } from 'styled-components'

export const FooterContainer = styled.div`
    height: 60px;
    background-color: ${props => props.theme.nightRider};
    padding: 40px 60px 40px 60px;
    text-align: center;
`

export const FooterP = styled.p`
    color: ${props => props.theme.solitude};
`

export const SocialMediaWrap = styled.div`
    padding: 5px;
`

export const SocialMedia = styled.a`
    color: white;
    font-size: 1.5rem;
    margin: 2.5px;

    &:hover{
        color: ${({theme}) => theme.summerSky};
        cursor: pointer;
    }
`