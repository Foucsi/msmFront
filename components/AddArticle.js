import React, { useState } from "react";

export default function AddArticle() {
  const [dragging, setDragging] = useState(false);

  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const button = document.getElementById(data);
    const textarea = document.getElementById("longtext");
    if (textarea && button) {
      // vérifie si textarea et button ne sont pas nuls
      textarea.value += button.innerText + " ";
    }
  };

  const handleDragEnd = () => {
    // nothing to do here
  };

  const options = [
    "Numérique",
    "Choixtextuel",
    "Casesàcocher",
    "Référencebois",
    "Accessoires",
    "Suppléments",
  ];

  const listeOptions = {
    Numérique: (
      <button
        draggable
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onDragEnd={handleDragEnd}
        className="bg-colorPanneau text-white font-bold w-1/2 p-1 rounded-md"
      >
        Numérique
      </button>
    ),
    Choixtextuel: (
      <button
        draggable
        className="bg-colorCaisson text-white font-bold w-1/2 p-1 rounded-md"
      >
        Choix textuel
      </button>
    ),
    Casesàcocher: (
      <button
        draggable
        className="bg-colorHabillage text-white font-bold w-1/2 p-1 rounded-md"
      >
        Cases à cocher
      </button>
    ),
    Référencebois: (
      <button
        draggable
        className="bg-colorViolet text-white font-bold w-1/2 p-1 rounded-md"
      >
        Référence bois
      </button>
    ),
    Accessoires: (
      <button
        draggable
        className="bg-colorViolet text-white font-bold w-1/2 p-1 rounded-md"
      >
        Accessoires
      </button>
    ),
    Suppléments: (
      <button
        draggable
        className="bg-colorViolet text-white font-bold w-1/2 p-1 rounded-md"
      >
        Suppléments
      </button>
    ),
  };

  return (
    <div className="flex justify-evenly h-full w-full p-5">
      <div className=" flex items-center justify-center h-full w-1/2 border-2 border-colorBlue rounded-xl">
        <textarea
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          placeholder="Fourniture et pose ... "
          className="h-full w-full rounded-xl p-5"
          id="longtext"
          name="longtext"
        ></textarea>
      </div>
      <div className="flex flex-col items-center justify-evenly h-full w-1/3 border-2">
        {options.map((opt, index) => {
          return (
            <div className="flex w-full justify-center" key={index}>
              {listeOptions[opt]}
            </div>
          );
        })}
      </div>
    </div>
  );
}
