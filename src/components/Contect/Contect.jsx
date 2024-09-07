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
     toast.error("Dont save")
    }else{
      toast.success("Form submitted successfully");
    }
   console.log(obj);
  };

  return (
    <div className="h-[100vh] w-full items-center text-center">
        <div className="h-[10vh]"></div>
      <h1 className="text-5xl uppercase text-white font-bold">Con<span className="text-green-500">t</span>act</h1>
      <div className="h-[85vh] w-full flex mt-20">
        <div className="w-[50%] h-[80%] items-center text-center flex flex-col space-y-8">
          <input
            type="text"
            className="mt-3 bg-black border-b-2 border-teal-500 w-[300px] h-[30px] text-gray-200 hover:cursor-pointer"
            placeholder="Enter Your Name"
            value={obj.name}
            name="name"
            onChange={handelInput}
          />
          <input
            type="text"
            className="mt-3 bg-black border-b-2 border-teal-500 w-[300px] h-[30px] text-gray-200 hover:cursor-pointer"
            placeholder="Phone Number"
            value={obj.phoneNumber}
            name="phoneNumber"
            onChange={handelInput}
          />
          <input
            type="text"
            className="mt-3 bg-black border-b-2 border-teal-500 w-[300px] h-[30px] text-gray-200 hover:cursor-pointer"
            placeholder="Email"
            value={obj.email}
            name="email"
            onChange={handelInput}
          />
          <input
            type="text"
            className="mt-3 bg-black border-b-2 border-teal-500 w-[300px] h-[30px] text-gray-200 hover:cursor-pointer"
            placeholder="Subject"
            value={obj.subject}
            name="subject"
            onChange={handelInput}
          />
        </div>
        <div className="w-[50%] h-[80%]">
          <textarea
            name="message"
            cols="40"
            rows="7"
            className="bg-black text-gray-200 border border-teal-500 rounded-2xl mt-8 hover:cursor-pointer"
            placeholder="Message"
            value={obj.message}
            onChange={handelInput}
          ></textarea>{" "}
          <br />
          <button
            className="h-[40px] w-[150px] bg-teal-500 border-teal-500 rounded-xl text-white"
            onClick={handelSubmit}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contect;
