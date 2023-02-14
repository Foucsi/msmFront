import React, { useState } from "react";
import { BsBox } from "react-icons/bs";
import { GiPlanks } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";

export default function TestBox() {
  const articles = ["Caissons", "Panneaux", "Habillages", "Personnalisé"];
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articleIcons = {
    Caissons: <BsBox size={72} color="#062650" />,
    Panneaux: <GiPlanks size={72} color="#062650" />,
    Habillages: <MdOutlineDesignServices size={72} color="#062650" />,
    Personnalisé: <AiOutlineUnorderedList size={72} color="#062650" />,
  };

  const handleVisibilityChange = (article) => {
    if (selectedArticle === article) {
      setSelectedArticle(null);
    } else {
      setSelectedArticle(article);
    }
  };

  return (
    <div className="flex items-center justify-around h-full w-full">
      {articles.map((art, index) => (
        <div
          onClick={() => handleVisibilityChange(art)}
          className={`flex relative flex-col items-center justify-center border-x border-y border-colorIcon h-72 w-48 rounded cursor-pointer hover:bg-slate-300 ${
            selectedArticle === art ? "bg-slate-300" : ""
          }`}
          key={index}
        >
          {articleIcons[art]}
          <p>{art}</p>
          {selectedArticle === art && (
            <div className="flex items-center justify-center absolute h-10 w-10 bg-colorIcon top-0 right-0 rounded-bl-">
              <AiOutlineCheck color="#fff" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
