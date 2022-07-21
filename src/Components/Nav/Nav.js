import React,{useState} from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BsBook} from 'react-icons/bs';
import {RiServiceFill} from 'react-icons/ri';
import {MdOutlineContactPage} from 'react-icons/md'
import './nav.css';


const Nav = () => {
  const [active,setActive] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=>setActive('#')} className={active==='#'?'active':''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActive('#about')} className={active==='#about'?'active':''}><AiOutlineUser/></a>
      <a href='#portfolio' onClick={()=>setActive('#portfolio')} className={active==='#portfolio'?'active':''}><BsBook/></a>
      <a href='#testimonials' onClick={()=>setActive('#testimonials')} className={active==='#testimonials'?'active':''}><RiServiceFill/></a>      
      <a href='#contact' onClick={()=>setActive('#contact')} className={active==='#contact'?'active':''}><MdOutlineContactPage/></a>
    </nav>
  )
}

export default Nav