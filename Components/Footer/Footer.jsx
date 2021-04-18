import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text>
        2021 - Copyright - Made by{" "}
        <Text
          style={styles.lien}
          onPress={() => {
            Linking.openURL("http://www.linkedin.com/in/alissone-neyret/");
          }}
        >
          Alissone
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 3,
  },
  lien: {
    color: "blue",
    textDecorationLine: 'underline'
  },
});

export default Footer;
