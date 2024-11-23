import '../projectCss/Home.css'
import bgimage from '../images/fm-tech-bg.png'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { scroller } from 'react-scroll'

function Home() {
    const navigate = useNavigate()

    const navigateToWallet = (e) => {
        e.preventDefault()
        navigate(`/wallet`)
    }

    const navigateToPhoneCase = (e) => {
        e.preventDefault()
        navigate(`/phonecase`)
    }

    const navigateToKeyChain = (e) => {
        e.preventDefault()
        navigate(`/keychain`)
    }
    const scrollToProductPage = () => {
        scroller.scrollTo('page-2', {
            duration: 1500,
            smooth: true,
            offset: 0
        });
    }
  return (
    <>
        <Navbar/>
        <div className="page-1">
            <img className='bg-image' src={bgimage} alt="" />
            <div className='company-name-text'>
                <div className='discover-button' onClick={scrollToProductPage}>DISCOVER</div>
            </div>
        </div>

        <div className="page-2">
            <img className='bg-image-2' src={bgimage} alt="" />
            <div className="page-2-bg">
                
            </div>
            <div className='page-container'>
                <div className='product-container'>
                    <div className="wallet-section">
                        <div className='wallet-image' onClick={navigateToWallet}>
        
                        </div>
                        <div className='product-text'>FM Wallet</div>
                        <div className='buy-now-button' onClick={navigateToWallet}>Buy Now</div>
                    </div>
        
                    <div className="phone-case-section">
                        <div className="phone-case-image" onClick={navigateToPhoneCase}>
        
                        </div>
                        <div className='product-text'>FM Phone Case</div>
                        <div className='buy-now-button' onClick={navigateToPhoneCase}>Buy Now</div>
                    </div>
                    <div className="key-chain-section">
                        <div className="key-chain-image" onClick={navigateToKeyChain}>
        
                        </div>
                        <div className='product-text'>FM Key Chain</div>
                        <div className='buy-now-button' onClick={navigateToKeyChain}>Buy Now</div>
                    </div>
                </div>
                <div className="company-info">
                    <div className='company-info-text'>FM Technologies | Est. 2024 | Baltimore, MD</div>                    
                    <div className='company-contact-text'>jdfmtechnologies@gmail.com | 555-555-5555</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home