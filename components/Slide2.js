import React from "react";

export default function Slide2({ position }) {
  const slideStyle = {
    backgroundColor: "green",
    color: "#333",
    padding: "1rem",
    borderRadius: "0.5rem",
  };
  return (
    <div
      className={`${
        position === 1
          ? "opacity-100"
          : "opacity-0 transition-opacity duration-1000 ease-in-out"
      }`}
      style={slideStyle}
    >
      Slide2
    </div>
  );
}
