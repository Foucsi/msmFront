import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Clients() {
  const router = useRouter();
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
    const handleClick = () => {
      router.push({
        pathname: "/InfoClients",
        query: {
          name: cl.name,
          email: cl.email,
          tel: cl.tel,
          adress: cl.adress,
        },
      });
    };
    return (
      <div
        onClick={handleClick}
        key={index}
        className="flex w-full items-center justify-between mt-1.5 text-center border-b-2 pb-2 pt-2 bg-white rounded cursor-pointer"
      >
        <p className="w-1/4 font-montserrat">{cl.name}</p>
        <p className="w-1/4 font-montserrat">{cl.email}</p>
        <p className="w-1/4 font-montserrat">{cl.createdAt.slice(0, 10)}</p>
        <p className="w-1/4 font-montserrat">action</p>
      </div>
    );
  });

  return (
    <div className="h-full w-full p-5">
      <div className="w-full p-5">
        <h1 className="text-3xl font-montserrat text-colorText">Clients</h1>
      </div>
      <div className="flex flex-col">
        <div className="flex w-full items-center justify-between pb-5 font-montserrat text-center border-b-4">
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
