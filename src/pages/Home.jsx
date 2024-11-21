import '../projectCss/Home.css'

import bgimage from '../images/fm-tech.webp'
// import logoDark from '../images/fm-tech-logo-light.webp'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <>

        <div className="page-1">
            <img className='bg-image' src={bgimage} alt="" />
           
            <Navbar />
            {/* <div className='company-name-text'>
                FM Technologies
            </div> */}
        </div>

        

        <div className="page-2">
            <div className="wallet-section">
                <div className='wallet-image'>

                </div>
                <div className='product-text'>FM Wallet</div>
                <div className='buy-now-button'>Buy Now</div>
            </div>

            <div className="phone-case-section">
                <div className="phone-case-image">

                </div>
                <div className='product-text'>FM Phone Case</div>
                <div className='buy-now-button'>Buy Now</div>
            </div>
            <div className="key-chain-section">
                <div className="key-chain-image">

                </div>
                <div className='product-text'>FM Key Chain</div>
                <div className='buy-now-button'>Buy Now</div>
            </div>
        </div>
    </>
  )
}

export default Home