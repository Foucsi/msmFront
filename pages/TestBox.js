import React from "react";
import { BsBox } from "react-icons/bs";
import { GiPlanks } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineUnorderedList } from "react-icons/ai";

export default function TestBox() {
  const articles = ["Caissons", "Panneaux", "Habillages", "Personnalisé"];
  const articleIcons = {
    Caissons: <BsBox size={72} color="#062650" />,
    Panneaux: <GiPlanks size={72} color="#062650" />,
    Habillages: <MdOutlineDesignServices size={72} color="#062650" />,
    Personnalisé: <AiOutlineUnorderedList size={72} color="#062650" />,
  };
  return (
    <div className="flex items-center justify-around h-full w-full">
      {articles.map((art, index) => (
        <div
          className="flex flex-col items-center justify-center border-2 border-colorIcon h-72 w-48 rounded cursor-pointer"
          key={index}
        >
          {articleIcons[art]}
          <p>{art}</p>
        </div>
      ))}
    </div>
  );
}
