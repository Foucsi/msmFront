import React, { useEffect, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFFile from "./PDFFile";
import { Document, Page } from "react-pdf";

export default function ApercuDevis({
  user,
  client,
  numero,
  date,
  adress,
  product,
}) {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col h-screen items-center justify-center ">
      <PDFDownloadLink
        document={
          <PDFFile
            user={user}
            client={client}
            numero={numero}
            date={date}
            adress={adress}
            product={product}
          />
        }
        fileName="FORM"
      >
        {({ loading }) =>
          loading ? (
            <button>Loading document</button>
          ) : (
            <div className="pb-2 font-montserrat">
              <button className="flex items-center justify-center pb-2 bg-colorBlue text-white rounded p-1 hover:opacity-80">
                Télécharger en PDF
              </button>
            </div>
          )
        }
      </PDFDownloadLink>
      {loader ? (
        <div className="w-2/5 h-screen shadow-2xl">
          <div className="flex flex-row items-center justify-center p-5 border-b-2 border-solid border-borderColor">
            <img src="https://static.wixstatic.com/media/d16931_c1db014fc2a04a16a7b140679667eb46~mv2.png/v1/fill/w_96,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo_MSM_w_bg.png" />
            <h1 className="pl-5 font-montserrat font-bold text-lg text-colorBrown">
              MSM{" "}
              <span className="text-colorBrownSecond">
                Menuiserie Sur Mesure
              </span>
            </h1>
          </div>
          <div className="flex w-full p-2 h-52 bg-colorBgAdressDevis font-montserrat">
            <div className="flex flex-col h-full w-1/2 p-2 text-xs">
              <p>Devis n° : {numero}</p>
              <p>Date : {date}</p>
              <p>A : {client}</p>
              <p>{adress}</p>
            </div>
            <div className="flex flex-col items-end h-full w-1/2 p-2 text-xs font-montserrat">
              <h5 className="text-colorText text-lg font-montserrat font-bold">
                Devis
              </h5>
              <p>11, rue Alfred de Musset</p>
              <p>77176 Savigny-le-temple</p>
              <p>Tél : 01.64.79.73.24</p>
              <p>N°SIREN : 440 489 516</p>
              <p>N°SIRET : 44048951600029</p>
              <p>N° RCS : B 440 489 516</p>
              <p>Mail : msm@msm-sarl.fr</p>
              <p>Site : www.msm-sarl.fr</p>
              <p>N° TVA : FR21 440 489 516</p>
            </div>
          </div>
          <div className="p-5 font-montserrat text-sm">
            <p>Désignation: </p>
            <p>{product}</p>
          </div>
        </div>
      ) : (
        <div className="h-1/2">
          <img className="h-8 w-8" src="loader.gif" />
        </div>
      )}
    </div>
  );
}
