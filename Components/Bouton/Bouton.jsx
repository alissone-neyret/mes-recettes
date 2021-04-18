import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const Bouton = (props) => {
  return (
    <View style={styles.container}>
      <Button color={props.couleur} style={styles.bouton} title={props.titre} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    marginBottom: 20
  },
});

export default Bouton;
