import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='text-center h-auto w-full items-center justify-center flex backdrop-blur-xl'>
      <div className='flex flex-col sm:flex-row h-full space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-12 text-base sm:text-lg items-center text-white'>
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
          <Link to='/myteam'>MyTeamCoder</Link>
        </div>
        <div className='hover:underline hover:cursor-pointer hover:text-teal-400'>
          <Link to='/contect'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
