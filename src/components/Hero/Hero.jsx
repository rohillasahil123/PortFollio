import React, { useEffect, useState } from "react";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { Link } from "react-router-dom";
import sahilPhoto from "../../assets/Sahil1.png";

const Hero = () => {
  const devloperTool = [
    { devloper: "Full Stack Developer" },
    { devloper: "MERN Stack Developer" },
    { devloper: "Back-End Developer" },
    { devloper: "Front-End Developer" },
  ];

  const [slider, setSlider] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlider(slider === 0 ? devloperTool.length - 1 : slider - 1);
    }, 2000);
    return () => clearInterval(timer);
  }, [slider]);

  return (
    <>
      <div className="h-[80px]"></div>
      <div className="flex flex-col lg:flex-row justify-around h-auto w-full text-white p-5 lg:p-0">
        <div className="lg:w-[40%] w-full h-auto lg:h-[80%] ml-0 lg:ml-12">
          <div>
            <h1 className="text-4xl lg:text-5xl font-semibold">Hi, it's </h1>
            <br />
            <h1 className="text-4xl lg:text-5xl font-semibold text-teal-500 hover:cursor-pointer hover:text-shadow-teal">
              {" "}
              Sahil
            </h1>{" "}
            <br />
            <h1 className="text-lg lg:text-2xl font-bold">
              I'm a{" "}
              {devloperTool.map((items, i) => (
                <span
                  key={i}
                  className={`${slider === i ? "block" : "hidden"} text-teal-500`}
                >
                  <span>{items.devloper}</span>
                </span>
              ))}
            </h1>
          </div>
          <div className="mt-3 text-sm lg:text-base">
            <p>
              My name is Sahil kumar. I am a resident of village LakhanMajra
              <br /> near Rohtak. And I have completed my studies from G.P.Meham
              <br />
              and currently completing{" "}
              <span className="text-teal-500">MERN STACK</span> from Coding
              Classes.
            </p>
          </div>
          <div className="mt-5 flex space-x-3">
            <div className="p-2 rounded-full hover:shadow-teal hover:text-teal-500 transition duration-300 hover:cursor-pointer">
              <a
                href="https://www.linkedin.com/in/sahil-rohilla-/"
                target="blank"
              >
                <TiSocialLinkedinCircular className="h-[30px] lg:h-[40px] w-[30px] lg:w-[40px]" />
              </a>
            </div>
            <div className="p-2 rounded-full hover:shadow-green hover:text-green-500 transition duration-300 hover:cursor-pointer">
              <a href="https://github.com/rohillasahil123" target="blank">
                <BsGithub className="h-[30px] lg:h-[40px] w-[30px] lg:w-[40px]" />
              </a>
            </div>
            <div className="p-2 rounded-full hover:shadow-rose hover:text-rose-500 transition duration-300 hover:cursor-pointer">
              <a
                href="https://www.instagram.com/b_a_d_b_o_y__7_0_4_/"
                target="blank"
              >
                <FaInstagram className="h-[30px] lg:h-[40px] w-[30px] lg:w-[40px]" />
              </a>
            </div>
            <div className="p-2 rounded-full hover:shadow-lime hover:text-lime-500 transition duration-300 hover:cursor-pointer">
              <CiTwitter className="h-[30px] lg:h-[40px] w-[30px] lg:w-[40px]" />
            </div>
          </div>

          <button className="hover:bg-teal-500 border-white text-teal-500 hover:shadow-teal hover:text-black mt-4 h-8 lg:h-10 w-20 text-[16px] lg:text-[18px] rounded-xl">
            <Link to="/contect">Contact</Link>
          </button>
        </div>
        <div className="bg-teal-600 h-[40vh] w-[40vh] lg:h-[70%] lg:w-[30%] rounded-full hover:cursor-pointer hover:shadow-[0_0_30px_15px_rgba(0,255,255,0.6)] items-center flex justify-center mt-10 lg:mt-0 mx-auto lg:mx-0">
          <div className="h-[90%] w-[90%] rounded-full overflow-hidden">
            <img
              src={sahilPhoto}
              alt=""
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;