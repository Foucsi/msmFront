import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Slide2({ position }) {
  const users = useSelector((state) => state.user.value);

  users.articles.map((e) => console.log(e.article.article));

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
      <p>Contenu : {users.username}</p>
      <p>Article : </p>
    </div>
  );
}
