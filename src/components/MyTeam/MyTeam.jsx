import React from "react";

const MyTeam = () => {
  const data = [
    {
        "id": 1,
       "image":"C:/Users/Unique Computer/OneDrive/Desktop/coding/PortFollio/src/assets/boy.png",
        "name": "Harsh Gera",
        "Title":"MERN Stack Devloper",
        "Edu":" A MERN Stack Developer specializes in building web applications using MongoDB, Express.js, React, and Node.js.They handle both frontend and backend development, create APIs."
    },
    {
        "id": 2,
       "image":"C:/Users/Unique Computer/OneDrive/Desktop/coding/PortFollio/src/assets/woman.png",
        "name": "Nehe Verma",
        "Title":"Backend Devloper",
        "Edu":"  A Back-End Devloper focuses on server-side logic, databases,and API integration. They work with technologies like Node.js, databases, and server architecture to handle data storage, security."
    },
    {
        "id": 3,
       "image":"C:/Users/Unique Computer/OneDrive/Desktop/coding/PortFollio/src/assets/boy.png",
        "name": "Aman Kumar",
        "Title":"FrountEnd Devloper ",
        "Edu":" A Frontend Developer is responsible for creating the visual and interactive aspects of a website or web application.Frontend developers specialize in HTML, CSS, and JavaScript & React"
    }
]



  return (
    <div className="min-h-screen w-full text-center text-white">
      <div className="h-[10vh]"></div>
      <div className="w-full">
        <h1 className="font-bold uppercase text-4xl sm:text-5xl">My <span className="text-teal-500">T</span>eam</h1>
        <div className="flex flex-wrap  mt-10 justify-around space-y-10 lg:space-y-0 lg:space-x-10">
          {data.map((item) => (
            <div
              className="h-auto w-[80%] sm:w-[45%] md:w-[30%] space-y-6 lg:w-[40%] border rounded-xl hover:shadow-[0_0_30px_15px_rgba(0,255,255,0.5)] hover:cursor-pointer transition-transform hover:scale-105 mx-auto p-4 "
              key={item._id}
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name || "Image"}
                  className="h-[100px] w-[100px] object-cover mx-auto  mt-4"
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
