import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Navbar from './Components/Navbar/Navbar';
import Accueil from './Pages/Accueil';

export default function App() {
  return (
    <View style={styles.container}>
      <Accueil />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  tinyLogo: {
    width: 150,
    height: 160,
    marginTop: 15,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
