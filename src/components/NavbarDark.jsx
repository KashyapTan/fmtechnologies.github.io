import { useState, useEffect } from 'react'

import logoDark from '../images/fm-tech-logo-dark.webp'
import CartIcon from '../components/CartIcon'
import { useNavigate } from 'react-router-dom'
import '../projectCss/NavbarDark.css'

function NavbarDark() {
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
        <div className="navbar-dark">
                <div className='logo-space-dark' onClick={navigateToHome}>
                    <img className='fm-tech-logo-dark' src={logoDark} alt="" />
                </div>

                {/* <div className='blank-space'></div> */}

                <div className='navigation-options-dark'>
                    <div className="about-button-dark" onClick={navigateToAbout}>
                        About
                    </div>
                    <div className="contact-button-dark" onClick={navigateToContact}>
                        Contact
                    </div>
                    <div className='cart-icon-dark' onClick={navigateToShoppingCart}>
                        <CartIcon shoppingCartCount={cartCount} cartColor={'black'}/>
                    </div>
                </div>
            </div>
    </>
  )
}

export default NavbarDark