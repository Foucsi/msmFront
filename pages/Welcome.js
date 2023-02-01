import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import { GrDown } from "react-icons/gr";

export default function Welcome() {
  const [getProfil, setGetProfil] = useState("");
  const users = useSelector((state) => state.user.value);

  /* fonction permettant de recuperer le profil de l'utilisateur et ainsi pouvoir changer le backgroundColor*/
  const fetchData = async () => {
    const res = await fetch(
      `http://localhost:3000/users/getProfilByToken/${users.token}`
    );
    const data = await res.json();
    {
      data.result && setGetProfil(data.profil);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      </div>
      <div className="flex flex-col justify-between h-full w-3/4 ">
        <div
          className={`flex flex-row justify-end w-full h-1/6  border-b border-solid border-borderColor p-5 ${
            getProfil === "facturation"
              ? "bg-colorYellow"
              : getProfil === "administrateur"
              ? "bg-colorRed"
              : "bg-colorGreen"
          }`}
        >
          <div className="flex items-center justify-around h-full  w-60 p-2">
            <CgProfile size={24} />
            <p>Bienvenue {users.username}</p>
            <GrDown size={20} />
          </div>
        </div>
        <div className="flex w-full bg-colorBgWelcome h-5/6"></div>
      </div>
    </div>
  );
}
