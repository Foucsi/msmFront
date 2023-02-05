import React from "react";
import {
  Page,
  Text,
  Document,
  Image,
  StyleSheet,
  View,
} from "@react-pdf/renderer";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
  img: {
    height: 70,
    width: 70,
  },
  boxHeader: {
    padding: 15,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function PDFFile({ user }) {
  return (
    <Document>
      <Page>
        <View style={styles.boxHeader}>
          <Image
            style={styles.img}
            src="https://static.wixstatic.com/media/d16931_c1db014fc2a04a16a7b140679667eb46~mv2.png/v1/fill/w_96,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo_MSM_w_bg.png"
          />
          <View
            style={{ display: "flex", flexDirection: "row", paddingLeft: 20 }}
          >
            <Text>MSM</Text>
            <Text>Menuiserie Sur Mesure</Text>
          </View>
        </View>
        <View>
          <Text>Créateur : {user}</Text>
        </View>

        {({ pageNumber, totalPages }) => (
          <Text>{`${pageNumber}/${totalPages}`}</Text>
        )}
      </Page>
    </Document>
  );
}
