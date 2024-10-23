import React from "react";

const Service = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center text-center text-white">
      <div className="h-[10vh]"></div>
      <div className="h-auto w-full flex flex-col justify-center items-center">
        <h1 className="text-4xl sm:text-5xl uppercase font-bold">
          Ser<span className="text-yellow-500">v</span>ice
        </h1>
        <div className="flex flex-wrap  md:mt-2 justify-around lg:space-x-10 md:space-y-10">
        <div className="flex flex-wrap justify-center items-center mt-10 space-y-10 sm:space-y-0 sm:space-x-10 lg:space-x-20 ">
          <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-[80%] sm:w-[45%] lg:w-[35%] flex flex-col justify-between items-center space-y-6 ">
            <div className="h-[180px] border w-[90%] sm:w-[80%] rounded-lg transition-transform hover:scale-105 hover:bg-teal-500 hover:cursor-pointer hover:shadow-[0_0_30px_15px_rgba(0,255,255,0.5)] p-4 ">
              <h1 className="text-xl font-semibold">Front-End Developer</h1>
              <p className="text-sm sm:text-base">
                A Frontend Developer is responsible for creating the visual and interactive aspects of a website or web application. They use technologies like HTML, CSS, JavaScript, and frameworks like React or Vue.js.
              </p>
            </div>
            <div className="h-[180px] border w-[90%] sm:w-[80%] rounded-lg transition-transform hover:scale-105 hover:bg-green-500 hover:cursor-pointer hover:shadow-[0_0_30px_15px_rgba(0,255,0,255)] p-4">
              <h1 className="text-xl font-semibold">Back-End Developer</h1>
              <p className="text-sm sm:text-base">
                A Back-End Developer focuses on server-side logic, databases, and APIs to ensure the functionality and performance of web applications, using technologies like Node.js and database systems.
              </p>
            </div>
          </div>

          <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-[80%] sm:w-[45%] lg:w-[35%] flex flex-col justify-between items-center space-y-6">
            <div className="h-[180px] border w-[90%] sm:w-[80%] rounded-lg transition-transform hover:scale-105 hover:bg-orange-500 hover:cursor-pointer hover:shadow-[0_0_30px_15px_rgba(255,165,0,0.5)] p-4">
              <h1 className="text-xl font-semibold">Web-Design</h1>
              <p className="text-sm sm:text-base">
                Web design involves crafting the visual layout, user interface, and aesthetic aspects of websites, with a focus on design principles and UX for responsive, functional sites.
              </p>
            </div>
            <div className="h-[180px] border w-[90%] sm:w-[80%] rounded-lg transition-transform hover:scale-105 hover:bg-yellow-500 hover:cursor-pointer hover:shadow-[0_0_30px_15px_rgba(255,255,0,0.5)] p-4">
              <h1 className="text-xl font-semibold">Web-Tester</h1>
              <p className="text-sm sm:text-base">
                A Web Tester ensures website quality by performing manual and automated tests to check for responsiveness, cross-browser compatibility, and bug-free performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Service;
