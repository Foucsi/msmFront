import React, { useState } from "react";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msgError, setMsgError] = useState("");
  return (
    <div className="flex flex-col items-center justify-around h-3/5 w-1/2">
      <p className="font-bold text-colorText text-3xl font-montserrat">
        Connexion
      </p>
      <div className="flex flex-col items-center w-10/12">
        <p className="self-start pl-8 pb-2 font-montserrat text-colorText">
          Utilisateur
        </p>
        <input
          type="text"
          placeholder="...."
          className="w-10/12 border p-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="flex flex-col items-center w-10/12">
        <p className="self-start pl-8 pb-2 font-montserrat text-colorText">
          Mot de passe
        </p>
        <input
          type="password"
          placeholder="...."
          className="w-10/12 border p-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <p>{msgError}</p>
      </div>
      <div className="flex items-center justify-center w-10/12">
        <button className="text-white bg-colorBrown w-10/12 h-11 rounded-lg hover:shadow-lg font-montserrat">
          Connexion
        </button>
      </div>
    </div>
  );
}
