import React from 'react'
import './Navbar.css'
import logo from '../../../../Frontend/src/assets/coep-removebg-preview.png'
import profile from '../../assets/profile.jpeg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className = "logo"src={logo}></img>
       <h1 className='text'> Notice Section </h1>
      <img className = "profile" src={profile}></img>
    </div>
  )
}

export default Navbar;