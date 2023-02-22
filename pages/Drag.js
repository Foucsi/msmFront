import React, { useState } from "react";
import { GoSettings } from "react-icons/go";

function TexteATrous() {
  const [texte, setTexte] = useState(
    "Fourniture et pose ___ en bois ___ .Hauteur ___ mm, Largeur ___ mm, Profondeur ___ mm.Meubles divisé en ___ parties."
  );

  const [mots, setMots] = useState([
    { id: 1, content: "Numérique", color: "colorPanneau" },
    { id: 2, content: "Choix visuel", color: "colorCaisson" },
    { id: 3, content: "Case à cocher", color: "colorHabillage" },
    { id: 4, content: "Référence bois", color: "colorCaisson" },
  ]);

  const [trous, setTrous] = useState([
    { id: 1, contenu: "" },
    { id: 2, contenu: "" },
    { id: 3, contenu: "" },
    { id: 4, contenu: "" },
    { id: 5, contenu: "" },
    { id: 6, contenu: "" },
  ]);

  const handleDragStart = (event, mot) => {
    event.dataTransfer.setData("mot", JSON.stringify(mot));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, trouId) => {
    const mot = JSON.parse(event.dataTransfer.getData("mot"));

    const nouveauxTrous = [...trous];
    const trouIndex = nouveauxTrous.findIndex((trou) => trou.id === trouId);
    nouveauxTrous[trouIndex].contenu = mot.content;

    setTrous(nouveauxTrous);
  };

  return (
    <div className="p-5">
      <div className="h-full w-3/4">
        <p className="leading-8">
          {texte.split("___").map((partie, index) => (
            <span key={index}>
              {partie}
              {index < trous.length && (
                <span
                  className="bg-red-200 rounded  p-1 cursor-pointer"
                  onDragOver={(event) => handleDragOver(event)}
                  onDrop={(event) => handleDrop(event, trous[index].id)}
                >
                  {trous[index].contenu}
                  {/* <GoSettings className="cursor-pointer" /> */}
                </span>
              )}
            </span>
          ))}
        </p>
        <div className="flex mt-20 items-center justify-around">
          {mots.map((mot, index) => (
            <div
              className={`border-2 bg-${mots[index].color} flex items-center justify-between p-2 cursor-pointer rounded`}
              key={mot.id}
              draggable
              onDragStart={(event) => handleDragStart(event, mot)}
            >
              {mot.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TexteATrous;
