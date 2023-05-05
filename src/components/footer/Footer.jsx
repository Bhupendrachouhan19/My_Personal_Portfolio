import React from 'react'
import './footer.css'

import {BsLinkedin} from 'react-icons/bs' 
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
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/bhupendrachouhan/" target='_blank'><BsLinkedin/></a>
        <a href="https://twitter.com/thebhupii/"  target='_blank'><TfiTwitterAlt/></a>
        <a href="https://instagram.com/thebhupi/"  target='_blank'><RiInstagramFill/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Bhupendra Chouhan. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer   