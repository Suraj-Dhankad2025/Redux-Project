import React from 'react'
import img1 from '../images/logo.png'
import {FaShoppingCart} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const {cart} = useSelector((state)=>state) 
  return (
    <nav className="">
    <div className='flex justify-between items-center h-20 max-w-6xl mx-auto '>
    <NavLink to='/'>
      <div className='relative right-60'>
      <img className="ms-[400px] h-[60px]" src={img1} alt="Logo" />
      </div>
    </NavLink>
    <div className='flex gap-2 items-center text-neutral-50 relative right-44'>
    <NavLink to='/'>
    <p>Home</p>
    </NavLink>
    <NavLink to='/cart'>
      <div className='relative text-lg'>
      <FaShoppingCart/>
      { cart.length>0 && 
        <span className='absolute -top-2 -right-3 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>{cart.length}</span>
      }
      </div>
    </NavLink>
    </div>
    </div>
    </nav>
  )
}

export default Navbar