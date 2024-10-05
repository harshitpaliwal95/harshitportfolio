"use client";
import React, { useEffect, useState } from "react";

const RadialBackground = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const update = (e: MouseEvent | TouchEvent) => {
      if (e instanceof MouseEvent) {
        // MouseEvent specific handling
        setX(e.clientX);
        setY(e.clientY);
      } else if (e instanceof TouchEvent) {
        // TouchEvent specific handling, use the first touch point
        const touch = e.touches[0];
        setX(touch.clientX);
        setY(touch.clientY);
      }
    };
    window.addEventListener("mousemove", update);
    window.addEventListener("touchmove", update);

    return () => {
      window.removeEventListener("mousemove", update);
      window.removeEventListener("touchmove", update);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style={{
        background: `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 70%)`,
      }}
    ></div>
  );
};

export default RadialBackground;
