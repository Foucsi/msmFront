import React from "react";
import { useSelector } from "react-redux";

export default function Welcome() {
  const users = useSelector((state) => state.user.value);
  console.log("Profil: ", users.profil);
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
        <div className="flex flex-row justify-end w-full bg-white h-1/6  border-b border-solid border-borderColor p-5">
          <div className="flex items-center justify-center h-full  w-1/6 p-2">
            <p>Bienvenue {users.username}</p>
          </div>
        </div>
        <div className="flex w-full bg-colorBgWelcome h-5/6"></div>
      </div>
    </div>
  );
}
