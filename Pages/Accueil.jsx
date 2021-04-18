import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Bouton from "../Components/Bouton/Bouton";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Accueil = () => {
  return (
    <View style={styles.container}>
      {/* <Navbar /> */}
      <View style={styles.titreContainer}>
        <Text style={styles.titre}>Bienvenue sur Mes Recettes !</Text>
        <Text>Retrouvez ici toutes vos recettes enregistrées.</Text>
        <Image
          style={styles.image}
          source={require("../assets/photo_recette.jpg")}
        />
        <View style={styles.boutons}>
          <Bouton couleur='green' titre="Ajouter une recette" />
          <Bouton titre="Voir mes recettes" />
        </View>
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  titreContainer: {
    alignItems: "center",
  },
  titre: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
    marginTop: 60,
    marginBottom: 15,
  },
  image: {
    width: 330,
    height: 200,
    marginTop: 50,
  },
  boutons: {
    marginTop: 30,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});

export default Accueil;
