import React from 'react'
import './infographics.css'
import {BiCheck} from 'react-icons/bi'
import INFOG from '../../assets/infographic.jpg'

const Infographics = () => {
  return (
    <section id='infographic'>
      <h5></h5>
      <h2>👉 Infographic 👈</h2>

      <div className="container services__container">

  {/* START END of UI/UX */}
        <article className=''>
          {/* <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <div className="service__list">
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </div> */}
        </article>
{/* END of UI/UX */}

{/* START of Web Development */}
        <article className='service'>
          <div className="service__head">
            <h3>My Profile</h3>
          </div>
          <div className="service__list">
            {/* <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li> */}
            <div className='infog'>
              <img src={INFOG} alt="Infographic" />
            </div>
          </div>
        </article>
{/* END of Web Development */}

{/* START of Content Creation */}
        <article className=''>
          {/* <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <div className="service__list">
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </div> */}
        </article>
{/* END of Content Creation */}

      </div>
    </section>
  )
}

export default Infographics