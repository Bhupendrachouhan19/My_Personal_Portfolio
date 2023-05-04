import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'


// Portfolio Items Data:
const portfolioItemsData = [
  {
    id: 1,
    image: IMG1,
    title: 'Responsive Card Hover Effect',
    github: 'https://github.com/bhupendrachouhan19',
    demo: 'https://dribble.com/Alien_pixels' 
  },
  {
    id: 2,
    image: IMG2,
    title: 'Newsletter + Mass Emailing Site',
    github: 'https://github.com/bhupendrachouhan19',
    demo: 'https://dribble.com/Alien_pixels' 
  },
  {
    id: 3,
    image: IMG3,
    title: 'ARP Spoofing in SDN',
    github: 'https://github.com/bhupendrachouhan19',
    demo: 'https://dribble.com/Alien_pixels' 
  },
  {
    id: 4,
    image: IMG4,
    title: 'Creative Product Page (UI/UX)',
    github: 'https://github.com/bhupendrachouhan19',
    demo: 'https://dribble.com/Alien_pixels' 
  },
  {
    id: 5,
    image: IMG5,
    title: 'Sport T-Shirt Design',
    github: 'https://github.com/bhupendrachouhan19',
    demo: 'https://dribble.com/Alien_pixels' 
  },
  {
    id: 6,
    image: IMG6,
    title: 'Blood Donation Camp Poster',
    github: 'https://github.com/bhupendrachouhan19',
    demo: 'https://dribble.com/Alien_pixels' 
  }
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      
        {
          portfolioItemsData.map(({id, image, title, github, demo})=>{
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>  
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_black'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_black'>Live Demo</a>
                </div>
              </article>
            )
          })
        }


      </div>
    </section>
  )
}

export default Portfolio