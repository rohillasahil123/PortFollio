import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Contect = () => {
  const [obj, setObj] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const handelInput = (e) => {
    const { name, value } = e.target;
    setObj({ ...obj, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const responce = axios.post("http://localhost:8010/formData", obj);
    if (!responce.status == 200) {
      toast.error("Don't save");
    } else {
      toast.success("Form submitted successfully");
    }
    console.log(obj);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center text-center">
      <div className="space-y-6">
        <h1 className="text-4xl sm:text-5xl uppercase text-white font-bold">
          Con<span className="text-green-500">t</span>act
        </h1>
        <div className="mt-10 flex flex-col md:flex-row md:space-x-10 w-full max-w-[1200px]">
          <div className="md:w-[50%] flex flex-col space-y-6">
            <input
              type="text"
              className="mt-3 bg-black border-b-2 border-teal-500 w-full h-[40px] text-gray-200 hover:cursor-pointer px-3"
              placeholder="Enter Your Name"
              value={obj.name}
              name="name"
              onChange={handelInput}
            />
            <input
              type="text"
              className="mt-3 bg-black border-b-2 border-teal-500 w-full h-[40px] text-gray-200 hover:cursor-pointer px-3"
              placeholder="Phone Number"
              value={obj.phoneNumber}
              name="phoneNumber"
              onChange={handelInput}
            />
            <input
              type="email"
              className="mt-3 bg-black border-b-2 border-teal-500 w-full h-[40px] text-gray-200 hover:cursor-pointer px-3"
              placeholder="Email"
              value={obj.email}
              name="email"
              onChange={handelInput}
            />
            <input
              type="text"
              className="mt-3 bg-black border-b-2 border-teal-500 w-full h-[40px] text-gray-200 hover:cursor-pointer px-3"
              placeholder="Subject"
              value={obj.subject}
              name="subject"
              onChange={handelInput}
            />
          </div>
          <div className="md:w-[50%] mt-6 md:mt-0">
            <textarea
              name="message"
              cols="40"
              rows="7"
              className="w-full bg-black text-gray-200 border border-teal-500 rounded-2xl p-3 hover:cursor-pointer"
              placeholder="Message"
              value={obj.message}
              onChange={handelInput}
            ></textarea>
            <button
              className="mt-4 h-[40px] w-[150px] bg-teal-500 border-teal-500 rounded-xl text-white"
              onClick={handelSubmit}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contect;
