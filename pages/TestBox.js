import React, { useState } from "react";
import { BsBox } from "react-icons/bs";
import { GiPlanks } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";

export default function TestBox() {
  const articles = ["Caissons", "Panneaux", "Habillages", "Personnalisé"];
  const [isSelected, setIsSelected] = useState([]);

  const articleIcons = {
    Caissons: <BsBox size={72} color="#062650" />,
    Panneaux: <GiPlanks size={72} color="#062650" />,
    Habillages: <MdOutlineDesignServices size={72} color="#062650" />,
    Personnalisé: <AiOutlineUnorderedList size={72} color="#062650" />,
  };

  const handleVisibilityChange = (index) => {
    //fonction qui permet de mettre à jour l'état de isSelected
    //Elle prend en entrée un index,
    //qui représente l'index de l'élément dans le tableau pour lequel la visibilité doit être mise à jour.
    setIsSelected((prevStates) => {
      //Lors de la mise à jour,
      //setIsVisible appelle une fonction qui retourne une nouvelle version de l'état
      //précédent en inversant la valeur de l'élément correspondant à l'index donné.
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };
  return (
    <div className="flex items-center justify-around h-full w-full">
      {articles.map((art, index) => (
        <div
          onClick={() => handleVisibilityChange(index)}
          className="flex relative flex-col items-center justify-center border-x border-y border-colorIcon h-72 w-48 rounded cursor-pointer hover:bg-slate-300"
          key={index}
        >
          {articleIcons[art]}
          <p>{art}</p>
          {isSelected[index] && (
            <div className="flex items-center justify-center absolute h-10 w-10 bg-colorIcon top-0 right-0 rounded-bl-lg">
              <AiOutlineCheck color="#fff" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
