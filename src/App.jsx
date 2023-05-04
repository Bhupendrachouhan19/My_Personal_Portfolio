// Importing All the Components in the order that we want to show them in the final website:
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Certificates from './components/certificates/Certificates'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Creativity from './components/creativity/Creativity'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Certificates />
      <Portfolio />
      <Creativity />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App