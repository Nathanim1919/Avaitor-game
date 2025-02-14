import React from "react";
import CircleImage from "../assets/circle.jpeg"

const FlightAnimation: React.FC = () => {
  return <div className="relative w-full h-full bg-gray-800">
    <div className="absolute w-[200%] h-[200%] bg-blue-500" 
    style={{
      backgroundImage: `url(${CircleImage});
      background-size: cover;
      background-position: center;
      
      `}}
    ></div>
  </div>;
};

export default FlightAnimation;
