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
    Numérique: <button>Numérique</button>,
    Choixtextuel: <button>Choix textuel</button>,
    Casesàcocher: <button>Cases à cocher</button>,
    Référencebois: <button>Référence bois</button>,
    Accessoires: <button>Accessoires</button>,
    Suppléments: <button>Suppléments</button>,
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
          return <div key={index}>{listeOptions[opt]}</div>;
        })}
      </div>
    </div>
  );
}
