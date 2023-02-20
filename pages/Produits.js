import AddArticle from "@/components/AddArticle";
import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";

export default function Produits() {
  const [displayAddArticle, setDisplayAddArticle] = useState(false);
  const arrayProducts = ["Caissons", "Habillages", "Panneaux"];

  const listProducts = {
    Caissons: (
      <div className="flex items-center justify-center p-2 bg-colorCaisson rounded-sm cursor-pointer shadow">
        <p className="text-white font-bold">Caissons</p>
      </div>
    ),
    Habillages: (
      <div className="flex items-center justify-center p-2 bg-colorHabillage rounded-sm cursor-pointer shadow">
        <p className="text-white font-bold">Habillages</p>
      </div>
    ),
    Panneaux: (
      <div className="flex items-center justify-center p-2 bg-colorPanneau rounded-sm cursor-pointer shadow">
        <p className="text-white font-bold">Panneaux</p>
      </div>
    ),
  };

  return (
    <div className="flex flex-col items-center justify-around h-full w-full p-5">
      <div className="flex items-center justify-between x w-full mt-20">
        {arrayProducts.map((prod) => {
          return listProducts[prod];
        })}
      </div>

      <div
        onClick={() => setDisplayAddArticle(!displayAddArticle)}
        className="flex items-center justify-center px-5 py-5 rounded-md cursor-pointer bg-colorGrey mt-5"
      >
        <BsPlusLg color="#fff" />
      </div>

      {displayAddArticle && <AddArticle />}
    </div>
  );
}
