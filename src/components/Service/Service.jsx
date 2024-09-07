import React from "react";

const Service = () => {
  return (
    <>
      <div className="h-[700px] w-full flex flex-col  justify-center items-center text-center text-white">
        <div className="h-[10vh]" ></div>
        <div className="h-[70%] w-full flex flex-col justify-center items-center">
          <h1 className="text-5xl uppercase font-bold">Ser<span className="text-yellow-500">v</span>ice</h1>
          <div className="flex justify-around items-center mt-20 w-full">
            <div className="h-[500px] w-[40%] flex flex-col justify-between items-center">
              <div className="h-[180px] border w-[80%] rounded-lg transition-transform hover:scale-105 hover:bg-teal-500 hover:cursor-pointer  hover:shadow-[0_0_30px_15px_rgba(0,255,255,0.5)] ">
                <h1 className="text-xl font-semibold">Front-End Developer</h1>
                <p>
                  A Frontend Developer is responsible for creating the visual
                  and interactive aspects of a website or web application.
                  Frontend developers specialize in HTML, CSS, and JavaScript,
                  but they often use libraries and frameworks like React,
                  Angular, or Vue.js to build dynamic and responsive
                  applications.
                </p>
              </div>
              <div className="h-[180px] border w-[80%] rounded-lg hover:bg-green-500 hover:cursor-pointer  hover:shadow-[0_0_30px_15px_rgba(0,255,0,255)]">
                <h1 className="text-xl font-semibold">Back-End Developer</h1>
                <p>
                  A Back-End Developer focuses on server-side logic, databases,
                  and API integration, ensuring the functionality and
                  performance of web applications. They work with technologies
                  like Node.js, databases, and server architecture to handle
                  data storage, security, and business logic.
                </p>
              </div>
            </div>
            <div className="h-[500px] w-[40%] flex flex-col justify-between items-center">
            <div className="h-[180px] border w-[80%] rounded-lg transition-transform  hover:scale-105 hover:bg-orange-500 hover:cursor-pointer  hover:shadow-[0_0_30px_15px_rgba(255,165,0,0.5)]">
                <h1 className="text-xl font-semibold">Web-Design</h1>
                <p>
                  Web design involves creating the visual layout, user
                  interface, and overall aesthetic of websites. It combines
                  design principles, typography, and user experience (UX) to
                  craft responsive, attractive, and functional sites that engage
                  users and ensure easy navigation.
                </p>
              </div>
              <div className="h-[180px] border w-[80%] rounded-lg transition-transform hover:scale-105 hover:bg-yellow-500 hover:cursor-pointer  hover:shadow-[0_0_30px_15px_rgba(255,255,0,0.5)] ">
                <h1 className="text-xl font-semibold">Web-Teaster</h1>
                <p>
                  A Web Tester ensures the quality and functionality of websites
                  by performing manual and automated tests. They identify bugs,
                  verify responsiveness, and ensure cross-browser compatibility,
                  focusing on performance, security, and usability to deliver a
                  seamless user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
