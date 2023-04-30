import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules : 'Used For Creating Carousel'
import { Pagination } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

const testimonialsItemsData = [
  {
    id: 1,
    avatar: AVTR1,
    name: 'Sanjan Singh',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem voluptatum sapiente vero harum deleniti facere vitae, tenetur sunt ab accusamus, quo id nobis, perferendis praesentium fugit. Voluptate iusto facilis quidem.'
  },
  {
    id: 2,
    avatar: AVTR2,
    name: 'Karan Singh',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem voluptatum sapiente vero harum deleniti facere vitae, tenetur sunt ab accusamus, quo id nobis, perferendis praesentium fugit. Voluptate iusto facilis quidem.'
  },
  {
    id: 3,
    avatar: AVTR3,
    name: 'Dolly Singh',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem voluptatum sapiente vero harum deleniti facere vitae, tenetur sunt ab accusamus, quo id nobis, perferendis praesentium fugit. Voluptate iusto facilis quidem.'
  },
  {
    id: 4,
    avatar: AVTR4,
    name: 'Ravi Singh',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem voluptatum sapiente vero harum deleniti facere vitae, tenetur sunt ab accusamus, quo id nobis, perferendis praesentium fugit. Voluptate iusto facilis quidem.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{dynamicBullets: true}}
      >
        {
          testimonialsItemsData.map(({id, avatar, name, review}) => {
            return (
              <SwiperSlide key={id} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }      
      
      </Swiper>
    </section>
  )
}

export default Testimonials