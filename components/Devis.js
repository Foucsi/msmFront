import React, { useEffect, useState } from "react";
import { FcCalculator } from "react-icons/fc";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { GrDown } from "react-icons/gr";

export default function Devis() {
  // ci dessous un tableau d'etat pour gerer sur une liste de devis
  const [visibilityStates, setVisibilityStates] = useState([]);
  const [listingDevis, setListingDevis] = useState([]);
  const users = useSelector((state) => state.user.value);
  const router = useRouter();

  const handleVisibilityChange = (index) => {
    //fonction qui permet de mettre à jour l'état de visibilityStates
    //Elle prend en entrée un index,
    //qui représente l'index de l'élément dans le tableau pour lequel la visibilité doit être mise à jour.
    setVisibilityStates((prevStates) => {
      //Lors de la mise à jour,
      //setVisibilityStates appelle une fonction qui retourne une nouvelle version de l'état
      //précédent en inversant la valeur de l'élément correspondant à l'index donné.
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  //Autre possibilité de faire ce code d'une autre facons ci dessous

  // const handleVisibilityChange = (index) => {
  //   setVisibilityStates(prevStates =>
  //     prevStates.map((visibility, i) => (i === index ? !visibility : visibility))
  //   );
  // };
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

  const handleDelete = async (idDevis) => {
    const res = await fetch("http://localhost:3000/devis/deleteDevis", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: users.token, devisId: idDevis }),
    });
    const data = await res.json();
    if (data.result) {
      fetchData();
    }
  };

  const elmtDevis = listingDevis.map((devis, index) => {
    const handleClick = () => {
      router.push({
        pathname: "/Devis",
        query: {
          user: devis.user,
          numero: devis.numero,
          client: devis.name,
          date: devis.createdAt.substring(0, 10),
          adress: devis.adress,
        },
      });
    };
    return (
      <div
        key={index}
        className="z-50 backdrop:relative flex items-center justify-around rounded bg-white mt-1 p-1 font-montserrat text-colorText cursor-pointer "
      >
        <p className="w-1/4 text-center" onClick={handleClick}>
          {devis.user}
        </p>
        <p className="w-1/4 text-center">{devis.numero}</p>
        <p className="w-1/4 text-center">{devis.name}</p>
        <p className="w-1/4 text-center">{devis.createdAt.substring(0, 10)}</p>
        <p className="w-1/4 text-center">Non envoyé</p>
        <div className="flex w-1/4 items-center justify-center">
          <div
            className=" bg-slate-500 p-1 hover:shadow-sm"
            onClick={() => handleVisibilityChange(index)}
          >
            <GrDown
              className={`${
                visibilityStates[index]
                  ? "rotate-180 transform duration-200"
                  : "rotate-0 transform duration-200"
              } cursor-pointer`}
              size={20}
            />
            {visibilityStates[index] && (
              <div className="flex flex-col items-start justify-around z-50 absolute  bg-white shadow-md h-32 w-34  right-24 font-montserrat">
                <p className="w-full hover:bg-colorBrownSecond p-1">
                  Convertir en facture
                </p>
                {users.profil === "facturation" ? (
                  ""
                ) : (
                  <p
                    className="w-full hover:bg-colorBrownSecond p-1 text-colorRed"
                    onClick={() => handleDelete(devis._id)}
                  >
                    Supprimer
                  </p>
                )}
                <p className="w-full hover:bg-colorBrownSecond p-1">Envoyer</p>
                <p className="w-full hover:bg-colorBrownSecond p-1">Imprimer</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  });

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
              <p className="w-1/4 text-center">Actions</p>
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
