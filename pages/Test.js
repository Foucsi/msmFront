import React, { useEffect, useState } from "react";

export default function Test() {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [msgError, setMsgError] = useState("");
  const [listingClients, setListingClient] = useState([]);
  const [isIncludes, setIsIncludes] = useState(false);
  const [animation, setAnimation] = useState(false);

  const registerClient = async () => {
    const res = await fetch("http://localhost:3000/clients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, tel, email, adress }),
    });
    const data = await res.json();
    if (data.result) {
      //   setName("");
      //   setEmail("");
      //   setAdress("");
      //   setTel("");
      setAnimation(true);
      setInterval(() => {
        setAnimation(false);
      }, 500);
      setMsgError("Client enregistré !");
    } else if (data.error === "Missing or empty fields") {
      setMsgError("Missing or empty fields");
    }
  };

  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/clients/all");
    const data = await res.json();

    {
      data.result && setListingClient(data.data);
    }
  };

  useEffect(() => {
    fetchData();
    setMsgError("");
  }, []);

  const nameUser = listingClients.map((e) => e.name);

  const addClient = async (e) => {
    if (nameUser.includes(e)) {
      setIsIncludes(true);
      const res = await fetch(`http://localhost:3000/clients/${e}`);
      const data = await res.json();
      {
        data.result && setAdress(data.client.adress),
          setEmail(data.client.email),
          setTel(data.client.tel),
          setMsgError("");
      }
    } else {
      setMsgError("");
      setIsIncludes(false);
      setAdress("");
      setEmail("");
      setTel("");
    }
  };

  return (
    <div className="flex items-center justify-center h-full w-full ">
      <div className="w-3/4 h-1/2 bg-white shadow-sm">
        <div className="flex flex-col p-5">
          <input
            className="p-1 border-b-2"
            type="text"
            placeholder="Nom"
            value={name}
            onChange={(e) => {
              addClient(e.target.value);
              setName(e.target.value);
            }}
          />
          <input
            className="p-1 border-b-2"
            type="text"
            placeholder="Tél"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
          <input
            className="p-1 border-b-2"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="p-1 border-b-2"
            type="text"
            placeholder="Adress"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          />
        </div>
        <div className="flex justify-center h-12">
          {animation ? <img className="h-8 w-8" src="loader.gif" /> : msgError}
        </div>

        {!isIncludes && (
          <div className="flex justify-center">
            <button
              onClick={registerClient}
              className="text-colorBlue  p-1 rounded font-bold"
            >
              Enregistrer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
