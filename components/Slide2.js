import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BiCheck } from "react-icons/bi";

export default function Slide2({ position }) {
  const users = useSelector((state) => state.user.value);

  const article = users.articles.map((e, index) => {
    const articleTypes = {
      Caissons: () => (
        <>
          <p>Long : {e.article.longueur}</p>
          <p>Larg : {e.article.largeur}</p>
          <p>Prof: {e.article.profondeur}</p>
        </>
      ),
      Panneaux: () => (
        <>
          <p>Long : {e.article.longueur}</p>
          <p>Larg : {e.article.largeur}</p>
          <p>Ep: {e.article.epaisseur}</p>
        </>
      ),
      Habillages: () => (
        <>
          <p>Haut : {e.article.hauteur}</p>
          <p>Larg : {e.article.largeur}</p>
          <p>Ep: {e.article.epaisseur}</p>
        </>
      ),
    };

    const renderArticle = articleTypes[e.article.article];

    if (renderArticle) {
      return (
        <div className="border-2 mt-5 p-5" key={index}>
          <p className="font-bold">{e.article.article}</p>
          {renderArticle()}
        </div>
      );
    }

    return null;
  });

  const slideStyle = {
    color: "#333",
    padding: "1rem",
    borderRadius: "0.5rem",
  };
  return (
    <div
      className={`${
        position === 1
          ? "opacity-100"
          : "opacity-0 transition-opacity duration-1000 ease-in-out"
      } w-full h-full`}
      style={slideStyle}
    >
      <div className="">{article}</div>
      <button className="flex items-center justify-around bg-colorBrown p-2 rounded text-white mt-2 w-20 shadow-sm hover:opacity-80">
        ok
        <BiCheck size={22} />
      </button>
    </div>
  );
}
