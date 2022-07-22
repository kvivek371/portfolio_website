import React from 'react';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiOutlineGithub} from 'react-icons/ai';
import {SiGmail} from 'react-icons/si';
import {BsFillPhoneFill} from 'react-icons/bs'
import './contact.css'

const Contact = () => {
  return (
    <section id="contact">
       <h2>Contact Me</h2>

       <div className='container' style={{textAlign:'center',fontSize:'2rem'}}>
        <p><a href='https://linkedin.com' target="_blank" rel="noreferrer"><AiFillLinkedin />https://www.linkedin.com/in/kvivek371/</a></p>
        <p><a href='https://github.com' target="_blank" rel="noreferrer"><AiOutlineGithub/>https://github.com/kvivek371</a></p>
        <p><a href='https://gmail.com' target="_blank" rel="noreferrer"
        ><SiGmail /> kvivek371@gmail.com</a></p>
        <p><a href='/#' target=""><BsFillPhoneFill /> 7011257496</a></p>
    </div>
    </section>
  )
}

export default Contact