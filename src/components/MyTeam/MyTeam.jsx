import React from "react";
import data from "../Data/Data.js";
// import Boy from "../../assets/boy.png"

const MyTeam = () => {
  return (
    <div className="h-[100vh] w-full text-center text-white">
      <div className="h-[10vh]"></div>
      <div className="w-full h-[90vh] ">
        <h1 className="font-bold uppercase text-5xl ">My <span className="text-teal-500">T</span>eam</h1>
        <div className="flex mt-20 space-x-28 text-center justify-center rounded-2xl ">
          {data.map((item) => (
            <div
              className="h-[350px] w-[20%] border rounded-xl hover:shadow-[0_0_30px_15px_rgba(0,255,255,0.5)] hover:cursor-pointer  transition-transform  hover:scale-105  "
              key={item._id}
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name || "Image"}
                  className="h-[100px] w-[100px] object-cover ml-20 mt-4"
                />
              ) : (
                <p>No Image Available</p>
              )}
              <p className="font-bold text-xl">{item.name}</p>
              <p>{item.Edu}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTeam;
