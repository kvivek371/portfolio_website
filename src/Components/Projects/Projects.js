import React from 'react';
import blog from '../../Assets/blog.png';
import DigClock from '../../Assets/DigClock.png';
import todo from '../../Assets/todo.png'
import {FaLink} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs'
import './projects.css'

const Projects = () => {
  return (
    <section id='portfolio'>
      <h2 style={{textDecoration:"underline"}}>Projects</h2>

      <div className='container about_container' style={{display:'flex',justifyContent:'space-between'}}>
        <div className='project'>
          <p>Blog Project</p>
          <p><img style={{width:'100%', height:"15rem"}} src={blog} alt='Blog Project'/></p>
          <p>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>
          <p style={{display:'flex',justifyContent:'space-between'}}>
            <span><a href='https://reactblogbackendproject.herokuapp.com/' target="_blank"><FaLink />Demo</a></span>
            <span><a href='https://github.com/kvivek371/blogAppBackend' target="_blank"><BsGithub />Code</a></span>
          </p>
          <p>HTML, CSS, React, Node</p>
        </div>
        <div className='project'>
          <p>Digital Clock</p>
          <p><img style={{width:'100%', height:"15rem"}} src={DigClock} alt='Digital Clock Project'/></p>
          <p>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>
          <p style={{display:'flex',justifyContent:'space-between'}}>
            <span><a href='https://kvivek371.github.io/digitalClockProject/' target="_blank"><FaLink />Demo</a></span>
            <span><a href='https://github.com/kvivek371/digitalClockProject' target="_blank"><BsGithub />Code</a></span>
          </p>
          <p>HTML, CSS, Java Script</p>
        </div>
        <div className='project'>
          <p>Todo App</p>
          <p><img style={{width:'100%', height:"15rem"}} src={todo} alt='Digital Clock Project'/></p>
          <p>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>
          <p style={{display:'flex',justifyContent:'space-between'}}>
            <span><a href='https://kvivek371.github.io/todoJavaScript/' target="_blank"><FaLink />Demo</a></span>
            <span><a href='https://github.com/kvivek371/todoJavaScript' target="_blank"><BsGithub />Code</a></span>
          </p>
          <p>HTML, CSS, Java Script</p>
        </div>
      </div>
      <div className='container about_container'>
        <br/>
        <h2>Other Project :</h2>
        <p>Backtracking based on HTML(Implmentation of widely used Tags)</p>
        <p>Todo App UI Web based on Javascript and css(Web View)</p>
        <p>Todo App UI App based on css(Mobile Responsive)</p>
      </div>
    </section>
  )
}

export default Projects;