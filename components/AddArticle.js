import React, { useState } from "react";
import { GoSettings } from "react-icons/go";

export default function AddArticle() {
  const [widgets, setWidgets] = useState([]);

  const handleOnDrag = (e, widgetType) => {
    e.dataTransfer.setData("widgetType", widgetType);
    e.target.classList.add("dragging");
  };

  /*------------------------------------------------------------------------------------------------ */
  // ci dessous les fonctions permettant le drag and drop dans le textarea de la creation du produit
  const handleTextareaDragOver = (e) => {
    e.preventDefault();
  };

  const handleTextareaDrop = (e) => {
    const widgetType = e.dataTransfer.getData("widgetType");
    const textArea = e.target;
    const startPos = textArea.selectionStart;
    const endPos = textArea.selectionEnd;
    const text = textArea.value;
    const newWidgetType = `<span className="text-red-500">${widgetType}</span>`; // add CSS class to widgetType
    const newText =
      text.slice(0, startPos) + newWidgetType + text.slice(endPos); // use newWidgetType instead of widgetType
    textArea.value = newText;
    setWidgets([...widgets, widgetType]);
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
        onDragStart={(e) => handleOnDrag(e, "Numérique")}
        className="bg-colorPanneau text-white font-bold w-1/2 p-1 rounded-md"
      >
        Numérique
      </button>
    ),
  };

  return (
    <div className="flex justify-evenly h-full w-full p-5">
      <div
        // onDrop={handleOnDrop}
        // onDragOver={handleDragOver}
        className=" flex flex-col items-center justify-center h-full w-1/2 border-2 border-colorBlue rounded-xl"
      >
        <textarea
          onDragOver={handleTextareaDragOver}
          onDrop={handleTextareaDrop}
          placeholder="Fourniture et pose ... "
          className="h-full w-full rounded-xl p-5"
          autoComplete="on"
          defaultValue="Fourniture et pose en bois.Hauteur: mm, largeur: mm, profondeur: mm."
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
