import React from 'react'
import './about.css'
import MEABOUT from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa';
import {FaUsers} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc';


const About = () => {
  return (
  <section id='about'>
    <h5>Get To Know</h5>
    <h2>👦About Me</h2>
    <div className="container about__container">
    
    {/* About Image section */}
      <div className="about__me">
        <div className="about__me-image">
          <img src={MEABOUT} alt="About" />
        </div>
      </div>

      {/* Cards Section */}
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className='about__icon' />
            <h5>Experience</h5>
            <small>2+ Years of Working</small>
          </article>

          <article className="about__card">
          <FaUsers className='about__icon' />
            <h5>Skills</h5>
            <small>9+ Worldwide</small>
          </article>
          
          <article className="about__card">
          <VscFolderLibrary className='about__icon' />
            <h5>Projects</h5>
            <small>6+ Completed</small>
          </article>
        </div>

    {/* Text Content */}
      <p>
      Looking for a dynamic and creative web developer and graphic designer?  <br/>
      <i>Look no further! </i><br/> 
      With a passion for all things design and technology, this multi-talented creative guy has the skills and expertise to bring your ideas to life. Whether you're looking for a sleek and modern website, eye-catching graphics, or engaging social media content, you can count on this innovative professional to deliver top-notch results that will help your brand stand out from the crowd. So why wait? Let's work together to create something truly remarkable today!
      </p>

    {/* CTA Section */}
      <a href={`#contact`} className='btn btn-primary'>Let's Talk</a>
      </div>

    </div>
    </section>
  )
}

export default About