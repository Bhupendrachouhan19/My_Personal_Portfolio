import React from 'react'
import './footer.css'

import {TfiFacebook} from 'react-icons/tfi' 
import {RiInstagramFill} from 'react-icons/ri' 
import {TfiTwitterAlt} from 'react-icons/tfi' 

const Footer = () => {
  return (
    <footer>
      <i><b><h2><a href="#" className="footer__logo">BHUPENDRA CHOUHAN</a></h2></b></i>
      <ul className="permalinks">
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/bhupendra.chouhan.581730/" target='_blank'><TfiFacebook/></a>
        <a href="https://instagram.com/thebhupi/"  target='_blank'><RiInstagramFill/></a>
        <a href="https://twitter.com/thebhupii/"  target='_blank'><TfiTwitterAlt/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Bhupenda Chouhan. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer   