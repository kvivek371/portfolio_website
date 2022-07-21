import React from 'react';
import tech from '../../Assets/tech.png';
import tools from '../../Assets/tools.png';
import './technology.css';


const Technology = () => {
  return (
    <section id="testimonials">
      <div className='container about_container'>
        <h2 style={{textAlign:'center',color:'var(--color-primary)',textDecoration:'underline'}}>Technology</h2>
        <p style={{fontSize:'2rem'}}>Tech Stack </p>
        <img src={tech} alt='' /><br/><br/><br/><br/>
      </div>
      <div className='container about_container'>
        <p style={{fontSize:'2rem'}}>Tools </p>
        <img src={tools} alt='' />
      </div>
    </section>
  )
}

export default Technology;