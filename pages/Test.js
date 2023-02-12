import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";

export default function Test() {
  const users = useSelector((state) => state.user.value);

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

  //Input dimensions Artciles
  const [choiceProduct, setChoiceProduct] = useState("Caissons");
  const [longueur, setLongueur] = useState("");
  const [hauteur, setHauteur] = useState("");
  const [largeur, setLargeur] = useState("");
  const [profondeur, setProfondeur] = useState("");
  const [epaisseur, setEpaisseur] = useState("");

  const products = ["Caissons", "Plateaux", "Habillages", "Personnalisé"];
  const selectProducts = products.map((prod, index) => (
    <option key={index} className="p-2">
      {prod}
    </option>
  ));

  const registerClient = async () => {
    const res = await fetch(`http://localhost:3000/clients/${users.token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, tel, email, adress, user: users.username }),
    });
    const data = await res.json();
    console.log(data.result);
    if (data.result) {
      //   setName("");
      //   setEmail("");
      //   setAdress("");
      //   setTel("");
      setAnimation(true);
      setInterval(() => {
        setAnimation(false);
      }, 500);
      clearInterval();
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

  const pushProductArticle = (
    article,
    largeur,
    profondeur,
    longueur,
    epaisseur,
    hauteur
  ) => {
    setListArticles([
      ...listArticles,
      {
        art: article,
        larg: largeur,
        prof: profondeur,
        long: longueur,
        ep: epaisseur,
        haut: hauteur,
        id: Math.random() * 1000,
      },
    ]);
    console.log("listArticles :", listArticles);
    setLargeur("");
    setProfondeur("");
    setLongueur("");
    setEpaisseur("");
    setHauteur("");
  };

  const filteredArticles = (id) => {
    setListArticles(listArticles.filter((elmt) => elmt.id !== id));
  };

  const listingPushArticles = listArticles.map((art) => {
    return (
      <div
        key={art.id}
        className="flex items-center justify-between shadow-sm mt-1 p-1 hover:bg-slate-200 cursor-pointer w-full"
      >
        <p className="w-1/6 bg-slate-200">{art.art}</p>

        {art.art === "Habillages" && (
          <p className="w-1/6 bg-slate-200">Haut. {art.haut}</p>
        )}
        {art.art === "Caissons" && (
          <p className="w-1/6 bg-slate-200">Long. {art.long}</p>
        )}
        {art.art === "Plateaux" && (
          <p className="w-1/6 bg-slate-200">Long. {art.long}</p>
        )}
        {art.art === "Caissons" && (
          <p className="w-1/6 bg-slate-200">Larg. {art.larg}</p>
        )}
        {art.art === "Habillages" && (
          <p className="w-1/6 bg-slate-200">Larg. {art.larg}</p>
        )}
        {art.art === "Plateaux" && (
          <p className="w-1/6 bg-slate-200">Larg. {art.larg}</p>
        )}
        {art.art === "Caissons" && (
          <p className="w-1/6 bg-slate-200">Prof.{art.prof}</p>
        )}
        {art.art === "Plateaux" && (
          <p className="w-1/6 bg-slate-200">Ep.{art.ep}</p>
        )}
        {art.art === "Habillages" && (
          <p className="w-1/6 bg-slate-200">Ep.{art.ep}</p>
        )}
        <RiDeleteBin6Line onClick={() => filteredArticles(art.id)} />
      </div>
    );
  });

  const testProduct = (prod) => {
    if (prod === "Caissons") {
      return (
        <div>
          <input
            type="text"
            placeholder="Longueur"
            value={longueur}
            onChange={(e) => setLongueur(e.target.value)}
          />
          <input
            type="text"
            placeholder="Largeur"
            value={largeur}
            onChange={(e) => setLargeur(e.target.value)}
          />
          <input
            type="text"
            placeholder="Profondeur"
            value={profondeur}
            onChange={(e) => setProfondeur(e.target.value)}
          />
          <button
            onClick={() =>
              pushProductArticle(
                choiceProduct,
                largeur,
                profondeur,
                longueur,
                epaisseur,
                hauteur
              )
            }
          >
            Ajouter
          </button>
        </div>
      );
    } else if (prod === "Plateaux") {
      return (
        <div>
          <input
            type="text"
            placeholder="Longueur"
            value={longueur}
            onChange={(e) => setLongueur(e.target.value)}
          />
          <input
            type="text"
            placeholder="Largeur"
            value={largeur}
            onChange={(e) => setLargeur(e.target.value)}
          />
          <input
            type="text"
            placeholder="Epaisseur"
            value={epaisseur}
            onChange={(e) => setEpaisseur(e.target.value)}
          />
          <button
            onClick={() =>
              pushProductArticle(
                choiceProduct,
                largeur,
                profondeur,
                longueur,
                epaisseur,
                hauteur
              )
            }
          >
            Ajouter
          </button>
        </div>
      );
    } else if (prod === "Habillages") {
      return (
        <div>
          <input
            type="text"
            placeholder="Hauteur"
            value={hauteur}
            onChange={(e) => setHauteur(e.target.value)}
          />
          <input
            type="text"
            placeholder="Largeur"
            value={largeur}
            onChange={(e) => setLargeur(e.target.value)}
          />
          <input
            type="text"
            placeholder="Epaisseur"
            value={epaisseur}
            onChange={(e) => setEpaisseur(e.target.value)}
          />
          <button
            onClick={() =>
              pushProductArticle(
                choiceProduct,
                largeur,
                profondeur,
                longueur,
                epaisseur,
                hauteur
              )
            }
          >
            Ajouter
          </button>
        </div>
      );
    }
  };

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
            {testProduct(choiceProduct)}
            {listingPushArticles}
            <button className="bg-colorBlue p-2 rounded text-white">
              Valider
            </button>
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
