import React from 'react'
import NavbarDark from '../components/NavbarDark'
import '../projectCss/Contact.css'
import Footer from '../components/Footer'
import fmtechLogo from '../images/fm-tech-logo-dark.webp'


function Contact() {
  return (
    <div>
        <NavbarDark />
        <div className='contact-page-container'>
          <div className="contact-section">
            <form id="contact-form">
                <h1 className="contact-me-text">Contact Us</h1>
                <input type="text" id="name" placeholder="Name" required/>
                <input type="email" id="email" placeholder="Email" required/>
                <textarea id="message" rows="4" placeholder="Message" required></textarea>
                <button className="form-submit" type="submit">Send</button>
            </form>
          </div>
          <div className="image-section">
            <div className="bulding-image-area">
              <img src={fmtechLogo} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact