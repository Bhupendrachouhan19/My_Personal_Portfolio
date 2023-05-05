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

        {/* START of Inforgraphic */}
                <article className='service'>
                  <div className="service__head">
                    <h3>My Profile</h3>
                  </div>
                    <div className='infog'>
                      <img src={INFOG} alt="Infographic" />
                    </div>
                </article>
        {/* END of Infographic */}

      </div>
    </section>
  )
}

export default Infographics