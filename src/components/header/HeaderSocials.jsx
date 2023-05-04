import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="http://linkedin.com/in/bhupendrachouhan" target='_blank'><BsLinkedin /></a>
        <a href="http://github.com/bhupendrachouhan19" target='_blank'><FaGithub /></a>
        <a href="http://twitter.com/thebhupii" target='_blank'><FiTwitter /></a>
    </div>
  )
}

export default HeaderSocials