import React from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import ShoppingCart from './pages/ShoppingCart.jsx'
import Wallet from './pages/Wallet.jsx'
import PhoneCase from './pages/PhoneCase.jsx'
import KeyChain from './pages/KeyChain.jsx'
import Loader from './pages/Loader.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/fmtechnologies/'>
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/phonecase" element={<PhoneCase />} />
        <Route path="/keychain" element={<KeyChain />} />
        {/* <Route path="/loader" element={<Loader />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)