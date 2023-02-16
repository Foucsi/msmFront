import React, { useState } from "react";
import { BsBox } from "react-icons/bs";
import { GiPlanks } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Slide1 from "@/components/Slide1";
import Slide2 from "@/components/Slide2";
import Slide3 from "@/components/Slide3";

export default function TestBox() {
  //ci dessous etat pour gerer le carrousel du formulaire
  const [position, setPosition] = useState(0);
  const [formData, setFormData] = useState({});

  const articles = ["Caissons", "Panneaux", "Habillages", "Personnalisé"];
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [article, setArticle] = useState("Aucun articles séléctionnés!");

  const articleIcons = {
    Caissons: <BsBox size={72} color="#062650" />,
    Panneaux: <GiPlanks size={72} color="#062650" />,
    Habillages: <MdOutlineDesignServices size={72} color="#062650" />,
    Personnalisé: <AiOutlineUnorderedList size={72} color="#062650" />,
  };

  const inputArticles = {
    Caissons: (
      <div className="flex items-center justify-around w-full">
        <input placeholder="Longueur" className="p-2 rounded" />
        <input placeholder="Largeur" className="p-2 rounded" />
        <input placeholder="Profondeur" className="p-2 rounded" />
      </div>
    ),
    Panneaux: (
      <div className="flex items-center justify-around w-full">
        <input placeholder="Longueur" className="p-2 rounded" />
        <input placeholder="Largeur" className="p-2 rounded" />
        <input placeholder="Epaisseur" className="p-2 rounded" />
      </div>
    ),
    Habillages: (
      <div className="flex items-center justify-around w-full">
        <input placeholder="hauteur" className="p-2 rounded" />
        <input placeholder="Largeur" className="p-2 rouded" />
        <input placeholder="Epaisseur" className="p-2 rounded" />
      </div>
    ),
    Personnalisé: (
      <div className="flex items-center justify-center w-full">
        <input placeholder="Personnalisé" className="p-2 rounded" />
      </div>
    ),
  };

  const handleVisibilityChange = (article) => {
    if (selectedArticle === article) {
      setSelectedArticle(null);
    } else {
      setSelectedArticle(article);
    }
  };

  function handleNext() {
    setPosition(position + 1);
  }

  function handlePrev() {
    setPosition(position - 1);
  }

  return (
    <div className="flex flex-col w-full h-full items-center ">
      {position === 0 && <Slide1 position={position} handleNext={handleNext} />}
      {position === 1 && <Slide2 position={position} handleNext={handleNext} />}
      {position === 2 && <Slide3 position={position} handleNext={handleNext} />}
      <button onClick={handlePrev}>Précédent</button>
      <button onClick={handleNext}>Suivant</button>
    </div>
  );
}
