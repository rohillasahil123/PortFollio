import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuhandle, setMenuhandle] = useState(false)



  return (
    <div className='h-14 w-full bg-transparent text-white flex justify-between sm:justify-around items-center fixed backdrop-blur-xl px-4 sm:px-0'>
      <div>
        <div className='font-bold text-2xl sm:text-3xl hover:underline hover:cursor-pointer hover:text-shadow-teal'>
          <Link to='/'>Sahil <span className='text-teal-400'>Rohilla</span></Link>
        </div>
      </div>
      <div className='hidden sm:flex h-full space-x-6 md:space-x-12 text-base sm:text-lg items-center'>
        <div className='hover:underline hover:cursor-pointer hover:text-teal-400'>
          <Link to='/'>Home</Link>
        </div>
        <div className='hover:underline hover:cursor-pointer hover:text-teal-400'>
          <Link to='/education'>Education</Link>
        </div>
        <div className='hover:underline hover:cursor-pointer hover:text-teal-400'>
        <Link to='/service'>Service</Link>
        </div>  
        <div className='hover:underline hover:cursor-pointer hover:text-teal-400'>
          <Link to='/myteam'>myteamCoder</Link>
        </div>
        <div className='hover:underline hover:cursor-pointer hover:text-teal-400'>
          <Link to='/project'>Project</Link>
        </div>
        <div className='hover:underline hover:cursor-pointer hover:text-teal-400'>
          <Link to='/contect'>Contact</Link>
        </div>
        {menuhandle ? <FaTimes /> : <FaBars />}
       
      </div>
      <div className='sm:hidden'>
        <button className='text-teal-400 hover:text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Header
