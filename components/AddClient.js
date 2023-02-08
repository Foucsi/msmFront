import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDevis } from "@/reducers/users";

export default function AddClient({ setDisplayFormClient, selection }) {
  const [nom, setNom] = useState("");
  const [portable, setPortable] = useState("");
  const [email, setEmail] = useState("");
  const [adresse, setAdresse] = useState("");
  const [msgError, setMsgError] = useState("");

  const [numberDevis, setNumberDevis] = useState();

  const users = useSelector((state) => state.user.value);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/devis/getNumberArray");
      const data = await res.json();
      {
        data.result && setNumberDevis(data.lengthArray + 1);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async () => {
    const res = await fetch(`http://localhost:3000/devis/${users.token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: nom,
        tel: portable,
        email: email,
        adress: adresse,
        numero: numberDevis,
        product: selection,
      }),
    });
    const data = await res.json();
    if (data.result) {
      setDisplayFormClient(false);
    } else if (data.error === "Missing or empty fields") {
      setMsgError(<p className="">Veuillez saisir le nom du client.</p>);
    }
  };

  return (
    <div className="flex flex-col font-montserrat text-colorText h-full w-full justify-start pb-5 ">
      <div className="flex w-full text-lg pb-5 pt-5">
        <p className="pr-5 w-1/6">Nom du client</p>
        <input
          className="w-2/6 border-b-2 border-borderColor pl-2"
          type="text"
          placeholder="Saisir le nom du client..."
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
      </div>
      <div className="flex text-lg pb-5">
        <p className="pr-5 w-1/6">Portable</p>
        <input
          className="w-2/6 border-b-2 border-borderColor pl-2"
          type="text"
          placeholder="Saisir un n° de tel. portable..."
          value={portable}
          onChange={(e) => setPortable(e.target.value)}
        />
      </div>
      <div className="flex text-lg pb-5">
        <p className="pr-5 w-1/6">Email</p>
        <input
          className="w-2/6 border-b-2 border-borderColor pl-2"
          type="text"
          placeholder="Saisir une adresse email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex text-lg pb-5">
        <p className="pr-5 w-1/6">Facturation</p>
        <input
          className="w-2/6 border-b-2 border-borderColor pl-2"
          type="text"
          placeholder="Saisir une adresse..."
          value={adresse}
          onChange={(e) => setAdresse(e.target.value)}
        />
      </div>
      <div className="h-6 font-montserrat text-colorRed">
        <p>{msgError}</p>
      </div>
      <button
        className="bg-colorBlue text-white py-1 px-5 rounded-lg hover:shadow-md font-montserrat hover:opacity-95 w-36"
        onClick={() => handleSubmit()}
      >
        valider
      </button>
    </div>
  );
}
