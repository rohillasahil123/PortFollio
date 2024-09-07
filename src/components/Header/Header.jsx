import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='h-14 w-full  bg-transparent  text-white flex justify-around  items-center fixed  backdrop-blur-xl  '>
      <div>
        <div className='font-bold text-3xl hover:underline hover:cursor-pointer hover:text-shadow-teal  '> <Link to='/' >Sahil <span className=' text-teal-400 '>Rohilla</span></Link></div>
      </div>
      <div className='flex h-full space-x-12 text-lg items-center '>
       <div className='hover:underline hover:cursor-pointer  hover:text-teal-400'><Link to='/'>Home</Link>  </div>
        <div className='hover:underline hover:cursor-pointer  hover:text-teal-400'><Link to='/education'>Education</Link></div>  
       <div className='hover:underline hover:cursor-pointer  hover:text-teal-400'> <Link to='/service'>Service</Link></div>   
       <div className='hover:underline hover:cursor-pointer  hover:text-teal-400'> <Link to='/myteam'>MyTeamCoder</Link> </div>
       <div className='hover:underline hover:cursor-pointer  hover:text-teal-400'> <Link to='/contect'>Contect</Link> </div> 
      </div>
    </div>
  )
}

export default Header