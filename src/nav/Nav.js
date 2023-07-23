import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../css/nav.css'
import logo from "../img/logo.png";
import login from "../img/Login.png";
import { styled } from 'styled-components';

const Menu = styled.div`
position: fixed;
height: 100vh;
background-color: rgb(108, 108, 151) ;
width: 250px;
z-index: 30;
top: 0;
left: 0;
padding: 0;
text-align: center;
align-items:  center;
.image__menu {
    width: 30px;
    margin-left: 5px;

}
.white {
    color: white;
}
.nav__img-login  {
    align-items: center;
    margin-top: 25px;
}
a {
    color: white;
}
`
const HambLine = styled.span`
width: 30px;
margin-bottom: 5px;
display: block;
height: 2px;    
background-color: rgb(87, 32, 181);
transition: all 0.5s;
&:nth-child(2) {
    margin-bottom: 5px;

}
`

function Nav() {
    const [open, setOpen] = useState(false);
    const [rotateLeft, setRotateLeft] = useState(false)
    const [rotateRight, setRotateRight] = useState(false)
    const [hide, setHide] = useState(false)

    function changeClass() {
        setOpen(!open)
        setRotateLeft(!rotateLeft)
        setRotateRight(!rotateRight)
        setHide(!hide)
    }
    const activeHamburger = (open)? 'active' : 'noActive';
    const left = (rotateLeft)? 'rotateLeft' : '';
    const right = (rotateRight)? 'rotateRight' : '';
    const hidden = (hide)? 'hiddenL' : '';
  return (
    <div>
        <div className='hamburger' onClick={changeClass}>
            <HambLine className={left}></HambLine>
            <HambLine className={hidden}></HambLine>
            <HambLine className={right}></HambLine>
        </div>
        <Menu className={activeHamburger}>
            <ul >
                <li>
                    <NavLink className='navigation__link white' to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className='navigation__link white' to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink className='navigation__link white' to='/contact'>Contact Us</NavLink>
                </li>
            </ul>
            <div className='nav__img-login '>
                <a href='/login' className='menu__center'>Login <img className='image__menu' src={login} alt='login'/></a>
            </div>

        </Menu>
        <div className='navigation__wrapper'>
            <div className='nav__img-logo'>
                <img className='nav__logo' src={logo} alt='logo'/>
            </div>

            <ul className='navigation'>
                <li>
                    <NavLink className='navigation__link' to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className='navigation__link' to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink className='navigation__link' to='/contact'>Contact Us</NavLink>
                </li>
            </ul>
            <div className='nav__img-login'>
                <a href='/login'> <img className='nav__login' src={login} alt='login'/></a>
            </div>
        </div>
    </div>

  )
}

export default Nav