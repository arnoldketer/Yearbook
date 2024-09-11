import React from 'react'
import PortfolioList from '../components/PortfollioList'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import gallery1 from '../assets/gallery-1.png'

const Students = () => {
  return (
    <div>
      
      <Navbar/>
      <Hero
        cName="hero-mid"
        heroImg={gallery1}
        title="Students Portfolio"
        buttonText="Add Your Portfollio"
        url="/portfollio"
        btnClass="show"
    />
      <PortfolioList/>
      <Footer/>
    </div>
  )
}

export default Students;