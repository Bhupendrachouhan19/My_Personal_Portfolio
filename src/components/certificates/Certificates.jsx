import React from 'react'
import './certificates.css'
import CERT1 from '../../assets/myCertificates/Cert1.jpg'
import CERT2 from '../../assets/myCertificates/Cert2.jpg'
import CERT3 from '../../assets/myCertificates/Cert3.jpg'
import CERT4 from '../../assets/myCertificates/Cert4.jpg'
import CERT5 from '../../assets/myCertificates/Cert5.jpg'

// import Swiper core and required modules : 'Used For Creating Carousel'
import { Autoplay, Pagination, Navigation } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const certicicatesItemsData = [
  {
    id: 1,
    cert: CERT1,
    title: 'Wadhwani Foundation',
    certLink: 'https://i.imgur.com/hm6S9dz.jpg'
  },
  {
    id: 2,
    cert: CERT3,
    title: 'Google Analytics Academy',
    certLink: 'https://i.imgur.com/4rnU3CU.jpg'
  },
  {
    id: 3,
    cert: CERT4,
    title: 'The Fundamentals of Digital Marketing',
    certLink: 'https://i.imgur.com/MxzSfyf.jpg'
  },
  {
    id: 4,
    cert: CERT5,
    title: 'IEEE English for Technical Professionals',
    certLink: 'https://i.imgur.com/mDSq41W.jpg'
  },
  {
    id: 5,
    cert: CERT2,
    title: 'Scintfic 2k21',
    certLink: 'https://i.imgur.com/R0WelgD.jpg'
  },
]

const Certificates = () => {

  return (
    <section id='certificates'>
      <h5>My Achievements</h5>
      <h2>🌟 Certificates 🌟</h2>
      <Swiper className="container certificates__container"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {
          certicicatesItemsData.map(({id, cert, title, certLink}) => {
            return (
              <SwiperSlide key={id} className="certificate">
                <div className="cert__image">
                  <img src={cert} alt="Avatar One" />
                </div>
                <div className="cert__text">
                  <h2 className='cert__title'>{title}</h2>
                  <a href={certLink} className='btn btn-primary cert__btn'>Certificate Link</a>
                </div>
              </SwiperSlide>
            )
          })
        }      
      
      </Swiper>
    </section>
  )
}

export default Certificates