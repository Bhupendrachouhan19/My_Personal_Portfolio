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
    brief: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem voluptatum sapiente vero harum deleniti facere vitae, tenetur sunt ab accusamus, quo id nobis, perferendis praesentium fugit. Voluptate iusto facilis quidem.'
  },
  {
    id: 2,
    cert: CERT2,
    title: 'Scintfic',
    brief: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem voluptatum sapiente vero harum deleniti facere vitae, tenetur sunt ab accusamus, quo id nobis, perferendis praesentium fugit. Voluptate iusto facilis quidem.'
  },
  {
    id: 3,
    cert: CERT3,
    title: 'Google Analytics Academy',
    brief: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem voluptatum sapiente vero harum deleniti facere vitae, tenetur sunt ab accusamus, quo id nobis, perferendis praesentium fugit. Voluptate iusto facilis quidem.'
  },
  {
    id: 4,
    cert: CERT4,
    title: 'The Fundamentals of Digital Marketing',
    brief: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem voluptatum sapiente vero harum deleniti facere vitae, tenetur sunt ab accusamus, quo id nobis, perferendis praesentium fugit. Voluptate iusto facilis quidem.'
  },
  {
    id: 5,
    cert: CERT5,
    title: 'IEEE English for Technical Professionals',
    brief: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem voluptatum sapiente vero harum deleniti facere vitae, tenetur sunt ab accusamus, quo id nobis, perferendis praesentium fugit. Voluptate iusto facilis quidem.'
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
          certicicatesItemsData.map(({id, cert, title, brief}) => {
            return (
              <SwiperSlide key={id} className="certificate">
                <div className="cert__image">
                  <img src={cert} alt="Avatar One" />
                </div>
                <div className="cert__text">
                  <h1 className='cert__title'>{title}</h1>
                  <h4 className='cert__brief'>{brief}</h4>
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