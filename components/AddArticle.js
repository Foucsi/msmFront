import React from "react";

export default function AddArticle() {
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
      <button className="bg-colorPanneau text-white font-bold w-1/2 p-1 rounded-md">
        Numérique
      </button>
    ),
    Choixtextuel: (
      <button className="bg-colorCaisson text-white font-bold w-1/2 p-1 rounded-md">
        Choix textuel
      </button>
    ),
    Casesàcocher: (
      <button className="bg-colorHabillage text-white font-bold w-1/2 p-1 rounded-md">
        Cases à cocher
      </button>
    ),
    Référencebois: (
      <button className="bg-colorViolet text-white font-bold w-1/2 p-1 rounded-md">
        Référence bois
      </button>
    ),
    Accessoires: (
      <button className="bg-colorViolet text-white font-bold w-1/2 p-1 rounded-md">
        Accessoires
      </button>
    ),
    Suppléments: (
      <button className="bg-colorViolet text-white font-bold w-1/2 p-1 rounded-md">
        Suppléments
      </button>
    ),
  };

  return (
    <div className="flex justify-evenly h-full w-full p-5">
      <div className=" flex items-center justify-center h-full w-1/2 border-2 border-colorBlue rounded-xl">
        <textarea
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
