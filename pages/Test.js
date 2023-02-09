import React, { useState } from "react";

export default function Test() {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  return (
    <div className="flex items-center justify-center h-full w-full ">
      <div className="w-3/4 h-1/2 bg-white shadow-sm">
        <input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tél"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Adress"
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
        />
        <button className="bg-colorBlue text-white p-1 rounded">Valider</button>
      </div>
    </div>
  );
}
