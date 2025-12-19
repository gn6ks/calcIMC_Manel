import React, {useState} from 'react';

import {StyleSheet, View, Keyboard} from 'react-native';
import {TextInput, Button, HelperText} from 'react-native-paper';
import {comprovaPes, comprovaAlt, calculaIMC} from '../../utils/Utils';

/**
 * Aquest component recull les dades d'usuari per a poder calcular
 * l'index IMC. En cas que les dades introduïdes no siguen correctes,
 * mostra un missatge a l'usuari informant del format de les dades demanades.
 * Quan les dades siguen correctes mostrarà un botó que permetrà calcular l'IMC. 
 *
 * @component
 *
 * @requires module:utils/comprovaPes
 * @requires module:utils/comprovaAlt
 * @requires module:utils/comprovaAlt
 * @param {Object} props - Propietats del que rep el component.
 * @param {string} props.comunicaIMC - Funció que utilitza este component per a comunicar el IMC calculat al component pare (comunicació fill-pare)
 *  
 * @example
 * <Calculadora comunicaIMC=={rebreIMC}/>
 */
const Calculadora = (props) => {

  const [pes, canviaPes] = useState(0.0); //conté el pes introduït per l'usuari
  const [alt, canviaAlt] = useState(0.0); // conté l'alçada introduïda per l'usuari
  const [errorPesMsg, canviaErrorPesMsg] = useState(''); //conté el missatge d'error per al pes incorrecte
  const [errorAltMsg, canviaErrorAltMsg] = useState(''); //conté el missatge d'error per a l'alçada incorrecta


/**
 *  Aquesta funció rep un pes, i comprova si té el format adient.
 * @return {Object} props - Propietats del objecte que torna.
 * @param {string} props.correcte - True o false, indica si el pes compleix el format establert o no
 * @param {string} props.msg - Missatge d'error (només en cas que props.correcte siga false).
 *
**/
const comprovaIActualitzaPes = pes => {
    const resultatComprovacio = comprovaPes(pes);
    canviaPes(pes);
    canviaErrorPesMsg(resultatComprovacio.msg);
    props.comunicaIMC(null);
  };

/**
 *  Aquesta funció rep una alçada, i comprova si té el format adient.
 * @return {Object} props - Propietats del objecte que torna.
 * @param {string} props.correcte - True o false, indica si l'alçada compleix el format establert o no
 * @param {string} props.msg - Missatge d'error (nomén en cas que props.correcte siga true).
 *
**/
  const comprovaIActualitzaAlt = alt => {
    const resultatComprovacio = comprovaAlt(alt);
    canviaAlt(alt);
    canviaErrorAltMsg(resultatComprovacio.msg);
    props.comunicaIMC(null);
  };

/**
 *  Aquesta funció ens indica si tant el pes com l'alçada són correctes.
 *  Ens permetrà mostrar el botó calcular o no.
 * @return {boolean} - true, si les dades són correctes, false si no ho són.
 *
**/
  const dadesCorrectes = () => {
    if (
      errorPesMsg.length === 0 &&
      errorAltMsg.length === 0 &&
      parseFloat(pes) > 0.0 &&
      parseFloat(alt) > 0.0
    )
      return true;
    else return false;
  };

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.contenidorMissatges}>
          <TextInput
            style={{fontSize: 20}}
            outlineStyle={{borderColor: 'green'}}
            mode="outlined"
            label="Pes (kg)"
            keyboardType="numeric"
            onChangeText={nouPes => {
              comprovaIActualitzaPes(nouPes);
            }}
            onBlur={() => Keyboard.dismiss()}
            right={<TextInput.Affix text="Kg." />}
          />
          <TextInput
            style={{fontSize: 20}}
            outlineStyle={{borderColor: 'orange'}}
            mode="outlined"
            label="Alçada (m)"
            keyboardType="numeric"
            onChangeText={novaAlt => {
              comprovaIActualitzaAlt(novaAlt);
            }}
            onBlur={() => Keyboard.dismiss()}
            right={<TextInput.Affix text="m." />}    
          />
        </View>
        <View style={styles.contenidorMissatges}>
          <HelperText type="error" visible={true} style={{fontSize: 15, flex:1}}>
            {errorPesMsg}
          </HelperText>
          <HelperText type="error" visible={true} style={{fontSize: 15, flex:1}}>
            {errorAltMsg}
          </HelperText>
        </View>
      </View>
      {dadesCorrectes() && (
        <View style={{marging: 15, padding: 15}}>
          <Button
            labelStyle={{fontSize: 20, fontWeight: 'bold'}}
            icon="calculator"
            mode="contained"
            onPress={() => {Keyboard.dismiss(); props.comunicaIMC(calculaIMC(pes, alt))}}>
            Calcular
          </Button>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contenidorMissatges: {
    flex: 1,
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

export default Calculadora;