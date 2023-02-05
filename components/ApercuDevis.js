import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFFile from "./PDFFile";
import { Document, Page } from "react-pdf";

export default function ApercuDevis({ user, client, numero, date }) {
  return (
    <div className="flex flex-col h-screen items-center p-5 justify-between">
      <PDFDownloadLink
        document={
          <PDFFile user={user} client={client} numero={numero} date={date} />
        }
        fileName="FORM"
      >
        {({ loading }) =>
          loading ? (
            <button>Loading document</button>
          ) : (
            <button className="pb-2 bg-colorBlue text-white rounded p-1">
              Download
            </button>
          )
        }
      </PDFDownloadLink>
      <div className="w-3/5 h-full shadow-2xl">
        <div className="flex flex-row items-center justify-center p-5">
          <img src="https://static.wixstatic.com/media/d16931_c1db014fc2a04a16a7b140679667eb46~mv2.png/v1/fill/w_96,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo_MSM_w_bg.png" />
          <h1 className="pl-5 font-montserrat font-bold text-lg text-colorBrown">
            MSM{" "}
            <span className="text-colorBrownSecond">Menuiserie Sur Mesure</span>
          </h1>
        </div>
        <div>{user}</div>
      </div>
    </div>
  );
}
