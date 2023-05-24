import { getCartItems } from '@/utils/cartItems'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BiUser, BiLogIn, BiCartAlt } from 'react-icons/bi'
import { GiArchiveRegister } from 'react-icons/gi'
export default function Header() {

  const [cart, setCart] = useState(0);
  useEffect(() => {
    setInterval(() => {
      const cartItems = getCartItems();
      setCart(cartItems.length)
    }, 1000)
  }, [])
  return (
    <>
      {/** Navbar1 - Profile */}
      <nav className="navbar navbar-top-bg text-white d-node d-md-block">
        <div className="container-md">
          <i className='nav-item navbar-nav'>HOME DELIVERY & RETURN POLICY AVAILABLE*</i>
          <i className='nav-item navbar-nav'>Join today and get estonishing bonuses and prizes*</i>
          <div className='dropdown p-0'>
            <span className='dropdown-toggle d-flex align-items-center' type='button' data-bs-toggle='dropdown' aria-expanded='false'><BiUser />Profile</span>
            <ul className='dropdown-menu'>
              <li><Link className='dropdown-item' href='#'><GiArchiveRegister />Register</Link></li>
              <li><Link className='dropdown-item' href='#'><BiLogIn />Login</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      {/** Navbar2 Logo - Navbar------------------------*/}
      <nav className="navbar navbar-bg text-white">
        <div className="container-md">
          <Link href="/" ><Image src="/images/logo.jpg" width={250} height={80} alt="logo" /></Link>
          <Link href="/cart" className='nav-item nav-link d-flex gap-1 align-items-center text-white'>
            <span className='p-1 rounded-circle navbar-top-bg'><BiCartAlt size={29} className='pb-1' /></span>
            {cart} Get Items Now
          </Link>
        </div>
      </nav>

      {/** Navbar3 - Menu */}
      <nav className="navbar navbar-expand-lg shadow-sm mb-2 rounded container px-2">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <Link href="/" className='nav-item nav-link active txtColor'>Store</Link>
            <Link href="/about" className='nav-item nav-link active txtColor'>About Us</Link>
            <Link href="/support" className='nav-item nav-link active txtColor'>Support</Link>
            <Link href="/contact" className='nav-item nav-link active txtColor'>Contact Us</Link>
            <Link href="/privacy" className='nav-item nav-link active txtColor'>Privacy Policy</Link>
          </div>
        </div>
      </nav>
    </>
  )
} 
