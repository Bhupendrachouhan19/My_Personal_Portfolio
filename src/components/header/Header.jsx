import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>👋 Hii I'm,</h3>
        <h1>Bhupendra Chouhan</h1>
        <CTA />

        {/* My Photo */}
        <div><img src={ME} className="me" width="500px" alt="Bhupendra Chouhan" /></div>

      
        <a href="#contact" className='scroll__down'>Scroll Down</a>        
        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header