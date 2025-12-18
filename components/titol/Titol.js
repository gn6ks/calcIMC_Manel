
import React from 'react';

import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
/**
 * Component, stateless, per a crear un Titol amb dues linies una baix de l'altra
 * tal i com demana l'enunciat
 * @example
 * <Titol />
 */
const Titol = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text variant="headlineLarge"> Calculadora</Text>
      <View style={styles.lletresDeColors}>
        <Text variant="headlineLarge" style={styles.titol_r}>
          I
        </Text>
        <Text variant="headlineLarge" style={styles.titol_g}>
          M
        </Text>
        <Text variant="headlineLarge" style={styles.titol_b}>
          C
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titol_r: {
    fontWeight: 'bold',
    color: 'red',
  },
  titol_g: {
    fontWeight: 'bold',
    color: 'green',
  },
  titol_b: {
    fontWeight: 'bold',
    color: 'blue',
  },
  lletresDeColors: {
    flexDirection: 'row',
    justifycontent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
});

export default Titol;
