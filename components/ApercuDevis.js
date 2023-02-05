import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFFile from "./PDFFile";
import { Document, Page } from "react-pdf";

export default function ApercuDevis({ user }) {
  return (
    <div className="flex flex-col h-screen items-center p-5 justify-between">
      <PDFDownloadLink document={<PDFFile user={user} />} fileName="FORM">
        {({ loading }) =>
          loading ? (
            <button>Loading document</button>
          ) : (
            <button className="pb-2">Download</button>
          )
        }
      </PDFDownloadLink>
      <div className="w-3/5 h-full shadow-2xl">
        <p></p>
      </div>
    </div>
  );
}
