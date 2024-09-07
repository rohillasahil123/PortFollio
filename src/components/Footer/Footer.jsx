import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='text-center h-[12vh] w-full items-center  justify-center flex backdrop-blur-xl'>
    <div className='flex h-full space-x-12 text-lg items-center text-white '>
    <div className='hover:underline hover:cursor-pointer  hover:text-teal-400'><Link to='/'>Home</Link>  </div>
     <div className='hover:underline hover:cursor-pointer  hover:text-teal-400'><Link to='/education'>Education</Link></div>  
    <div className='hover:underline hover:cursor-pointer  hover:text-teal-400'> <Link to='/service'>Service</Link></div>   
    <div className='hover:underline hover:cursor-pointer  hover:text-teal-400'> <Link to='/myteam'>MyTeamCoder</Link> </div>
    <div className='hover:underline hover:cursor-pointer  hover:text-teal-400'> <Link to='/contect'>Contect</Link> </div> 
   </div>
   </div>
  )
}

export default Footer