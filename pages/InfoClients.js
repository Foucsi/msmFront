import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BsArrowLeftShort } from "react-icons/bs";

export default function InfoClients() {
  const [loader, setLoader] = useState(false);
  const [modif, setModif] = useState(false);
  const router = useRouter();

  const { name, email, tel, adress } = router.query;

  useEffect(() => {
    setInterval(() => {
      setLoader(true);
    }, 500);
  }, []);
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex flex-col justify-between bg-colorBgWelcome p-5 pt-10">
        <div className="flex items-center justify-between w-full h-1/5 ">
          <div className="flex items-center justify-evenly w-48">
            <BsArrowLeftShort
              size={24}
              color="#45484A"
              onClick={() => router.push("/Welcome")}
              className="cursor-pointer"
            />
            <p className="font-montserrat text-lg text-colorText">
              Informations Client
            </p>
          </div>
          <div>
            <button className="bg-colorBlue text-white py-3 px-5 rounded-lg hover:shadow-md font-montserrat hover:opacity-95 w-52">
              ok
            </button>
          </div>
        </div>
        <div className="flex justify-between p-5 w-96 ">
          <p className="border-b-4 border-solid border-b-colorBorderLeft font-montserrat text-colorText">
            Info
          </p>
        </div>
      </div>

      <div className="flex w-full p-5 h-screen">
        <div className="flex flex-col h-full w-1/2 shadow-md font-montserrat p-5 ">
          {loader ? (
            <div className="flex w-full h-1/2 ">
              <div className="flex flex-col justify-around items-end w-1/2 h-full p-5 font-montserrat text-sm">
                <p>E-mail</p>
                <p>Adresse de facturation</p>
                <p>Nom du contact</p>
                <p>Tél.</p>
              </div>
              <div className="flex flex-col justify-around items-startw-1/2 h-full p-5 font-montserrat font-bold">
                {modif ? (
                  <input placeholder={email} className="border-b-2" />
                ) : (
                  <p className="text-colorBlue font-bold">{email}</p>
                )}
                {modif ? (
                  <input placeholder={adress} className="border-b-2" />
                ) : (
                  <p>{adress}</p>
                )}
                {modif ? (
                  <input placeholder={name} className="border-b-2" />
                ) : (
                  <p>{name}</p>
                )}
                {modif ? (
                  <input placeholder={tel} className="border-b-2" />
                ) : (
                  <p>{tel}</p>
                )}
              </div>
              <button
                onClick={() => setModif(!modif)}
                className="bg-colorBlue h-7 p-1 rounded text-white"
              >
                {modif ? "Valider" : "Modifier"}
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full w-full">
              <img className="h-8 w-8" src="loader.gif" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
