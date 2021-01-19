import { Link } from 'react-scroll'
import styled, { css } from 'styled-components'

export const NavContainer = styled.nav`
    display: flex;
    background: transparent;
    justify-content: space-around;
    color: rgba(255, 255, 255, .7);
    height: 80px;
    align-items: center;
`

export const Logo = styled.div`
    ${({isOpen}) => {
        if(isOpen){
            return css`
                transition: transform 1s;
                transform: translateX(-21vw);
            `
        }
    }}
`

export const LogoH2 = styled.h2`
    font-family: 'Viga', sans-serif;
    transition: color 0.2s;

    &:hover{
        color: ${({theme}) => theme.dodgerBlue};
        cursor: pointer;
    }
`

export const Items = styled.ul`
    display: flex;
    list-style: none;
    width: 40%;
    justify-content: space-between;
    
    @media screen and (max-width: 768px){
        width: 50%;
    }

    @media screen and (max-width: 576px){
        position: fixed;
        right: ${({isOpen}) => (isOpen ? "0" : "-1000px")};
        top: 0;
        width: 40%;
        height: calc(100vh + 80px);
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        background-color: ${props => props.theme.nightRider};
        transition: all 1s;
        z-index: 98;
    }
`

export const ListItem = styled.li`

`

export const Item = styled(Link)`
    color: rgba(255, 255, 255, .7);
    text-decoration: none;

    &:hover{
        color: ${props => props.theme.white};
        cursor: pointer;
    }
`

export const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    height: 20px;
    justify-content: space-between;
    position: relative;
    cursor: pointer;
    transition: transform 1s;

    @media screen and (max-width: 576px){
        display: flex;
        z-index: 99;
        ${({isOpen}) => {
            if(isOpen){
                return css`
                    position: fixed;
                    right: 40px;
                    transform: translateX(20px);
                    transition: transform 1s;
                `
            }
        }}
    }
`

export const HamBar = styled.span`
    display: block;
    width: 28px;
    height: 3px;
    background-color: rgba(255, 255, 255, .7);
    border-radius: 3px;
    transition: all 0.5s;

    &:nth-child(1){
        ${({isOpen}) => {
            if(isOpen){
                return css`
                    background-color: white;
                    transform: rotate(45deg) translate(-1px, -1px);
                    transform-origin: 0 0;
                    transition: all 0.5s;
                `
            }
        }}
    }

    &:nth-child(2){
        ${({isOpen}) => {
            if(isOpen){
                return css`
                    opacity: 0;
                    transform: scale(0);
                    transition: all 0.5s;
                `
            }
        }}
    }

    &:nth-child(3){
        ${({isOpen}) => {
            if(isOpen){
                return css`
                    background-color: white;
                    transform: rotate(-45deg);
                    transform-origin: 0 100%;
                    transition: all 0.5s;
                `
            }
        }}
    }
`