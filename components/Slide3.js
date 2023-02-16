import React from "react";

export default function Slide3({ position }) {
  const slideStyle = {
    backgroundColor: "red",
    color: "#333",
    padding: "1rem",
    borderRadius: "0.5rem",
  };
  return (
    <div
      style={slideStyle}
      className={`${
        position === 2
          ? "opacity-100"
          : "opacity-0 transition-opacity duration-1000 ease-in-out"
      } transition-opacity`}
    >
      Slide3
    </div>
  );
}
