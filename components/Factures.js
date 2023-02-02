import React, { useState } from "react";
import { FcDocument } from "react-icons/fc";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function Factures() {
  const [listingFactures, setListingFactures] = useState([]);
  const users = useSelector((state) => state.user.value);

  const router = useRouter();

  return (
    <div className="w-full h-full p-5">
      <div className="flex items-center justify-between w-full p-5 border-b-2 border-borderColor">
        <h1 className="text-3xl font-montserrat text-colorText">Factures</h1>
        {(users.profil === "commercial" ||
          users.profil === "administrateur") && (
          <button
            onClick={() => router.push("/Factures")}
            className="bg-colorBlue text-white py-3 px-5 rounded-lg hover:shadow-md font-montserrat hover:opacity-95"
          >
            Créer une facture
          </button>
        )}
      </div>
      <div className="flex items-center justify-center w-full h-5/6 ">
        {listingFactures.length === 0 && (
          <div className="flex flex-col items-center justify-around h-96">
            <FcDocument size={172} />
            <p className="font-montserrat text-colorText text-xl">
              Aucune facture pour le moment
            </p>
            <div className="flex items-center justify-center">
              {(users.profil === "commercial" ||
                users.profil === "administrateur") && (
                <button
                  onClick={() => router.push("/Factures")}
                  className="bg-colorBlue text-white py-3 px-5 rounded-lg hover:shadow-md font-montserrat hover:opacity-95"
                >
                  Créer une facture
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
