import React from "react";

const Education = () => {
  return (
    <>
      <div className="text-white min-h-screen w-full mx-auto items-center flex flex-col">
        <div className="h-[10vh]"></div>
        <h1 className="text-4xl sm:text-5xl lg:text-[60px] uppercase font-bold">
          E<span className="text-orange-500">d</span>ucati
          <span className="text-orange-500">o</span>n
        </h1>
        <div className="h-4 sm:h-6 w-1 bg-teal-500 mt-4"></div>
        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[20px] border-t-teal-500"></div>

        {/* High School Section */}
        <div className="border h-auto sm:h-[80px] w-[90%] md:w-[70%] text-center mt-6 p-4 rounded-lg hover:cursor-pointer hover:shadow-[0_0_30px_15px_rgba(0,255,255,0.5)] hover:text-teal-500 transition-transform hover:scale-105">
          <h1 className="font-semibold text-xl">High School</h1>
          <p className="text-sm sm:text-base">
            I have done my high school from Government Senior Secondary School LakhanMajra in 2018.
          </p>
        </div>

        <div className="h-4 sm:h-6 mt-4 w-1 bg-teal-500"></div>
        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[20px] border-t-teal-500"></div>

        {/* Intermediate Section */}
        <div className="border h-auto sm:h-[80px] w-[90%] md:w-[70%] text-center mt-6 p-4 rounded-lg hover:cursor-pointer hover:shadow-[0_0_30px_15px_rgba(0,255,255,0.5)] hover:text-teal-500 transition-transform hover:scale-105">
          <h1 className="font-semibold text-xl">Intermediate</h1>
          <p className="text-sm sm:text-base">
            I have done my 12th in Computer Science from Government Senior Secondary School LakhanMajra in 2020.
          </p>
        </div>

        <div className="h-4 sm:h-6 mt-4 w-1 bg-teal-500"></div>
        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[20px] border-t-teal-500"></div>

        {/* College Section */}
        <div className="border h-auto sm:h-[80px] w-[90%] md:w-[70%] text-center mt-6 p-4 rounded-lg hover:cursor-pointer hover:shadow-[0_0_30px_15px_rgba(0,255,255,0.5)] hover:text-teal-500 transition-transform hover:scale-105">
          <h1 className="font-semibold text-xl">College</h1>
          <p className="text-sm sm:text-base">
            I have done my Diploma from Government Polytechnic Meham in 2023.
          </p>
        </div>

        <div className="h-4 sm:h-6 mt-4 w-1 bg-teal-500"></div>
        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[20px] border-t-teal-500"></div>

        {/* Skills Section */}
        <div className="border h-auto sm:h-[80px] w-[90%] md:w-[70%] text-center mt-6 p-4 rounded-lg hover:cursor-pointer hover:shadow-[0_0_30px_15px_rgba(0,255,255,0.5)] hover:text-teal-500 transition-transform hover:scale-105">
          <h1 className="font-semibold text-xl">Skills</h1>
          <p className="text-sm sm:text-base">
            <span className="text-orange-500">HTML, </span>
            <span className="text-yellow-500">JavaScript, </span>
            <span className="text-blue-800">TailwindCSS, </span>
            <span className="text-sky-500">React.js, </span>
            <span className="text-green-600">Node.js, </span>
            <span className="text-lime-500">API Integration, </span>Bootstrap,{" "}
            <span className="text-orange-800">Git, GitHub</span> (2023-2024).
          </p>
        </div>
      </div>
    </>
  );
};

export default Education;
