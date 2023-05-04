import React from 'react'
import YoutubeEmbed from './YoutubeEmbed';
import './creativity.css'
import CREATE1 from '../../assets/myCreativity/cricket.jpg'
import CREATE2 from '../../assets/myCertificates/Cert2.jpg'

// import Swiper core and required modules : 'Used For Creating Carousel'
import { Autoplay, Pagination, Navigation } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const creativityItemsData = [
    {
        id: 0,
        create: "sNMQ5xwFRlg",
        title: 'Youtube: IIIT Naya Raipur Vlog',
        brief: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem voluptatum sapiente vero harum deleniti facere vitae, tenetur sunt ab accusamus, quo id nobis, perferendis praesentium fugit. Voluptate iusto facilis quidem.'
    },
    {
        id: 1,
        create: CREATE1,
        title: 'Cricket',
        brief: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem voluptatum sapiente vero harum deleniti facere vitae, tenetur sunt ab accusamus, quo id nobis, perferendis praesentium fugit. Voluptate iusto facilis quidem.'
    },
    {
        id: 2,
        create: CREATE2,
        title: 'Sports',
        brief: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem voluptatum sapiente vero harum deleniti facere vitae, tenetur sunt ab accusamus, quo id nobis, perferendis praesentium fugit. Voluptate iusto facilis quidem.'
    }
]

const Creativity = () => {

  return (
    <section id='creativity'>
      <h5>My </h5>
      <h2>Creatives 👻 Hobbies</h2>
      <Swiper className="container creatives__container"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
      >

              <SwiperSlide key={creativityItemsData[0].id} className="creative">
                <div className="creative__video">
                  <YoutubeEmbed embedId="sNMQ5xwFRlg&t" />
                </div>
                <div className="creative__text">
                  <h1 className='creative__title'>{creativityItemsData[0].title}</h1>
                  <h4 className='creative__brief'>{creativityItemsData[0].brief}</h4>
                </div>
              </SwiperSlide>

              <SwiperSlide key={creativityItemsData[1].id} className="creative">
                <div className="creative__image">
                  <img src={creativityItemsData[1].create} alt="Avatar One" />
                </div>
                <div className="creative__text">
                  <h1 className='creative__title'>{creativityItemsData[1].title}</h1>
                  <h4 className='creative__brief'>{creativityItemsData[1].brief}</h4>
                </div>
              </SwiperSlide>

      </Swiper>
    </section>
  )
}

export default Creativity;