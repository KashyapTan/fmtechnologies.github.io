import { useState, useEffect } from 'react'

import logoDark from '../images/fm-tech-logo-light.webp'
import CartIcon from '../components/CartIcon'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const [cartCount, setCartCount] = useState(0)
    const navigate = useNavigate()

    const navigateToHome = (e) => {
        e.preventDefault()
        navigate(`/`)
    }

    const navigateToAbout = (e) => {
        e.preventDefault()
        navigate(`/about`)
    }

    const navigateToContact = (e) => {
        e.preventDefault()
        navigate(`/contact`)
    }
    const navigateToShoppingCart = (e) => {
        e.preventDefault()
        navigate(`/cart`)
    }

    useEffect(() => {
        // const cart = document.querySelector('.cart-icon')
        // var counter = 0
        // cart.addEventListener('click', () => {
        //     setCartCount(counter++)
        // })
        if (cartCount == 0){
            setCartCount(' ')
        }
    }, []) 

  return (
    <>
        <div className="navbar">
                <div className='logo-space' onClick={navigateToHome}>
                    <img className='fm-tech-logo' src={logoDark} alt="" />
                </div>

                <div className='blank-space'></div>

                <div className='navigation-options'>
                    <div className="about-button" onClick={navigateToAbout}>
                        About
                    </div>
                    <div className="contact-button" onClick={navigateToContact}>
                        Contact
                    </div>
                    <div className='cart-icon' onClick={navigateToShoppingCart}>
                        <CartIcon shoppingCartCount={cartCount}/>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Navbar