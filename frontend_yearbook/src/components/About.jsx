import React from 'react'
import '../styles/AboutStyles.css'
import about_img from '../assets/about.png'
import play_icon from '../assets/play-icon.png'

export const About = () => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
        </div>
        <div className="about-right">
            <h3>WHAT'S A YEARBOOK</h3>
            <h2>Celebrate Your Journey, Page by Page</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, corrupti aspernatur earum amet doloremque laboriosam? Obcaecati voluptas tempora quaerat aliquam distinctio placeat iure odit natus eos, eligendi, provident, esse beatae?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, corrupti aspernatur earum amet doloremque laboriosam? Obcaecati voluptas tempora quaerat aliquam distinctio placeat iure odit natus eos, eligendi, provident, esse beatae?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, nobis qui omnis repellat totam debitis! Velit minus iusto impedit animi libero quos laboriosam quis similique, rem, assumenda voluptate et molestias.</p>
        </div>
    </div>
  )
}