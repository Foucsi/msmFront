import React, { useState } from "react";
import { GoSettings } from "react-icons/go";

export default function AddArticle() {
  const [widgets, setWidgets] = useState([]);

  const handleOnDrag = (e, widgetType) => {
    e.dataTransfer.setData("widgetType", widgetType);
    e.target.classList.add("dragging");
  };

  const handleOnDrop = (e) => {
    e.preventDefault();
    const widgetType = e.dataTransfer.getData("widgetType");
    const textArea = document.getElementById("text-area");

    const newWidgetType = `<span class="inline-block text-red-500 bg-slate-500 rounded-md p-1 ">
                                ${widgetType}
                            </span>`;

    textArea.focus();
    const selectionStart = textArea.selectionStart;
    const selectionEnd = textArea.selectionEnd;
    const text = textArea.value;
    const newText =
      text.slice(0, selectionStart) + newWidgetType + text.slice(selectionEnd);
    textArea.value = newText;
    textArea.setSelectionRange(
      selectionStart + newWidgetType.length,
      selectionStart + newWidgetType.length
    );
    setWidgets([...widgets, widgetType]);
  };

  const handleOnDragOver = (e) => {
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
      <div className=" flex flex-col items-center justify-center h-full w-1/2 border-2 border-colorBlue rounded-xl">
        <textarea
          onDrop={handleOnDrop}
          onDragOver={handleOnDragOver}
          id="text-area"
          placeholder="Fourniture et pose ... "
          className="flex h-full w-full rounded-xl p-5 text-black"
          value={widgets.join("")}
          onChange={(e) => setWidgets(e.target.value.split(""))}
        />
      </div>
      <div className="flex flex-col  items-center justify-evenly h-full w-1/3 border-2">
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
