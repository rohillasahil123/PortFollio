import React from 'react';
import Header from './components/Header/Header';
import Education from './components/Education/Education';
import Service from './components/Service/Service';
import MyTeam from './components/MyTeam/MyTeam';
import Contect from './components/Contect/Contect';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeNew from './components/Home/HomeNew';
import Footer from './components/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className='min-h-screen bg-black flex flex-col justify-between'>
      <BrowserRouter>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomeNew />} />
            <Route path="/education" element={<Education />} />
            <Route path="/service" element={<Service />} />
            <Route path="/myteam" element={<MyTeam />} />
            <Route path="/contect" element={<Contect />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
};

export default App;
