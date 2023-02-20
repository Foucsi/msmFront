import React, { useState } from "react";

export default function AddArticle() {
  const [widgets, setWidgets] = useState([]);

  const handleOnDrag = (e, widgetType) => {
    e.dataTransfer.setData("widgetType", widgetType);
  };

  const handleOnDrop = (e) => {
    const widgetType = e.dataTransfer.getData("widgetType");
    setWidgets([...widgets, widgetType]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
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
      <div
        draggable
        onDragStart={(e) => handleOnDrag(e, "Numérique")}
        className="bg-colorPanneau text-white font-bold w-1/2 p-1 rounded-md"
      >
        Numérique
      </div>
    ),
    Choixtextuel: (
      <div
        draggable
        onDragStart={(e) => handleOnDrag(e, "Choixtextuel")}
        className="bg-colorCaisson text-white font-bold w-1/2 p-1 rounded-md"
      >
        Choix textuel
      </div>
    ),
    Casesàcocher: (
      <button
        draggable
        onDragStart={(e) => handleOnDrag(e, "Casesàcocher")}
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
      <div
        onDrop={handleOnDrop}
        onDragOver={handleDragOver}
        className=" flex items-center justify-center h-full w-1/2 border-2 border-colorBlue rounded-xl"
      >
        <textarea
          placeholder="Fourniture et pose ... "
          className="h-1/2 w-1/2 rounded-xl p-5"
        ></textarea>

        {widgets.map((wid) => {
          return <div>{listeOptions[wid]}</div>;
        })}
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
