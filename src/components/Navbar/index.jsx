import React, { useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { NavContainer, Logo, LogoH2, Items, Item, ListItem, Hamburger, HamBar } from './NavbarElements'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <NavContainer>
            <Logo isOpen={isOpen} onClick={() => scroll.scrollToTop()}>
                <LogoH2>Evander K.</LogoH2>
            </Logo>
            <Items onClick={toggle} isOpen={isOpen}>
                <ListItem><Item to='hero' smooth={true}>Home</Item></ListItem>
                <ListItem><Item to='about' smooth={true}>About</Item></ListItem>
                <ListItem><Item to='services' smooth={true}>Services</Item></ListItem>
                <ListItem><Item to='contact' smooth={true}>Contact</Item></ListItem>
            </Items>
            <Hamburger onClick={toggle} isOpen={isOpen}>
                <HamBar isOpen={isOpen}/>
                <HamBar isOpen={isOpen}/>
                <HamBar isOpen={isOpen}/>
            </Hamburger>
        </NavContainer>
    )
}

export default Navbar
