import React, { useState } from "react";
import { BsBox } from "react-icons/bs";
import { GiPlanks } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { addArticles } from "@/reducers/users";
import { useDispatch } from "react-redux";

export default function Slide1({ position, handleNext }) {
  const articles = ["Caissons", "Panneaux", "Habillages", "Personnalisé"];
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [article, setArticle] = useState("Aucun articles séléctionnés!");

  const [longueur, setLongueur] = useState();
  const [largeur, setLargeur] = useState();
  const [profondeur, setProfondeur] = useState();
  const [epaisseur, setEpaisseur] = useState();
  const [hauteur, setHauteur] = useState();

  const dispatch = useDispatch();

  const articleIcons = {
    Caissons: <BsBox size={72} color="#062650" />,
    Panneaux: <GiPlanks size={72} color="#062650" />,
    Habillages: <MdOutlineDesignServices size={72} color="#062650" />,
    Personnalisé: <AiOutlineUnorderedList size={72} color="#062650" />,
  };

  const inputArticles = {
    Caissons: (
      <div className="flex items-center justify-around w-full">
        <input
          placeholder="Longueur"
          className="p-2 rounded"
          value={longueur}
          onChange={(e) => setLongueur(e.target.value)}
        />
        <input
          placeholder="Largeur"
          className="p-2 rounded"
          value={largeur}
          onChange={(e) => setLargeur(e.target.value)}
        />
        <input
          placeholder="Profondeur"
          className="p-2 rounded"
          value={profondeur}
          onChange={(e) => setProfondeur(e.target.value)}
        />
      </div>
    ),
    Panneaux: (
      <div className="flex items-center justify-around w-full">
        <input
          placeholder="Longueur"
          className="p-2 rounded"
          value={longueur}
          onChange={(e) => setLongueur(e.target.value)}
        />
        <input
          placeholder="Largeur"
          className="p-2 rounded"
          value={largeur}
          onChange={(e) => setLargeur(e.target.value)}
        />
        <input
          placeholder="Epaisseur"
          className="p-2 rounded"
          value={epaisseur}
          onChange={(e) => setEpaisseur(e.target.value)}
        />
      </div>
    ),
    Habillages: (
      <div className="flex items-center justify-around w-full">
        <input
          placeholder="hauteur"
          className="p-2 rounded"
          value={hauteur}
          onChange={(e) => setHauteur(e.target.value)}
        />
        <input
          placeholder="Largeur"
          className="p-2 rouded"
          value={largeur}
          onChange={(e) => setLargeur(e.target.value)}
        />
        <input
          placeholder="Epaisseur"
          className="p-2 rounded"
          value={epaisseur}
          onChange={(e) => setEpaisseur(e.target.value)}
        />
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

  const addArticleRecuder = () => {
    if (article !== "Aucun articles séléctionnés!") {
      dispatch(addArticles({ article: article }));
    }
  };

  const slideStyle = {
    backgroundColor: "#f8f8f8",
    color: "#333",
    padding: "1rem",
    borderRadius: "0.5rem",
  };

  return (
    <div
      style={slideStyle}
      className={`${
        position === 0
          ? "opacity-100"
          : "opacity-0 transition-opacity duration-1000 ease-in-out"
      }transition-opacity flex flex-col w-full h-full items-center`}
    >
      <div className="flex items-end font-montserrat pt-10">
        <p className="text-2xl">Quels types d'articles ?</p>
      </div>
      <div className="flex justify-around w-full">
        {articles.map((art, index) => (
          <div
            onClick={() => {
              handleVisibilityChange(art);
              setArticle(
                selectedArticle === art ? "Aucun articles séléctionnés!" : art
              );
            }}
            className={`flex flex-col relative items-center justify-evenly border-x border-y border-colorIcon h-72 w-48 rounded cursor-pointer hover:bg-slate-300 ${
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
      <div className="w-full">{inputArticles[selectedArticle]}</div>
      <button
        onClick={() => addArticleRecuder()}
        className="bg-colorBlue p-2 rounded text-white mt-2"
      >
        Valider
      </button>
    </div>
  );
}
