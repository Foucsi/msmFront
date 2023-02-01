import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/reducers/users";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [msgError, setMsgError] = useState("");
  const [selectedValue, setSelectedValue] = useState("commercial");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        email,
        profil: selectedValue,
      }),
    });
    const data = await res.json();

    if (data.result) {
      setEmail("");
      setPassword("");
      setUsername("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-around h-3/5 w-1/2">
      <p className="font-bold text-colorText text-3xl font-montserrat">
        S'enregistrer
      </p>
      <div className="flex flex-row items-center justify-around w-10/12">
        <label htmlFor="">Profil</label>
        <input
          type="radio"
          value="commercial"
          checked={selectedValue === "commercial"}
          onChange={handleChange}
        />
        Commercial
        <input
          type="radio"
          value="facturation"
          checked={selectedValue === "facturation"}
          onChange={handleChange}
        />
        Facturation
      </div>
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
          Email
        </p>
        <input
          type="text"
          placeholder="...."
          className="w-10/12 border p-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <button
          onClick={handleSubmit}
          className="text-white bg-colorBrown w-10/12 h-11 rounded-lg hover:shadow-lg font-montserrat"
        >
          S'enregistrer
        </button>
      </div>
    </div>
  );
}
