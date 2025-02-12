import React, { useEffect, useState } from 'react';
import PlaneImage from "../assets/plane.png";
import { Clouds } from './cloud';

interface FlightAnimationProps {
    multiplier: number;
}

const FlightAnimation: React.FC<FlightAnimationProps> = ({ multiplier }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Tracks the plane's position (x and y)

  useEffect(() => {
    // Update the plane's position based on the multiplier
    const maxMultiplier = 10; // Maximum multiplier for scaling
    const scaledMultiplier = Math.min(multiplier, maxMultiplier);

    // Calculate diagonal movement
    const newX = scaledMultiplier * 10; // Move horizontally to the right
    const newY = -scaledMultiplier * 10; // Move vertically upward

    setPosition({ x: newX, y: newY });
  }, [multiplier]);

  return (
    <div className="relative w-full h-96 bg-blue-200 overflow-hidden">
      <Clouds />

      <div
        className="absolute bottom-0 left-1/2 transform transition-all duration-500"
        style={{
          transform: `translate(${position.x}%, ${position.y}%) rotate(45deg)`, // Diagonal movement and rotation
        }}
      >
        <img
          src={PlaneImage}
          alt="Plane"
          className="w-16 h-16 transform -rotate-90"
        />
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-500"></div>
    </div>
  );
};

export default FlightAnimation;