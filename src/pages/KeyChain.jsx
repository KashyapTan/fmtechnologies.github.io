import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import key1 from '../images/products/keychain/key1.jpg'
import key2 from '../images/products/keychain/key2.jpg'
import key3 from '../images/products/keychain/key3.jpg'
import key4 from '../images/products/keychain/key4.jpg'
import key5 from '../images/products/keychain/key5.jpg'


function KeyChain() {
  const [keyImage, setKeyImage] = useState(key1)
  const setKeyImage1 = () => {
    setKeyImage(key1)
  }
  const setKeyImage2 = () => {
    setKeyImage(key2)
  }
  const setKeyImage3 = () => {
    setKeyImage(key3)
  }
  const setKeyImage4 = () => {
    setKeyImage(key4)
  }
  const setKeyImage5 = () => {
    setKeyImage(key5)
  }
  return (
    <>
        <Navbar/>
        <div className='wallet-page-1'>
          <div className="image-preview-section">
            <div className="wallet-image-1" onClick={setKeyImage1}>
              <img className='wallet-preview-images' src={key1} alt="wallet" />
            </div>
            <div className="wallet-image-2" onClick={setKeyImage2}>
              <img className='wallet-preview-images' src={key2} alt="wallet" />
            </div>
            <div className="wallet-image-3" onClick={setKeyImage3}>
              <img className='wallet-preview-images' src={key3} alt="wallet" />
            </div>
            <div className="wallet-image-4" onClick={setKeyImage4}>
              <img className='wallet-preview-images' src={key4} alt="wallet" />
            </div>
            <div className="wallet-image-5" onClick={setKeyImage5}>
              <img className='wallet-preview-images' src={key5} alt="wallet" />
            </div>
          </div>
          <div className="image-show-case-section">
            <div className="main-image-container">
              <img className='wallet-page-main-image' src={keyImage} alt="wallet" />
            </div>
          </div>
          <div className="image-text-section">
            <div className="image-name-section">FM KEYCHAIN</div>
            <div className="wallet-price-section">$10.00</div>
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
                <div className="wallet-dimension-description">10 mm | 10 mm (L X W)</div>
                <div className='wallet-specifications-weight'>WEIGHT</div>
                <div className="wallet-weight-description">2 g</div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default KeyChain