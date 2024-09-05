import React from 'react'

const Header = () => {
  return (
    <div className='h-14 w-full  bg-transparent  text-white flex justify-around  items-center fixed  backdrop-blur-xl  '>
      <div>
        <div className='font-bold text-3xl hover:underline hover:cursor-pointer hover:text-shadow-teal  '>Sahil <span className=' text-teal-400 '>Rohilla</span></div>
      </div>
      <div className='flex h-full space-x-12 text-lg items-center '>
       <div className='hover:underline hover:cursor-pointer  hover:text-teal-400'>Home</div>
        <div className='hover:underline hover:cursor-pointer  hover:text-teal-400'>Education</div>  
       <div className='hover:underline hover:cursor-pointer  hover:text-teal-400'>Service</div>   
       <div className='hover:underline hover:cursor-pointer  hover:text-teal-400'> MyTeamCoder </div>
       <div className='hover:underline hover:cursor-pointer  hover:text-teal-400'> Contect </div> 
      </div>
    </div>
  )
}

export default Header