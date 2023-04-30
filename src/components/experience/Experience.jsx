import React from 'react'
import './experience.css'
import {MdVerified} from 'react-icons/md'

const Experience = () => {
  return (
    <section id='experience'> 
      <h5> Skills I Have </h5>
      <h2> My Experience </h2>
      
      <div className="contianer experience__container">

      {/* Frontend Technology Section */}
        <div className="experience__frontend ">
          <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <MdVerified className='verified__icon'/>
                <h4>HTML5</h4>
                <small className="text-light">Experienced</small>
              </article>

              <article className="experience__details">
                <MdVerified className='verified__icon' />
                <h4>CSS3</h4>
                <small className="text-light">Experienced</small>
              </article>

              <article className="experience__details">
                <MdVerified className='verified__icon' />
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </article>
              
              <article className="experience__details">
                <MdVerified className='verified__icon' />
                <h4>ReactJs</h4>
                <small className="text-light">Experienced</small>
              </article>
              
              <article className="experience__details">
                <MdVerified className='verified__icon' />
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </article>
            </div>
        </div>

      {/* Backend Technology Section */}
        <div className="experience__backend">
          <h3>Blockchain Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <MdVerified className='verified__icon' />
                <h4>Solidity</h4>
                <small className="text-light">Experienced</small>
              </article>

              <article className="experience__details">
                <MdVerified className='verified__icon' />
                <h4>Web3.js</h4>
                <small className="text-light">Experienced</small>
              </article>

              <article className="experience__details">
                <MdVerified className='verified__icon' />
                <h4>Ether.js</h4>
                <small className="text-light">Experienced</small>
              </article>

              <article className="experience__details">
                <MdVerified className='verified__icon' />                
                <h4>Metamask</h4>
                <small className="text-light">Experienced</small>
              </article>
              <article className="experience__details">
                <MdVerified className='verified__icon' />                
                <h4>Metamask</h4>
                <small className="text-light">Experienced</small>
              </article>
            </div>
        </div>

      {/* Graphic Designing Tools Section */}
        {/* <div className="experience__frontend">
          <h3>Graphic Designing Tools</h3>
            <div className="experience__content">
              <article className="experience__details">
                <h4>Photoshop</h4>
                <small className="text-light">Experienced</small>
              </article>
              <article className="experience__details">
                <h4>Figma</h4>
                <small className="text-light">Experienced</small>
              </article>
            </div>
        </div> */}

      {/* Other Tools */}
        {/* <div className="experience__frontend">
          <h3>Other Tools</h3>
            <div className="experience__content">
              <article className="experience__details">
                <h4>Github</h4>
                <small className="text-light">Intermediate</small>
              </article>
              <article className="experience__details">
                <h4>Visual Studio Code</h4>
                <small className="text-light">Experienced</small>
              </article>
            </div>
        </div> */}

      </div>
    </section>
  )
}

export default Experience