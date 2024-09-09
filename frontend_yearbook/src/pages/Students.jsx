import React from 'react'
import PortfolioList from '../components/PortfollioList'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const Students = () => {
  return (
    <div>
      
      <Navbar/>
      <Hero
        cName="hero-mid"
        heroImg='src/assets/gallery-1.png'
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