import React from 'react'
import img1 from '../images/logo.png'
import {FaShoppingCart} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='bg-blue-500'>
    <div className='flex flex-row justify-between'>
    <NavLink to='/'>
      <div>
      <img className="ms-[400px] h-[60px]" src={img1} alt="Logo" />
      </div>
    </NavLink>
    <div>
    <NavLink to='/'>
    <p>Home</p>
    </NavLink>
    <NavLink to='/cart'>
      <div>
      <FaShoppingCart/>
      </div>
    </NavLink>
    </div>
    </div>
    </div>
  )
}

export default Navbar