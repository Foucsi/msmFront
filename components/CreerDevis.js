import React from "react";

export default function CreerDevis() {
  return (
    <div className="flex w-full h-full ">
      <div className="flex flex-col h-full w-8/12 shadow-md">
        <div className="w-full h-1/3">
          <div className="flex items-center w-full h-1/6 bg-colorBgWelcome pl-10 font-montserrat text-colorText">
            <p>Client</p>
          </div>
          <div className="w-full"></div>
        </div>
        <div className="w-full h-1/3">
          <div className="flex items-center w-full h-1/6 bg-colorBgWelcome pl-10 font-montserrat text-colorText">
            <p>Articles</p>
          </div>
          <div className="w-full"></div>
        </div>
        <div className="w-full h-1/3">
          <div className="flex items-center w-full h-1/6 bg-colorBgWelcome pl-10 font-montserrat text-colorText">
            <p>Commentaires</p>
          </div>
          <div className="w-full"></div>
        </div>
      </div>
      <div className="h-full w-4/12 "></div>
    </div>
  );
}
