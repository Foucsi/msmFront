import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Test() {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [msgError, setMsgError] = useState("");
  const [listingClients, setListingClient] = useState([]);
  const [isIncludes, setIsIncludes] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [displayAddArticle, setDisplayAddArticle] = useState(false);
  const [listArticles, setListArticles] = useState([]);

  const [choiceProduct, setChoiceProduct] = useState("Caissons");

  const products = ["Caissons", "Plateaux", "Habillages", "Personnalisé"];
  const selectProducts = products.map((prod, index) => (
    <option key={index} className="p-2">
      {prod}
    </option>
  ));

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

  const pushProductArticle = (article) => {
    setListArticles([
      ...listArticles,
      { article: article, id: Math.random() * 1000 },
    ]);
    console.log("listArticles :", listArticles);
  };

  const filteredArticles = (id) => {
    setListArticles(listArticles.filter((elmt) => elmt.id !== id));
  };

  const listingPushArticles = listArticles.map((art) => {
    return (
      <div
        key={art.id}
        className="flex items-center justify-between shadow-sm mt-1 p-1 hover:bg-slate-200 cursor-pointer"
      >
        <p>{art.article}</p>
        <RiDeleteBin6Line onClick={() => filteredArticles(art.id)} />
      </div>
    );
  });

  return (
    <div className="flex flex-col items-center justify-center h-full w-full ">
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
              className="text-colorBlue  p-1 font-bold"
            >
              Enregistrer
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col w-3/4 h-1/2 bg-white shadow-sm mt-2 p-1">
        {displayAddArticle && (
          <div className="w-full h-3/4 shadow-lg p-1">
            <p>Article à ajouter ({listArticles.length})</p>
            <select onChange={(e) => setChoiceProduct(e.target.value)}>
              {selectProducts}
            </select>
            <p>{choiceProduct}</p>
            {choiceProduct === "Caissons" && (
              <div>
                <input type="text" placeholder="Longueur" />
                <input type="text" placeholder="Largeur" />
                <input type="text" placeholder="Profondeur" />
                <button onClick={() => pushProductArticle(choiceProduct)}>
                  Ajouter
                </button>
              </div>
            )}
            {choiceProduct === "Plateaux" && (
              <div>
                <input type="text" placeholder="Longueur" />
                <input type="text" placeholder="Largeur" />
                <input type="text" placeholder="Epaisseur" />
                <button onClick={() => pushProductArticle(choiceProduct)}>
                  Ajouter
                </button>
              </div>
            )}
            {choiceProduct === "Habillages" && (
              <div>
                <input type="text" placeholder="Hauteur" />
                <input type="text" placeholder="Largeur" />
                <input type="text" placeholder="Epaisseur" />
                <button onClick={() => pushProductArticle(choiceProduct)}>
                  Ajouter
                </button>
              </div>
            )}
            {listingPushArticles}
          </div>
        )}
        <p
          onClick={() => setDisplayAddArticle(!displayAddArticle)}
          className="text-colorBlue p-1 font-bold cursor-pointer"
        >
          Ajouter des articles
        </p>
      </div>
    </div>
  );
}
