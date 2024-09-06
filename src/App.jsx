import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Education from './components/Education/Education'
import Service from './components/Service/Service'
import MyTeam from './components/MyTeam/MyTeam'

const App = () => {
  return (
    <div className=' bg-black '>
     <Header/>  
     <Hero/>
     <Education/>
     <Service/>
     <MyTeam/>
    </div>
  )
}

export default App