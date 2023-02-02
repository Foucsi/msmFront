import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { useRouter } from "next/router";
import CreerDevis from "@/components/CreerDevis";
import ApercuDevis from "@/components/ApercuDevis";
import EnvoyerDevis from "@/components/EnvoyerDevis";

export default function Devis() {
  const sections = {
    Creer: <CreerDevis />,
    Apercu: <ApercuDevis />,
    Envoyer: <EnvoyerDevis />,
  };

  const [displaySection, setDisplaySection] = useState(sections.Creer);

  const handleSection = (section) => {
    setDisplaySection(sections[section] || null);
  };

  console.log(displaySection);

  const router = useRouter();
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
              Créer un devis
            </p>
          </div>
          <div>
            <button className="bg-colorBlue text-white py-3 px-5 rounded-lg hover:shadow-md font-montserrat hover:opacity-95 w-52">
              ok
            </button>
          </div>
        </div>
        <div className="flex justify-between p-5 w-96 ">
          <p
            onClick={() => handleSection("Creer")}
            className={`${
              displaySection.type.name === "CreerDevis"
                ? "border-b-4 border-solid border-b-colorBorderLeft font-montserrat text-colorText"
                : ""
            } cursor-pointer w-24 text-center pb-2`}
          >
            Créer
          </p>
          <p
            onClick={() => handleSection("Apercu")}
            className={`${
              displaySection.type.name === "ApercuDevis"
                ? "border-b-4 border-solid border-b-colorBorderLeft font-montserrat text-colorText"
                : ""
            } cursor-pointer w-24 text-center pb-2`}
          >
            Apercu
          </p>
          <p
            onClick={() => handleSection("Envoyer")}
            className={`${
              displaySection.type.name === "EnvoyerDevis"
                ? "border-b-4 border-solid border-b-colorBorderLeft font-montserrat text-colorText"
                : ""
            } cursor-pointer w-24 text-center pb-2`}
          >
            Envoyer
          </p>
        </div>
      </div>

      <div className="w-full h-4/5 p-5">{displaySection}</div>
    </div>
  );
}
