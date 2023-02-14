import React from "react";
import { BsBox } from "react-icons";

export default function TestBox() {
  const articles = ["Caissons", "Panneaux", "Habillages", "Personnalisé"];
  return (
    <div className="flex items-center justify-around h-full w-full">
      {articles.map((art, index) => {
        return (
          <div
            className="flex items-center justify-center border-2 h-72 w-48 rounded cursor-pointer"
            key={index}
          >
            {art}
          </div>
        );
      })}
    </div>
  );
}
