import React from 'react';
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        Frontend developer having expertise in frontend development and highly motivated individual dedicated to writing clear, concise, robust code that works. I like creating products that either have fun and nifty features or solve a genuine problem for people.<br/><br/>
      </div>

      <h2>
        Education :
      </h2>

      <h2  style={{textDecoration:"underline"}}>
        Training :
      </h2>
      <div className='container about_container' style={{display:'flex',justifyContent:'space-between'}}>
        <p>MERN FULL STACK DEVELOPER, PREPBYTES</p>
        <p>February 2022 to Present Day</p>
      </div>
      <h2  style={{textDecoration:"underline"}}>
        Academics
      </h2>
      <div className='container about_container'style={{display:'flex',justifyContent:'space-between'}}>
        <div>
          <p style={{textDecoration:'underline'}}>Master of Technology(CSE)</p>
          <p>SRK University,Bhopal</p>
          <p>2019-2021</p>
          <p>cgpa : 7.97 (hons)</p>
        </div>
        <div>
          <p style={{textDecoration:'underline'}}>Bachelor of Technology(CSE)</p>
          <p>Punjab Technical Univesity,Jalandhar</p>
          <p>62.50%</p>
          <p>2013-2017</p><br/>
        </div>
        <div>
          <p style={{textDecoration:'underline'}}>Intermediate</p>
          <p>St Joseph Sr Sec School,Muzaffarpur</p>
          <p>69.20%</p>
          <p>2011-2013</p>
        </div>
        <div>
          <p style={{textDecoration:'underline'}}>Matriculation(CSE)</p>
          <p>DAV Public School,Muzaffarpur</p>
          <p>cgpa : 10</p>
          <p>2010-2011</p><br/>
        </div>
      </div>
      <h2  style={{textDecoration:"underline"}}>
        Hobbies
      </h2>

      <div className='container about_container'>
        <div>
            <p>Playing Outdoor games like : Cricket, Football, Basketball</p>
            <p>Exploring New Places</p>
            <p>Listening Songs</p> 
        </div>
      </div>
    </section>
  )
}

export default About