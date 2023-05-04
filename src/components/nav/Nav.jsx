import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {TiUserOutline} from 'react-icons/ti'
import {TbStarsFilled} from 'react-icons/tb'
// import {RiServiceLine} from 'react-icons/ri'
import {TbCode} from 'react-icons/tb'
import {TbMessageChatbot} from 'react-icons/tb'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('');
  
  return (
    <nav>
      <a href='#' onClick={()=>setActiveNav('#')}  className={activeNav === '#' ? 'active': ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''} ><TiUserOutline/></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''} ><TbStarsFilled/></a>
      <a href='#portfolio' onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active': ''} ><TbCode/></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''} ><TbMessageChatbot/></a>
    </nav>
  )
}

export default Nav