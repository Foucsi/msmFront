import React, { useState } from "react";
import { BsBox } from "react-icons/bs";
import { GiPlanks } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function TestBox() {
  const articles = ["Caissons", "Panneaux", "Habillages", "Personnalisé"];
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [article, setArticle] = useState("");

  const articleIcons = {
    Caissons: <BsBox size={72} color="#062650" />,
    Panneaux: <GiPlanks size={72} color="#062650" />,
    Habillages: <MdOutlineDesignServices size={72} color="#062650" />,
    Personnalisé: <AiOutlineUnorderedList size={72} color="#062650" />,
  };

  const inputArticles = {
    Caissons: (
      <div>
        <input placeholder="Longueur" />
        <input placeholder="Largeur" />
        <input placeholder="Profondeur" />
      </div>
    ),
    Panneaux: (
      <div>
        <input placeholder="Longueur" />
        <input placeholder="Largeur" />
        <input placeholder="Epaisseur" />
      </div>
    ),
    Habillages: (
      <div>
        <input placeholder="hauteur" />
        <input placeholder="Largeur" />
        <input placeholder="Epaisseur" />
      </div>
    ),
    Personnalisé: <input placeholder="" />,
  };

  const handleVisibilityChange = (article) => {
    if (selectedArticle === article) {
      setSelectedArticle(null);
    } else {
      setSelectedArticle(article);
    }
  };

  return (
    <div className="flex flex-col w-full h-full items-center ">
      <div className="flex items-end font-montserrat pt-10">
        <p className="text-2xl">Quels types d'articles ?</p>
      </div>
      <div className="flex w-full items-center justify-around pt-10">
        {articles.map((art, index) => (
          <div
            onClick={() => {
              handleVisibilityChange(art);
              console.log("article: ", art);
              setArticle(art);
            }}
            className={`flex flex-col relative items-center justify-center border-x border-y border-colorIcon h-72 w-48 rounded cursor-pointer hover:bg-slate-300 ${
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
      <div className="h-24 p-5">
        <p>Article : {article} </p>
      </div>
      <div>{inputArticles[selectedArticle]}</div>
    </div>
  );
}
