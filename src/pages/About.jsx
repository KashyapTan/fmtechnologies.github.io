import React from 'react'
import Navbar from '../components/Navbar'
import '../projectCss/About.css'
import fmtechLogo from '../images/fm-tech-logo-light.webp'
import Footer from '../components/Footer'


function About() {
  return (
    <>
      <Navbar />
      <div className='about-page-container'>
        <div className="about-page-content">
          <div className='about-page-text'>
            <div className='about-page-heading'>Who We Are</div>
            <div className='about-page-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
          </div>
        </div>
        <div className="about-page-image">
          <img src={fmtechLogo} alt="" />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About