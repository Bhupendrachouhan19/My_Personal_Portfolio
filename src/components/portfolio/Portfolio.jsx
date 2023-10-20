import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import IMG7 from '../../assets/portfolio7.png'


// Portfolio Items Data:
const portfolioItemsData = [
  {
    id: 1,
    image: IMG7,
    title: 'Citizen-centric FIR System Prototype on Blockchain',
    tech: ' Next.JS, Tailwind CSS, ThirdWeb, Solidity, Polygon Mumbai Testnet',
    github: 'https://github.com/Bhupendrachouhan19/Citizen-centric-FIR-system-Prototype-using-blockchain',
    desc: 'This is an e-FIR system prototype which leverage blockchain and smart contract to address the challenges in the traditional FIR system, enhancing security, transparency,corruption and efficiency in crime reporting and investigations',
    demo: 'https://github.com/Bhupendrachouhan19/Citizen-centric-FIR-system-Prototype-using-blockchain' 
  },
  {
    id: 2,
    image: IMG2,
    title: 'Newsletter + Mass Emailing Site',
    tech: 'HTML, CSS, Django',
    github: 'https://github.com/bhupendrachouhan19',
    desc: "This project has two interface (1st) Newsletter and (2nd) Admin. User can put put join the Newsletter by entering their email adress. These email ID then stored a '.csv' file. Now, the admin from it's interface can view or download this '.csv' file' and can also write and send email to all the email ID's in that list with just One Click.",
    demo: 'https://github.com/bhupendrachouhan19' 
  },
  
  {
    id: 3,
    image: IMG1,
    title: 'Responsive Card Hover Effect',
    tech: 'HTML, CSS, Javascript',
    github: 'https://github.com/bhupendrachouhan19',
    desc: 'This is a small but really cool project I made while exploring the power of pure CSS3',
    demo: 'https://github.com/bhupendrachouhan19' 
  },

  {
    id: 4,
    image: IMG3,
    title: 'ARP Spoofing in SDN',
    tech: 'Wireshark, Mininet, P4 Programming',
    github: 'https://github.com/bhupendrachouhan19',
    desc: 'In this project I have performed ARP Soofing in SDN environment, using mininet to create the Topology. I also wrote a python code to spoof the MAC address of the Victim Host and the Switch',
    demo: 'https://github.com/bhupendrachouhan19' 
  },
  {
    id: 5,
    image: IMG4,
    title: 'Creative Product Page (UI/UX)',
    tech: 'Figma',
    github: 'https://github.com/bhupendrachouhan19',
    desc: 'I made this production page for a shoe ecommerce website while learning Figma, figma components & layering.',
    demo: 'https://github.com/bhupendrachouhan19' 
  },
  {
    id: 6,
    image: IMG5,
    title: 'Sport T-Shirt Design',
    tech: 'Adobe Illustrator',
    github: 'https://github.com/bhupendrachouhan19',
    desc: "This is the T-Shirt Design I made for my team 'Team Titans'. Our team wore this t-shirt in IIIT-NR's most popular sport event 'Aarambh5.0'.",
    demo: 'https://github.com/bhupendrachouhan19' 
  },
  {
    id: 7,
    image: IMG6,
    title: 'Blood Donation Camp Poster',
    tech: 'Adobe Photoshop',
    github: 'https://github.com/bhupendrachouhan19',
    desc: "This is poster, I made for a blood donation camp organised by NSS and SAC in our Institute. That blood drop with text, matching perfectly with the main heading i.e. 'Donation Camp' took me almost 3hrs",
    demo: 'https://github.com/bhupendrachouhan19' 
  }
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>👨‍💻 Portfolio 👨‍💻</h2>

      <div className="container portfolio__container">
      
        {
          portfolioItemsData.map(({id, image, title, tech, github, desc, demo})=>{
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-content">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>  
                <h5 className='tech'>Technology : {tech}</h5>  
                <h5 className='desc'>{desc}</h5>  
                </div>
                {/* <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_black'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_black'>Live Demo</a>
                </div> */}
              </article>
            )
          })
        }


      </div>
    </section>
  )
}

export default Portfolio