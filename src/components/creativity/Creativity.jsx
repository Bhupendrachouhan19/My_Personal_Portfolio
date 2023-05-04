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
        brief: "🔥Checkout my vlog. Take a close look at the campus of International Institute of Information technology(IIIT), Naya Raipur, Chhattisgarh.  Hope you guys like the vlog. Please Subscrib!!! 🙂❤ "
    },
    {
        id: 1,
        create: CREATE1,
        title: 'Cricket',
        brief: 'And, Yeah!😎 I am also a Part-time, Underrated, Underground, Cricketer🏏. That Jersy is Designed By ME😁.'
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