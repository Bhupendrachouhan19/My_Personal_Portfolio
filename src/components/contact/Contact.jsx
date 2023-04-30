import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {

  const form = useRef();

  // Email Logic:
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ghvu40i', 'template_7kv2wm4', form.current, 'YJE0DWe3OLHSgmbQz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">

        {/* START Of Contact Options */}
          <article className="contact__options">
            <article className="contact__option">
              <MdOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>fakeemail420@gmail.com</h5>
              <a href="mailto:fakeemail420@gmail.com" target="_blank">Send a Message</a>
            </article>

            <article className="contact__option">
              <RiMessengerLine className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>Bhupendra Chouhan</h5>
              <a href="https://m.me/bhupendra.chouhan.581730" target="_blank">Send a Message</a>
            </article>

            <article className="contact__option">
              <BsWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              <h5>6234567890</h5>
              <a href="https://api.whatsapp.com/send?phone=+916234567890" target="_blank">Send a Message</a>
            </article>
          </article>
        {/* END Of Contact Options */}

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="8" placeholder='Your Message' required ></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
 
        </div>
    </section>
  )
}
 
export default Contact