import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectList from '../components/ProjectList';
import Footer from '../components/Footer';
import gallery1 from '../assets/gallery-1.png';

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <Hero
        cName="hero-mid"
        heroImg={gallery1}
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