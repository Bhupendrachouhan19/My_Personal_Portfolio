import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Service</h2>

      <div className="container serices__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <div className="service__list">
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eos.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eos.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eos.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eos.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eos.</p>
            </li>
          </div>
        </article>
{/* END of UI/UX */}

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <div className="service__list">
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eos.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eos.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eos.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eos.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eos.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eos.</p>
            </li>
          </div>
        </article>
{/* END of Web Development */}

        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <div className="service__list">
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eos.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eos.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eos.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eos.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eos.</p>
            </li>
          </div>
        </article>
{/* END of Content Creation */}

      </div>
    </section>
  )
}

export default Services