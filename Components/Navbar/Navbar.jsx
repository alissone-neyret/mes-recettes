import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Navbar = () => {
  return (
    <View style={styles.container}>
      <Button title="Mes recettes" />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        width: '100%',
    }
})

export default Navbar;
