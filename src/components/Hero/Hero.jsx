import React, { useEffect , useState } from "react";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { Link } from 'react-router-dom'
import sahilPhoto from "../../assets/Sahil.png";

const Hero = () => {
  const devloperTool = [
    {
      devloper: "Full Stack Devloper",
    },
    {
      devloper: "MERN Stack Devloper",
    },
    {
      devloper: "Back-End Devloper",
    },
    {
      devloper: "Front-End Devloper",
    },
  ];

  const [slider, setSlider] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlider(slider === 0 ? devloperTool.length - 1 : slider - 1);
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [slider]);

  return (
    <>
      <div className="h-[80px]"></div>
      <div className="flex justify-around h-[90vh] w-full text-white ">
        <div className="w-[40%] h-[80%] ml-12 ">
          <div>
            <h1 className="text-5xl font-semibold">Hi, it's </h1>
            <br />
            <h1 className="text-5xl font-semibold text-teal-500 hover:cursor-pointer hover:text-shadow-teal">
              {" "}
              Sahil
            </h1>{" "}
            <br />
            <h1 className="text-2xl font-bold">
              I'm a
              {devloperTool.map((items, i) => (
                <span key={i} className={`${slider === i ? "block" : "hidden"} text-teal-500`}>
                  <span>{items.devloper}</span>
                </span>
              ))}
            </h1>
          </div>
          <div className="mt-3">
            <p>
              My name is Sahil kumar. i am resident of village LakhanMajra{" "}
              <br /> near Rohtak. And I have completed my studies from G.P.Meham{" "}
              <br />
              and Currently completely{" "}
              <span className="text-teal-500">MERN STACK</span> From Coding
              Clesses.
            </p>
          </div>
          <div className="mt-5 flex space-x-3">
            <div className="p-2 rounded-full hover:shadow-teal hover:text-teal-500 transition duration-300 hover:cursor-pointer">
              <a
                href="https://www.linkedin.com/in/sahil-rohilla-/"
                target="blank"
              >
                {" "}
                <TiSocialLinkedinCircular className="h-[40px] w-[40px]" />
              </a>
            </div>
            <div className="p-2 rounded-full hover:shadow-green hover:text-green-500 transition duration-300 hover:cursor-pointer">
              <a href="https://github.com/rohillasahil123" target="blank">
                {" "}
                <BsGithub className="h-[40px] w-[40px] " />{" "}
              </a>
            </div>
            <div className="p-2 rounded-full hover:shadow-rose  hover:text-rose-500 transition duration-300 hover:cursor-pointer">
              <a
                href="https://www.instagram.com/b_a_d_b_o_y__7_0_4_/"
                target="blank"
              >
                {" "}
                <FaInstagram className="h-[40px] w-[40px] " />{" "}
              </a>
            </div>
            <div className="p-2 rounded-full hover:shadow-lime  hover:text-lime-500 transition duration-300 hover:cursor-pointer">
              <CiTwitter className="h-[40px] w-[40px] " />
            </div>
          </div>

          <button className="hover:bg-teal-500 border-white text-teal-500 hover:shadow-teal  hover:text-black  mt-4 h-10 w-20 text-[18px] rounded-xl">
            <Link to='/contect'>Contect</Link>
          </button>
        </div>
        <div className="bg-teal-600 h-[70%] w-[30%] rounded-[100%]  hover:cursor-pointer hover:shadow-[0_0_30px_15px_rgba(0,255,255,0.6)] items-center flex justify-center">
          <div className="h-[100%] w-[100%] rounded-[80%] overflow-hidden ">
            <img
              src={sahilPhoto}
              alt=""
              srcset=""
              className="object-cover h-[400px] ml-9 mt-5 "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
