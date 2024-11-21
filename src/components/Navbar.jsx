import React from 'react'


import logoDark from '../images/fm-tech-logo-light.webp'

function Navbar() {
  return (
    <>
        <div className="navbar">
                <div className='logo-space'>
                    <img className='fm-tech-logo' src={logoDark} alt="" />
                </div>

                <div className='blank-space'></div>

                <div className='navigation-options'>
                    <div className="about-button">
                        About
                    </div>
                    <div className="contact-buttong">
                        Contact Us
                    </div>
                    <div className='shopping-cart-button'>
                        Cart
                    </div>
                </div>
            </div>
    </>
  )
}

export default Navbar