import React from 'react'
import { NavItem, NavbarContainer, NavItems, NavLink, NavLanguageContainer, NavItemLanguage } from './NavbarElements'

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavLink to='/'>
                Evander K.
            </NavLink>
            <NavItems>
                <NavItem to='/'>About</NavItem>
                <NavItem to='/'>Contact</NavItem>
                {/* <NavLanguageContainer>
                    <NavItemLanguage left>EN</NavItemLanguage>
                    <NavItemLanguage>|</NavItemLanguage>
                    <NavItemLanguage right>ID</NavItemLanguage>
                </NavLanguageContainer> */}
            </NavItems>
        </NavbarContainer>
    )
}

export default Navbar
