import React from 'react'
import '../projectCss/Loader.css'
import fmLogoLight from '../images/fm-tech-logo-light.webp'

import { gsap } from 'gsap'
import imagesLoaded from 'imagesloaded'
import Home from './Home'
function Loader() {
    const content = <Home/>
    const imgL = imagesLoaded(content)
    imgL.on('done', instance => {
        gsap.to('.loader-container', {
            duration: 2,
            opacity: 0,
            ease: 'power2.inOut',
        })
        gsap.to('.blinder', {
            scaleY: 0.01,
            stagger: 0.3,
            ease: 'power3.out',
            // yoyo: true,
            // repeat: 1,
        })
    })
    
  return (
    <>
        {/* <div className="loader-container"> */}
            <div className="blinder-container">
                <div className="blinder"></div>
                <div className="blinder"></div>
                <div className="blinder"></div>
                <div className="blinder"></div>
                <div className="blinder"></div>
            </div>

            <div className='main-circle'>
                <div className="logo-layer">
                    <img src={fmLogoLight} alt="" />
                </div>
                <div className="mask-layer"></div>
            </div>
        {/* </div> */}


            <div className="test-text">
                <h1>title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet fugiat possimus impedit accusantium velit aperiam beatae consequuntur rem quaerat.</p>
            </div>

            {/* <Home/> */}

    </>
  )
}

export default Loader