import React from "react";

export default function Acceuil() {
  return (
    <div className="w-full h-full p-5">
      <div className="w-full  p-5">
        <h1 className="text-3xl font-montserrat text-colorText">Acceuil</h1>
      </div>
      <div className="flex flex-col justify-center w-full h-5/6  p-5">
        <div>
          <p className="font-montserrat text-xl text-colorText">
            Présentation Générale
          </p>
        </div>
        <div className="flex flex-wrap justify-between items-center w-full h-full">
          <div className="flex flex-col justify-evenly w-5/12 h-28 bg-white rounded-lg shadow-xl p-5 cursor-pointer">
            <p className="text-sm font-montserrat text-colorText">
              FACTURES ÉCHUES (0)
            </p>
            <p className="text-xl">0,00 €</p>
          </div>
          <div className="flex flex-col justify-evenly w-5/12 h-28 bg-white rounded-lg shadow-xl p-5 cursor-pointer">
            <p className="text-sm font-montserrat text-colorText">
              FACTURES NON PAYÉES (0)
            </p>
            <p className="text-xl">0,00 €</p>
          </div>
          <div className="flex flex-col justify-evenly w-5/12 h-28 bg-white  rounded-lg shadow-xl p-5 cursor-pointer">
            <p className="text-sm font-montserrat text-colorText">
              FACTURES NON ENVOYÉES (0)
            </p>
            <p className="text-xl">0,00 €</p>
          </div>
          <div className="flex flex-col justify-evenly w-5/12 h-28 bg-white  rounded-lg shadow-xl p-5 cursor-pointer">
            <p className="text-sm font-montserrat text-colorText">VENTES</p>
            <p className="text-xl">0,00 €</p>
          </div>
          <div className=" flex flex-col justify-evenly w-5/12 h-28 bg-white  rounded-lg shadow-xl p-5 cursor-pointer">
            <p className="text-sm font-montserrat text-colorText">
              DEVIS ENVOYÉES (0)
            </p>
            <p className="text-xl">0,00 €</p>
          </div>
          <div className="flex flex-col justify-evenly w-5/12 h-28 bg-white  rounded-lg shadow-xl p-5 cursor-pointer">
            <p className="text-sm font-montserrat text-colorText">
              DEVIS EN ATTENTE (0)
            </p>
            <p className="text-xl">0,00 €</p>
          </div>
        </div>
      </div>
    </div>
  );
}
