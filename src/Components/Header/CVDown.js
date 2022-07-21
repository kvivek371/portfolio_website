import React from 'react';
import cv from '../../Assets/cv.pdf'

const CVDown = () => {
  return (
    <div className='cvd'>
        <a href={cv} download className='btn'>Download Resume</a>
        <a href='#contact' className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CVDown