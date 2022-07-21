import React from 'react';
import CVDown from './CVDown';
import Me from '../../Assets/Me.jpeg';
import HeaderScocial from './HeaderScocial';
import './header.css'

const Header = () => {
  return (
    <header>
      <div className = "container header_container">
        <h5>
          Hello I'm
        </h5>
        <h1>
          Vivek Kumar
        </h1>
        <h5 className='text-light'>
          MERN Stack Developer
        </h5>
        <CVDown />
        <HeaderScocial />
        <div>
          <img className='me' src={Me} alt="me" />
        </div>
        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header