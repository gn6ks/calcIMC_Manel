/**
 * Exemple per a practicar la comunicació fill-pare i pare-fill
 * entre components de React Native.
 * 2n curs DAM. Desenvolupament d'interfícies
 *
 * @format
 */

import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import Titol from "./components/titol/Titol";
import Calculadora from "./components/calculadora/Calculadora";
import Resultat from "./components/resultat/Resultat";
import React, { useState } from "react";

/**
 * Punt d'entrada principal de l'aplicació React Native.
 *
 * @module App
 * @description
 * Implementa una calculadora de IMC a partir d'un pes i d'una alçada
 * El component Resultat només es mostrarà quan tinguem el càlcul del
 * imc rebut des del component fill Calculadora.
 * Aquest component encapsula l'estructura general i registra la UI.
 */

const App = () => {
  const [imcRebut, canviaImcRebut] = useState(null);

  const rebreIMC = (unIMC) => {
    canviaImcRebut(unIMC);
  };

  return (
    <View>
      <StatusBar />
      <View style={{ justifyContent: "center" }}>
        <Titol />
        <Calculadora comunicaIMC={rebreIMC} />
        {imcRebut !== null && <Resultat imc={imcRebut} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
});

export default App;
