import React, { useState, useRef } from "react";
import { GoSettings } from "react-icons/go";

export default function AddArticle() {
  const [widgets, setWidgets] = useState([]);
  const textAreaRef = useRef(null); // Ajouter une référence à l'élément textarea

  const handleOnDrag = (e, widgetType) => {
    e.dataTransfer.setData("widgetType", widgetType);
    e.target.classList.add("dragging");
  };

  const handleOnDrop = (e) => {
    e.preventDefault();
    const widgetType = e.dataTransfer.getData("widgetType");
    const textArea = textAreaRef.current; // Utiliser la référence à l'élément textarea

    const newWidgetType = `<div class="block w-24 text-blue-500 bg-slate-500 rounded-md p-1">
                                ${widgetType}
                                
                            </div>`;

    const text = textArea.innerHTML;
    const newText = text + newWidgetType;
    textArea.innerHTML = newText;
    setWidgets([...widgets, widgetType]);
  };

  const handleOnDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-evenly h-full w-full p-5">
      <div
        onDrop={handleOnDrop}
        onDragOver={handleOnDragOver}
        id="text-area"
        className=" h-full w-1/2 border-2 border-colorBlue rounded-xl p-5"
        contentEditable="true"
        ref={textAreaRef} // Ajouter la référence à l'élément textarea
      />
      <div className="flex flex-col  items-center justify-evenly h-full w-1/3 border-2">
        <button
          draggable
          onDragStart={(e) => handleOnDrag(e, "Numérique")}
          className="bg-colorPanneau text-white font-bold w-1/2 p-1 rounded-md"
        >
          Numérique
        </button>
      </div>
    </div>
  );
}
