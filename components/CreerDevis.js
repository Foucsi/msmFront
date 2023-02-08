import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlineComment } from "react-icons/md";
import AddClient from "./AddClient";

export default function CreerDevis() {
  const [displayFormClient, setDisplayFormClient] = useState(false);
  const [displayAddArticle, setDisplayAddArticle] = useState(false);
  return (
    <div className="flex w-full h-full justify-around ">
      <div className="flex flex-col h-full w-8/12 shadow-md">
        <div className={`w-full ${displayFormClient ? "h-full" : "h-2/5"} `}>
          {" "}
          <div className="flex items-center w-full h-1/6 bg-colorBgWelcome pl-10 font-montserrat text-colorText">
            <p>Client</p>
          </div>
          <div className="flex w-full h-full pl-10 ">
            {displayFormClient ? (
              <AddClient setDisplayFormClient={setDisplayFormClient} />
            ) : (
              <div
                onClick={() => setDisplayFormClient(true)}
                className="flex items-center cursor-pointer"
              >
                <BiUserCircle color="#252AFE" size={32} />
                <p className="font-montserrat text-colorBlue pl-5">
                  Ajouter un client
                </p>
              </div>
            )}
          </div>
        </div>
        <div
          onClick={() => setDisplayFormClient(false)}
          className={`w-full ${displayAddArticle ? "h-4/5" : "h-2/5"}`}
        >
          <div className="flex w-full h-1/6 bg-colorBgWelcome pl-10 font-montserrat text-colorText">
            <p>Articles</p>
          </div>
          <div className="flex flex-col justify-end w-full h-4/5 pl-10 ">
            {displayAddArticle && (
              <div className="h-3/4 w-4/5 shadow-sm">
                <p>test</p>
              </div>
            )}
            <div
              className={`flex w-1/2 items-center cursor-pointer ${
                displayAddArticle ? "pb-0" : "pb-10"
              }`}
            >
              <AiOutlinePlusCircle color="#252AFE" size={32} />
              <p
                onClick={() => setDisplayAddArticle(!displayAddArticle)}
                className="font-montserrat text-colorBlue pl-5"
              >
                Ajouter des articles
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-1/3">
          <div className="flex items-center w-full h-1/6 bg-colorBgWelcome pl-10 font-montserrat text-colorText">
            <p>Commentaires</p>
          </div>
          <div className="flex w-full h-full items-center pl-10">
            <div className="flex items-center cursor-pointer">
              <MdOutlineComment color="#252AFE" size={32} />
              <p className="font-montserrat text-colorBlue pl-5">
                Ajouter un commentaire
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-full w-4/12 p-5">
        <div className="h-full w-full shadow"></div>
      </div>
    </div>
  );
}
