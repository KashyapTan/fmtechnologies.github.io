import React from 'react'

function CartIcon({ shoppingCartCount }) {
  return (
    <>
        <svg width="43" height="38" viewBox="0 0 531 381" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="20" width="20" height="60" transform="rotate(-90 0 20)" fill="white"/>
            <rect x="40" y="3.47296" width="20" height="300" transform="rotate(-10 40 3.47296)" fill="white"/>
            <path d="M511 60H531V295.16H511V60Z" fill="white"/>
            <rect x="93" y="299" width="20" height="438" transform="rotate(-90 93 299)" fill="white"/>
            <rect x="60" y="80" width="20" height="471" transform="rotate(-90 60 80)" fill="white"/>
            <circle cx="169" cy="346" r="35" fill="white"/>
            <circle cx="454" cy="346" r="35" fill="white"/>
            <text 
            id="cart-count"
            x="303" 
            y="190" 
            fill="white"
            fontFamily="Montserrat" 
            fontSize="180"           
            textAnchor="middle"     
            dominantBaseline="middle"
            >
                {shoppingCartCount}
            </text>
        </svg>
    </>
  )
}

export default CartIcon