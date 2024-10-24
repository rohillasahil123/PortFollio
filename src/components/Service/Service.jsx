import React from "react";
import frontend from "../../assets/Frontend.jpg";
import Backend from "../../assets/Backend.jpeg";
import software from "../../assets/Software Testing.jpeg";
import Webdesign from "../../assets/WebDesign.jpeg";

const Service = () => {
  return (
    <div className="h-auto w-full flex flex-col justify-center items-center text-center text-white">
      <div className="h-[10vh]"></div>
      <div className="h-auto w-full flex flex-col justify-center items-center space-y-9 md:space-x-10 md:space-y-10">
        <h1 className="text-4xl sm:text-5xl uppercase font-bold">
          Ser<span className="text-yellow-500">v</span>ice
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4">
          <div className="h-auto w-full border rounded-lg space-y-3 p-4">
            <h1 className="font-bold text-xl">Front-End Developer</h1>
            <img
              src={frontend}
              alt="Frontend Developer"
              className="h-[150px] w-[90%] rounded-xl mx-auto"
            />
            <p>
              A Frontend Developer is responsible for creating the visual and
              interactive aspects of a website or web application. They use
              technologies like HTML, CSS, JavaScript, and frameworks like React
              or Vue.js.
            </p>
          </div>

          <div className="h-auto w-full border rounded-lg space-y-3 p-4">
            <h1 className="font-bold text-xl">Back-End Developer</h1>
            <img
              src={Backend}
              alt="Backend Developer"
              className="h-[150px] w-[90%] rounded-xl mx-auto"
            />
            <p>
              A Backend Developer is responsible for server-side development,
              managing databases, APIs, and server logic using languages like
              Node.js, Python, Ruby, or PHP.
            </p>
          </div>

          <div className="h-auto w-full border rounded-lg space-y-3 p-4">
            <h1 className="font-bold text-xl">Software Testing</h1>
            <img
              src={software}
              alt="Software Testing"
              className="h-[150px] w-[90%] rounded-xl mx-auto"
            />
            <p>
              A Software Tester ensures that software applications function as
              intended by running tests, identifying bugs, and ensuring overall
              quality.
            </p>
          </div>

          <div className="h-auto w-full border rounded-lg space-y-3 p-4">
            <h1 className="font-bold text-xl">Web Design</h1>
            <img
              src={Webdesign}
              alt="Web Design"
              className="h-[150px] w-[90%] rounded-xl mx-auto"
            />
            <p>
              A Web Designer focuses on the aesthetics and usability of a
              website, using tools like Adobe XD, Figma, and CSS frameworks to
              create visually appealing interfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
