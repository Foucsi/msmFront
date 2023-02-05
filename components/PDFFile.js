import React from "react";
import { Page, Text, Document, Image, StyleSheet } from "@react-pdf/renderer";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
  img: {
    height: 70,
    width: 70,
  },
});

export default function PDFFile() {
  return (
    <Document>
      <Page>
        <Text>MSM</Text>
        <Text>Menuiserie Sur Mesure</Text>
        <Image
          style={styles.img}
          src="https://static.wixstatic.com/media/d16931_c1db014fc2a04a16a7b140679667eb46~mv2.png/v1/fill/w_96,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo_MSM_w_bg.png"
        />
        {({ pageNumber, totalPages }) => (
          <Text>{`${pageNumber}/${totalPages}`}</Text>
        )}
      </Page>
    </Document>
  );
}
