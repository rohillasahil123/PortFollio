import React from 'react'
import Header from './components/Header/Header'
import Education from './components/Education/Education'
import Service from './components/Service/Service'
import MyTeam from './components/MyTeam/MyTeam'
import Contect from './components/Contect/Contect'
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import HomeNew from './components/Home/HomeNew'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className=' bg-black '>
    <BrowserRouter>
     <Header/>  
     <Routes>
      <Route path="/" element={<HomeNew/>} />  
     <Route path="/education" element={<Education/>} />
     <Route path="/service" element={<Service/>} />
     <Route path="/myteam" element={<MyTeam/>} />
     <Route path="/contect" element={<Contect/>} />
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  )
}

export default App