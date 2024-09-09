import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectList from '../components/ProjectList';
import Footer from '../components/Footer';

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <Hero
        cName="hero-mid"
        heroImg='src/assets/gallery-1.png'
        title="Projects Portfolio"
        buttonText="Add Your Project"
        url="/projects"
        btnClass="show"
    />
      <ProjectList/>
      <Footer/>
    </div>
  )
}

export default Projects;