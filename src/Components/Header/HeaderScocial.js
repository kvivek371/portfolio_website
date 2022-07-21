import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai';
import {AiOutlineGithub} from 'react-icons/ai';
import {SiGmail} from 'react-icons/si';
import {BsFillPhoneFill} from 'react-icons/bs'

const HeaderScocial = () => {
  return (
    <div className='header_social'>
        <a href='https://linkedin.com' target="_blank"><AiFillLinkedin />https://www.linkedin.com/in/kvivek371/</a>
        <a href='https://github.com' target="_blank"><AiOutlineGithub/>https://github.com/kvivek371</a>
        <a href='https://gmail.com' target="_blank"><SiGmail /> kvivek371@gmail.com</a>
        <a href='#' target="_blank"><BsFillPhoneFill /> 7011257496</a>
    </div>
  )
}

export default HeaderScocial