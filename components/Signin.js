import React, { useState } from "react";
import { login } from "@/reducers/users";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msgError, setMsgError] = useState("");
  const [displayLoader, setDisplayLoader] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    });
    const data = await res.json();

    if (data.result) {
      setMsgError("");
      setDisplayLoader(true);
      setTimeout(() => {
        router.push("/Welcome");
      }, 1500);

      dispatch(
        login({
          username: data.user.username,
          email: data.user.email,
          profil: data.user.profil,
          token: data.user.token,
        })
      );
      setUsername("");
      setPassword("");
    } else if (data.error === "Missing or empty fields") {
      setMsgError("Champs manquants ou vides");
    } else if (data.error === "User not found or wrong password") {
      setMsgError("Utilisateur introuvable ou mot de passe erroné");
    }
  };
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
      <div className="h-8">
        <p>{msgError}</p>
        {displayLoader && <img className="h-8 w-8" src="loader.gif" />}
      </div>
      <div className="flex items-center justify-center w-10/12">
        <button
          onClick={handleSubmit}
          className="text-white bg-colorBrown w-10/12 h-11 rounded-lg hover:shadow-lg font-montserrat"
        >
          Connexion
        </button>
      </div>
    </div>
  );
}
