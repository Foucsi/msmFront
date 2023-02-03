import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import { GrDown } from "react-icons/gr";
import { logout } from "@/reducers/users";
import { useRouter } from "next/router";
import { BsPlusLg } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import Acceuil from "@/components/Acceuil";
import Factures from "@/components/Factures";
import Devis from "@/components/Devis";
import { login } from "@/reducers/users";

export default function Welcome() {
  const sections = {
    Acceuil: <Acceuil />,
    Factures: <Factures />,
    Devis: <Devis />,
  };

  const [getProfil, setGetProfil] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalCreate, setModalCreate] = useState(false);
  const [section, setSection] = useState(sections.Acceuil);
  const users = useSelector((state) => state.user.value);

  const dispatch = useDispatch();
  const router = useRouter();

  /* fonction permettant de recuperer le profil de l'utilisateur et ainsi pouvoir changer le backgroundColor*/

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(
  //       `http://localhost:3000/users/getProfilByToken/${users.token}`
  //     );
  //     const data = await res.json();
  //     if (data.result) {
  //       setGetProfil(data.profil);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const handleDeconnexion = () => {
    // dispatch(logout());
    router.push("/");
  };

  const displaySection = (section) => {
    setSection(sections[section] || null);
  };

  /*Lorsque la fonction displaySection est appelée avec une section donnée, 
  elle utilise l'opérateur de résolution de propriété ([]) pour trouver le composant correspondant. 
  Si la section ne se trouve pas dans l'objet sections, sections[section] renvoie undefined, 
  ce qui est géré en utilisant un opérateur || pour définir la valeur 
  retournée sur null au cas où aucun composant n'est trouvé. */

  return (
    <div className="flex h-screen w-screen">
      <div className="flex flex-col h-full w-1/4 bg-colorBrown">
        <div className="flex w-full items-center justify-evenly h-40">
          <img
            className="cursor-pointer"
            src="https://static.wixstatic.com/media/d16931_c1db014fc2a04a16a7b140679667eb46~mv2.png/v1/fill/w_96,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo_MSM_w_bg.png"
            alt="logo_MSM_w_bg.png"
            srcset="https://static.wixstatic.com/media/d16931_c1db014fc2a04a16a7b140679667eb46~mv2.png/v1/fill/w_96,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo_MSM_w_bg.png"
          />
          <div className="font-montserrat text-white">
            <p>MSM</p>
            <p>Menuiserie Sur Mesure</p>
          </div>
        </div>

        <div className="flex w-full items-center justify-evenly h-40 p-10">
          {(users.profil === "commercial" ||
            users.profil === "administrateur") && (
            <div className="flex relative items-center w-4/5">
              <div
                onClick={() => setModalCreate(!modalCreate)}
                className="flex h-14 w-14 bg-colorBlue rounded-full cursor-pointer items-center justify-center shadow-md"
              >
                <BsPlusLg
                  className={`${
                    modalCreate
                      ? "rotate-45 duration-200"
                      : "rotate-0 duration-200"
                  }`}
                  color="white"
                  size={22}
                />
              </div>
              <p className="text-white font-montserrat pl-4">Créer</p>
              {modalCreate && (
                <div className="flex flex-col justify-between absolute top-16 bg-slate-50 shadow-md h-40 w-60 p-5 rounded-md">
                  <p className="font-montserrat">Créer</p>
                  <div className="h-1/2">
                    <div
                      onClick={() => router.push("/Devis")}
                      className="h-1/2 border-b border-solid border-borderColor cursor-pointer p-1 hover:bg-slate-400 font-montserrat"
                    >
                      <p className="pb-4">Devis</p>
                    </div>
                    <div
                      onClick={() => router.push("/Factures")}
                      className="h-1/2 border-b border-solid border-borderColor cursor-pointer p-1 hover:bg-slate-400 font-montserrat"
                    >
                      <p className="pb-4">Facture</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="flex flex-col font-montserrat text-white h-48 p-5 justify-evenly pl-20">
          <p
            onClick={() => displaySection("Acceuil")}
            className={`hover:bg-colorBrownSecond p-2 cursor-pointer  ${
              section.type.name === "Acceuil"
                ? "border-l-4 border-solid border-l-colorBorderLeft"
                : ""
            }`}
          >
            Accueil
          </p>
          <p
            onClick={() => displaySection("Factures")}
            className={`hover:bg-colorBrownSecond p-2 cursor-pointer  ${
              section.type.name === "Factures"
                ? "border-l-4 border-solid border-l-colorBorderLeft"
                : ""
            }`}
          >
            Factures
          </p>
          <p
            onClick={() => displaySection("Devis")}
            className={`hover:bg-colorBrownSecond p-2 cursor-pointer  ${
              section.type.name === "Devis"
                ? "border-l-4 border-solid border-l-colorBorderLeft"
                : ""
            }`}
          >
            Devis
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between h-full w-3/4 ">
        <div
          className={`flex flex-row justify-end w-full h-1/6  border-b border-solid border-borderColor p-5 `}
        >
          <div className="flex relative items-center justify-around h-full  w-60 p-2">
            {modalVisible && (
              <div className="absolute top-20 right-10 h-60 w-72 bg-white animate-[wiggle_0.2s_ease-in-out] shadow-md p-10 rounded">
                <p>
                  Utilisateur :{" "}
                  {users.username.charAt(0).toUpperCase() +
                    users.username.slice(1)}
                </p>
                <p>Email : {users.email}</p>
                <p className="font-bold">
                  Profil :{" "}
                  {users.profil.charAt(0).toUpperCase() + users.profil.slice(1)}
                </p>
                <div className="w-4/5 h-1/3 border-b border-solid border-borderColor"></div>
                <div className="p-5">
                  <button
                    onClick={handleDeconnexion}
                    className="bg-colorBrown text-white p-2 hover:shadow-lg rounded-lg"
                  >
                    Déconnexion
                  </button>
                </div>
              </div>
            )}
            <FaUserCircle
              size={32}
              color={
                users.profil === "facturation"
                  ? "#FFDE59"
                  : users.profil === "administrateur"
                  ? "#FF5757"
                  : "#7ED957"
              }
            />
            <p>
              Bienvenue{" "}
              {users.username.charAt(0).toUpperCase() + users.username.slice(1)}
            </p>
            <GrDown
              className={`${
                modalVisible
                  ? "rotate-180 transform duration-200"
                  : "rotate-0 transform duration-200"
              } cursor-pointer`}
              size={20}
              onClick={() => setModalVisible(!modalVisible)}
            />
          </div>
        </div>
        <div
          onClick={() => setModalVisible(false)}
          className="flex w-full bg-colorBgWelcome h-5/6"
        >
          {section}
        </div>
      </div>
    </div>
  );
}
