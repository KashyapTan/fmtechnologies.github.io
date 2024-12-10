import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import phoneImage1 from '../images/products/phonecase/phone1.jpg'
import phoneImage2 from '../images/products/phonecase/phone2.jpg'
import phoneImage3 from '../images/products/phonecase/phone3.jpg'
import phoneImage4 from '../images/products/phonecase/phone4.jpg'
import phoneImage5 from '../images/products/phonecase/phone5.jpg'

function PhoneCase() {
  const [phoneImage, setPhoneImage] = useState(phoneImage1)
  const setPhoneImage1 = () => {
    setPhoneImage(phoneImage1)
  }
  const setPhoneImage2 = () => {
    setPhoneImage(phoneImage2)
  }
  const setPhoneImage3 = () => {
    setPhoneImage(phoneImage3)
  }
  const setPhoneImage4 = () => {
    setPhoneImage(phoneImage4)
  }
  const setPhoneImage5 = () => {
    setPhoneImage(phoneImage5)
  }
  return (
    <>
        <Navbar/>
        <div className='wallet-page-1'>
          <div className="image-preview-section">
            <div className="wallet-image-1" onClick={setPhoneImage1}>
              <img className='wallet-preview-images' src={phoneImage1} alt="wallet" />
            </div>
            <div className="wallet-image-2" onClick={setPhoneImage2}>
              <img className='wallet-preview-images' src={phoneImage2} alt="wallet" />
            </div>
            <div className="wallet-image-3" onClick={setPhoneImage3}>
              <img className='wallet-preview-images' src={phoneImage3} alt="wallet" />
            </div>
            <div className="wallet-image-4" onClick={setPhoneImage4}>
              <img className='wallet-preview-images' src={phoneImage4} alt="wallet" />
            </div>
            <div className="wallet-image-5" onClick={setPhoneImage5}>
              <img className='wallet-preview-images' src={phoneImage5} alt="wallet" />
            </div>
          </div>
          <div className="image-show-case-section">
            <div className="main-image-container">
              <img className='wallet-page-main-image' src={phoneImage} alt="wallet" />
            </div>
          </div>
          <div className="image-text-section">
            <div className="image-name-section">FM PHONE CASE</div>
            <div className="wallet-price-section">$20.00</div>
            <div className="image-description-section">Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Minima consequatur reprehenderit nostrum error quidem deleniti 
              molestiae culpa totam tempora laborum, eaque quam aspernatur quasi repudiandae ab beatae 
              dignissimos quod consectetur. Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Minima consequatur reprehenderit nostrum error quidem deleniti 
              molestiae culpa totam tempora laborum, eaque quam aspernatur quasi repudiandae ab beatae 
              dignissimos quod consectetur.</div>
            <div className="color-selector-section">
              <div className="black-color-wallet"></div>
              <div className="brown-color-wallet"></div>
              <div className="blue-color-wallet"></div>
            </div>
            <div className="add-to-cart-section">
              <div className="add-to-cart-button">Add to Cart</div>
              <div className="buy-now-buttton">Buy Now</div>
            </div>
            <div className="wallet-specifications-section">
              <div className='wallet-specifications-section-1'>
                <div className='wallet-specifications-heading-1'>FEATURES</div>
                <div className="feature-1">GPS</div>
                <div className="feature-3">QUALITY</div>
                <div className="features-text"></div>
              </div>
              <div className='wallet-specifications-section-2'>
                <div className="wallet-specifications-heading-2">SPECIFICATIONS</div>
                <div className='wallet-specifications-material'>MATERIAL</div>
                <div className="wallet-material-description">Plastic reinforced carbon fiber</div>
                <div className='wallet-specifications-thickness'>THICKNESS</div>
                <div className="wallet-thickness-description">2 mm</div>
                <div className='wallet-specifications-dimensions'>DIMENSION</div>
                <div className="wallet-dimension-description">40 mm | 20 mm (L X W)</div>
                <div className='wallet-specifications-weight'>WEIGHT</div>
                <div className="wallet-weight-description">10 g</div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default PhoneCase