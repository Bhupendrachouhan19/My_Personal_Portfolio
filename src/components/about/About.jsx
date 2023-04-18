import React from 'react'
import './about.css'
import MEABOUT from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa';
import {FaUsers} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc';


const About = () => {
  return (
  <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
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
            <small>3+ Years of Working</small>
          </article>

          <article className="about__card">
          <FaUsers className='about__icon' />
            <h5>Clients</h5>
            <small>300+ Worldwide</small>
          </article>
          
          <article className="about__card">
          <VscFolderLibrary className='about__icon' />
            <h5>Projects</h5>
            <small>80+ Completed</small>
          </article>
        </div>

    {/* Text Content */}
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ut. Cum, adipisci? Distinctio blanditiis accusamus sit optio dicta a rem? Perspiciatis expedita eos eligendi sit corporis ratione, dicta eum quibusdam.
      </p>

    {/* CTA Section */}
      <a href={`#contact`} className='btn btn-primary'>Let's Talk</a>
      </div>

    </div>
    </section>
  )
}

export default About