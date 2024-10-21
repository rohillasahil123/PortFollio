import React from "react";
import data from "../Data/Data.js";

const MyTeam = () => {
  return (
    <div className="min-h-screen w-full text-center text-white">
      <div className="h-[10vh]"></div>
      <div className="w-full">
        <h1 className="font-bold uppercase text-4xl sm:text-5xl">My <span className="text-teal-500">T</span>eam</h1>
        <div className="flex flex-wrap mt-10 justify-center space-y-10 lg:space-y-0 lg:space-x-10">
          {data.map((item) => (
            <div
              className="h-[350px] w-[80%] sm:w-[45%] md:w-[30%] lg:w-[20%] border rounded-xl hover:shadow-[0_0_30px_15px_rgba(0,255,255,0.5)] hover:cursor-pointer transition-transform hover:scale-105 p-4 mx-auto"
              key={item._id}
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name || "Image"}
                  className="h-[100px] w-[100px] object-cover mx-auto mt-4"
                />
              ) : (
                <p>No Image Available</p>
              )}
              <p className="font-bold text-xl mt-4">{item.name}</p>
              <p>{item.Edu}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTeam;
