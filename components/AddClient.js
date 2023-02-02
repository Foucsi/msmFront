import React from "react";

export default function AddClient() {
  return (
    <div className="flex flex-col font-montserrat text-colorText h-full w-full justify-center">
      <div className="flex w-full text-lg pb-5">
        <p className="pr-5 w-1/6">Nom du client</p>
        <input
          className="w-2/6 border-b-2 border-borderColor pl-2"
          type="text"
          placeholder="Saisir le nom du client..."
        />
      </div>
      <div className="flex text-lg pb-5">
        <p className="pr-5 w-1/6">Portable</p>
        <input
          className="w-2/6 border-b-2 border-borderColor pl-2"
          type="text"
          placeholder="Saisir un n° de tel. portable..."
        />
      </div>
      <div className="flex text-lg pb-5">
        <p className="pr-5 w-1/6">Email</p>
        <input
          className="w-2/6 border-b-2 border-borderColor pl-2"
          type="text"
          placeholder="Saisir une adresse email..."
        />
      </div>
      <div className="flex text-lg pb-5">
        <p className="pr-5 w-1/6">Facturation</p>
        <input
          className="w-2/6 border-b-2 border-borderColor pl-2"
          type="text"
          placeholder="Saisir une adresse..."
        />
      </div>
    </div>
  );
}
