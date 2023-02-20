import React from "react";

export default function Produits() {
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
    <div className="flex items-center justify-around h-24 w-1/3 p-5">
      {arrayProducts.map((prod) => {
        return listProducts[prod];
      })}
    </div>
  );
}
