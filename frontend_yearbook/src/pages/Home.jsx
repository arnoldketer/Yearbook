import React from 'react'
import PortfolioList from '../components/PortfollioList'
import Navbar from '../components/Navbar'
import { About } from '../components/About'
import Campus from '../components/Campus'
import Carousel from '../components/Carousel'
import Title from '../components/Title'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import HeroImg from '../assets/hero.png'

const Home = () => {
  return (
   <>
   <Navbar />
    <Hero
      cName="hero"
      heroImg={HeroImg}
      title="Where Every Smile Tells a Story"
      text="Turning Today’s Memories into Tomorrow’s Treasures"
      buttonText="Make your own"
      url="/portfollio"
      btnClass="show"
    />
    <div className="container">
      <About />
      <Title subTitle="Gallery" title="Campus Photos" />
      <Campus />
      <Title subTitle="Featured Portfolios" title="What Our MVPs Say"/>
      <Carousel />
    </div>
    <Footer/>
   
   
   </>
  )
}

export default Home