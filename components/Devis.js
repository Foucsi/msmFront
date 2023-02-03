import React, { useEffect, useState } from "react";
import { FcCalculator } from "react-icons/fc";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function Devis() {
  const [listingDevis, setListingDevis] = useState([]);
  const users = useSelector((state) => state.user.value);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const fetchData = async () => {
    const res = await fetch(`http://localhost:3000/devis/getAllDevis`);
    const data = await res.json();

    {
      data.result && setListingDevis(data.devis);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const elmtDevis = listingDevis.map((devis, index) => {
    console.log(typeof devis.createdAt);
    return (
      <div
        key={index}
        className="flex items-center justify-around bg-white mt-1 p-1 font-montserrat text-colorText"
      >
        <p className="w-1/4 text-center">{devis.user}</p>
        <p className="w-1/4 text-center">{devis.numero}</p>
        <p className="w-1/4 text-center">{devis.name}</p>
        <p className="w-1/4 text-center">{devis.createdAt.substring(0, 10)}</p>
        <p className="w-1/4 text-center">Non envoyé</p>
      </div>
    );
  });

  const router = useRouter();
  return (
    <div className="w-full h-full p-5">
      <div className="flex items-center justify-between w-full p-5 border-b-2 border-borderColor">
        <h1 className="text-3xl font-montserrat text-colorText">Devis</h1>
        {(users.profil === "commercial" ||
          users.profil === "administrateur") && (
          <button
            onClick={() => router.push("/Devis")}
            className="bg-colorBlue text-white py-3 px-5 rounded-lg hover:shadow-md font-montserrat hover:opacity-95"
          >
            Créer un devis
          </button>
        )}
      </div>
      <div className="flex items-center justify-center w-full h-5/6 ">
        {listingDevis.length > 0 ? (
          <div className="w-full h-full">
            <div className="flex items-center justify-around w-full h-8 bg-slate-300 font-montserrat text-colorText">
              <p className="w-1/4 text-center">Créateur</p>
              <p className="w-1/4 text-center">Numéro</p>
              <p className="w-1/4 text-center">Clients</p>
              <p className="w-1/4 text-center">Date</p>
              <p className="w-1/4 text-center">Statut</p>
            </div>
            {elmtDevis}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-around h-96">
            <FcCalculator size={172} />
            <p className="font-montserrat text-colorText text-xl">
              Aucun devis pour le moment
            </p>
            <div className="flex items-center justify-center">
              {(users.profil === "commercial" ||
                users.profil === "administrateur") && (
                <button
                  onClick={() => router.push("/Devis")}
                  className="bg-colorBlue text-white py-3 px-5 rounded-lg hover:shadow-md font-montserrat hover:opacity-95"
                >
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
