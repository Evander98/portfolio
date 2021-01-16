import { NavLink as Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const NavbarContainer = styled.div`
    background: transparent;
    display: flex;
    height: 80px;
    justify-content: space-between;
`

export const NavLink = styled(Link)`
    align-self: center;
    color: ${props => props.theme.white};
    font-family: 'Viga', sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    padding-left: 2vw;
    text-decoration: none;
    transition: color 0.2s;

    &:hover{
        color: #007BFF;
    }
`

export const NavItems = styled.div`
    align-self: center;
    margin-right: 2vw;
`

export const NavItem = styled(Link)`
    color: rgba(255, 255, 255, .7);
    font-weight: 300;
    margin-right: 2vw;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.5s ease-out;

    &:hover{
        color: ${props => props.theme.white};
    }
`
export const NavLanguageContainer = styled.div`
    display: inline;
`

export const NavItemLanguage = styled.p`
    color: rgba(255, 255, 255, .7);
    display: inline;
    font-weight: 300;

    ${props => {
        if(props.left){
            return css`
                margin-left: 5vw;
                margin-right: .5vw;
            `
        } else if(props.right){
            return css`
                margin-right: 2vw;
                margin-left: .5vw;
            `
        }
    }}

    &:hover{
        color: ${props => props.theme.white};
        cursor: pointer;
    }
`