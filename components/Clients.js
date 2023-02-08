import React, { useEffect, useState } from "react";

export default function Clients() {
  const [clients, setClients] = useState([]);

  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/devis/getAllDevis");
    const data = await res.json();

    {
      data.result && setClients(data.devis);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const listingClients = clients.map((cl, index) => {
    return (
      <div
        key={index}
        className="flex w-full items-center justify-between mt-1.5"
      >
        <p className="w-1/4">{cl.name}</p>
        <p className="w-1/4">{cl.email}</p>
        <p className="w-1/4">{cl.createdAt.slice(0, 10)}</p>
        <p className="w-1/4">action</p>
      </div>
    );
  });

  return (
    <div className="h-full w-full p-5">
      <div className="w-full p-5">
        <h1 className="text-3xl font-montserrat text-colorText">Clients</h1>
      </div>
      <div className="flex flex-col">
        <div className="flex w-full items-center justify-between pb-5">
          <p className="w-1/4">Nom</p>
          <p className="w-1/4">Email</p>
          <p className="w-1/4">Date ajoutée</p>
          <p className="w-1/4">Action</p>
        </div>
        {listingClients}
      </div>
    </div>
  );
}
