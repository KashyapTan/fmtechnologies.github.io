import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import '../projectCss/Wallet.css'
import { useState } from 'react'
import walletImage1 from '../images/products/wallet/wallet-1.jpg'
import walletImage2 from '../images/products/wallet/wallet-2.jpg'
import walletImage3 from '../images/products/wallet/wallet-3.jpg'
import walletImage4 from '../images/products/wallet/wallet-4.jpg'
import walletImage5 from '../images/products/wallet/wallet-5.jpg'
function Wallet() {
  const [walletImage, setWalletImage] = useState(walletImage1)
  const setWalletImage1 = () => {
    setWalletImage(walletImage1)
  }
  const setWalletImage2 = () => {
    setWalletImage(walletImage2)
  }
  const setWalletImage3 = () => {
    setWalletImage(walletImage3)
  }
  const setWalletImage4 = () => {
    setWalletImage(walletImage4)
  }
  const setWalletImage5 = () => {
    setWalletImage(walletImage5)
  }
  return (
    <>
        <Navbar />
        <div className='wallet-page-1'>
          <div className="image-preview-section">
            <div className="wallet-image-1" onClick={setWalletImage1}>
              <img className='wallet-preview-images' src={walletImage1} alt="wallet" />
            </div>
            <div className="wallet-image-2" onClick={setWalletImage2}>
              <img className='wallet-preview-images' src={walletImage2} alt="wallet" />
            </div>
            <div className="wallet-image-3" onClick={setWalletImage3}>
              <img className='wallet-preview-images' src={walletImage3} alt="wallet" />
            </div>
            <div className="wallet-image-4" onClick={setWalletImage4}>
              <img className='wallet-preview-images' src={walletImage4} alt="wallet" />
            </div>
            <div className="wallet-image-5" onClick={setWalletImage5}>
              <img className='wallet-preview-images' src={walletImage5} alt="wallet" />
            </div>
          </div>
          <div className="image-show-case-section">
            <div className="main-image-container">
              <img className='wallet-page-main-image' src={walletImage} alt="wallet" />
            </div>
          </div>
          <div className="image-text-section">
            <div className="image-name-section">FM WALLET</div>
            <div className="wallet-price-section">$50.00</div>
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
                <div className="feature-2">RFID PROTECTION</div>
                <div className="feature-3">QUALITY</div>
                <div className="feature-4">VOLUME</div>
                <div className="features-text"></div>
              </div>
              <div className='wallet-specifications-section-2'>
                <div className="wallet-specifications-heading-2">SPECIFICATIONS</div>
                <div className='wallet-specifications-material'>MATERIAL</div>
                <div className="wallet-material-description">Leather with platnium accents</div>
                <div className='wallet-specifications-thickness'>THICKNESS</div>
                <div className="wallet-thickness-description">10 mm</div>
                <div className='wallet-specifications-dimensions'>DIMENSION</div>
                <div className="wallet-dimension-description">40 mm | 20 mm (L X W)</div>
                <div className='wallet-specifications-weight'>WEIGHT</div>
                <div className="wallet-weight-description">50 g</div>

              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Wallet