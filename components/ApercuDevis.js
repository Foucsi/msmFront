import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFFile from "./PDFFile";

export default function ApercuDevis({ user }) {
  return (
    <div>
      <PDFDownloadLink document={<PDFFile user={user} />} fileName="FORM">
        {({ loading }) =>
          loading ? (
            <button>Loading document</button>
          ) : (
            <button>Download</button>
          )
        }
      </PDFDownloadLink>

      <p>Ici le rendu pdf</p>
    </div>
  );
}
