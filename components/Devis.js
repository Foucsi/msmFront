import React, { useState } from "react";
import { FcCalculator } from "react-icons/fc";
import { useSelector } from "react-redux";

export default function Devis() {
  const [listingDevis, setListingDevis] = useState([]);
  const users = useSelector((state) => state.user.value);
  return (
    <div className="w-full h-full p-5">
      <div className="flex items-center justify-between w-full p-5 border-b-2 border-borderColor">
        <h1 className="text-3xl font-montserrat text-colorText">Devis</h1>
        {(users.profil === "commercial" ||
          users.profil === "administrateur") && (
          <button className="bg-colorBlue text-white py-3 px-5 rounded-lg hover:shadow-md font-montserrat hover:opacity-95">
            Créer un devis
          </button>
        )}
      </div>
      <div className="flex items-center justify-center w-full h-5/6 ">
        {listingDevis.length === 0 && (
          <div className="flex flex-col items-center justify-around h-96">
            <FcCalculator size={172} />
            <p className="font-montserrat text-colorText text-xl">
              Aucun devis pour le moment
            </p>
            <div className="flex items-center justify-center">
              {(users.profil === "commercial" ||
                users.profil === "administrateur") && (
                <button className="bg-colorBlue text-white py-3 px-5 rounded-lg hover:shadow-md font-montserrat hover:opacity-95">
                  Créer un devis
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
