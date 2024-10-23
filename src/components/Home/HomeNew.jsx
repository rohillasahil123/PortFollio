import React from 'react';
import Education from '../Education/Education';
import Service from '../Service/Service';
import MyTeam from '../MyTeam/MyTeam';
import Contect from '../Contect/Contect';
import Hero from '../Hero/Hero';
import Project from '../Project/Project';

const HomeNew = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="pb-10">
        <Hero />
      </div>

      {/* Education Section */}
      <div className="pb-10">
        <Education />
      </div>

      {/* Service Section */}
      <div className="pb-10">
        <Service />
      </div>

      {/* MyTeam Section */}
      <div className="pb-10">
        <MyTeam />
      </div>

      <div className="pb-10">
        <Project />
      </div>

      {/* Contect Section */}
      <div className="pb-10">
        <Contect />
      </div>
  
    </div>
  );
};

export default HomeNew;
