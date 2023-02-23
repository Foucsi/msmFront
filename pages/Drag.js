import React, { useState } from "react";
import { GoSettings } from "react-icons/go";

function TexteATrous() {
  const [texte, setTexte] = useState(
    "Fourniture et pose ___ en bois ___ .Hauteur ___ mm, Largeur ___ mm, Profondeur ___ mm.Meubles divisé en ___ parties.Finition exterieurs (joues et facades si existantes) en ___ .Ouverture avec ___ charnieres à ouverture 110° pour portes en ___ , fermetures a amortisseur."
  );

  const [textA, setTextA] = useState("");

  const [mots, setMots] = useState([
    {
      id: 1,
      content: "Numérique",
      color: "colorPanneau",
      style: "text-white font-bold bg-colorPanneau",
    },
    {
      id: 2,
      content: "Choix visuel",
      color: "colorCaisson",
      style: "text-white font-medium bg-colorCaisson",
    },
    {
      id: 3,
      content: "Case à cocher",
      color: "colorHabillage",
      style: "text-white font-semibold bg-colorHabillage",
    },
    {
      id: 4,
      content: "Référence bois",
      color: "colorVio",
      style: "text-white font-normal bg-colorVio",
    },
  ]);

  const [trous, setTrous] = useState([
    { id: 1, contenu: "" },
    { id: 2, contenu: "" },
    { id: 3, contenu: "" },
    { id: 4, contenu: "" },
    { id: 5, contenu: "" },
    { id: 6, contenu: "" },
    { id: 7, contenu: "" },
    { id: 8, contenu: "" },
    { id: 9, contenu: "" },
    { id: 10, contenu: "" },
    { id: 11, contenu: "" },
    { id: 12, contenu: "" },
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
    nouveauxTrous[trouIndex].style = mot.style;

    setTrous(nouveauxTrous);
  };

  return (
    <div className="p-5 w-full">
      <div className="h-full w-full ">
        <p className="leading-10 w-1/2 border-2 border-colorBlue p-5 rounded-xl">
          {texte.split("___").map((partie, index) => (
            <span key={index} className="w-1/2">
              {partie}
              {index < trous.length && (
                <span
                  className={`rounded p-1 cursor-pointer ${trous[index].style}`}
                  onDragOver={(event) => handleDragOver(event)}
                  onDrop={(event) => handleDrop(event, trous[index].id)}
                >
                  {trous[index].contenu}{" "}
                  <span className=" cursor-pointer bg-slate-400 w-8 h-8">
                    .
                  </span>
                </span>
              )}
            </span>
          ))}
        </p>
        <div className="flex w-1/2 mt-10 items-center justify-around">
          {mots.map((mot, index) => (
            <div
              className={`border-2 text-white bg-${mots[index].color} flex items-center justify-around p-1 cursor-pointer rounded-xl`}
              key={mot.id}
              draggable
              onDragStart={(event) => handleDragStart(event, mot)}
            >
              {mot.content}
            </div>
          ))}
        </div>

        <div className="h-1/2 pt-5 w-full">
          <textarea
            className="h-36 w-full p-5"
            name=""
            id=""
            cols="30"
            rows="10"
            value={texte}
            onChange={(e) => setTexte(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default TexteATrous;
