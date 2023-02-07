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
    borderBottomColor: "#D7D7D7",
    borderBottomStyle: "solid",
    borderBottomWidth: 2,
  },
});

export default function PDFFile({ user, numero, client, date, adress }) {
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
            <Text style={{ fontWeight: "bold", color: "#4F3A36" }}>MSM</Text>
            <Text
              style={{ paddingLeft: 5, fontWeight: "bold", color: "#6C5854" }}
            >
              Menuiserie Sur Mesure
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            fontSize: 12,
            padding: 10,
            height: 180,
            backgroundColor: "grey",
            backgroundColor: "#EBE8E8",
          }}
        >
          <View style={{ width: "50%", height: "100%" }}>
            <Text>Créateur : {user}</Text>
            <Text>Numéro devis : {numero}</Text>
            <Text>Date : {date}</Text>
            <Text>Client : {client}</Text>
            <Text>{adress}</Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column",
              width: "50%",
              height: "100%",
            }}
          >
            <Text
              style={{
                alignSelf: "flex-end",
                fontWeight: "bold",
                fontSize: 18,
                color: "#36383A",
              }}
            >
              Devis
            </Text>
            <Text style={{ alignSelf: "flex-end" }}>
              11, rue Alfred de Musset
            </Text>
            <Text style={{ alignSelf: "flex-end" }}>
              77176 Savigny-le-temple
            </Text>
            <Text style={{ alignSelf: "flex-end" }}>Tél : 01.64.79.73.24</Text>
            <Text style={{ alignSelf: "flex-end" }}>N°SIREN : 440 489 516</Text>
            <Text style={{ alignSelf: "flex-end" }}>
              N°SIRET : 44048951600029
            </Text>
            <Text style={{ alignSelf: "flex-end" }}>
              N° RCS : B 440 489 516
            </Text>
            <Text style={{ alignSelf: "flex-end" }}>
              Mail : msm@msm-sarl.fr
            </Text>
            <Text style={{ alignSelf: "flex-end" }}>
              Site : www.msm-sarl.fr
            </Text>
            <Text style={{ alignSelf: "flex-end" }}>
              N° TVA : FR21 440 489 516
            </Text>
          </View>
        </View>

        {({ pageNumber, totalPages }) => (
          <Text>{`${pageNumber}/${totalPages}`}</Text>
        )}
      </Page>
    </Document>
  );
}
