import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai';
import {AiOutlineGithub} from 'react-icons/ai';
import {SiGmail} from 'react-icons/si';
import {BsFillPhoneFill} from 'react-icons/bs'

const HeaderScocial = () => {
  return (
    <div className='header_social'>
        <a href='https://www.linkedin.com/in/kvivek371/' target="_blank" rel="noreferrer"><AiFillLinkedin />https://www.linkedin.com/in/kvivek371/</a>
        <a href='https://github.com/kvivek371' target="_blank" rel="noreferrer"><AiOutlineGithub/>https://github.com/kvivek371</a>
        <a href='https://gmail.com' target="_blank" rel="noreferrer"><SiGmail /> kvivek371@gmail.com</a>
        <a href="tel:701-125-7496" rel="noreferrer"><BsFillPhoneFill /> 7011257496</a>
    </div>
  )
}

export default HeaderScocial