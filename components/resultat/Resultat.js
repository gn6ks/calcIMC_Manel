import React from 'react';

import {Text, View} from 'react-native';
import {valoracioIMC, pesoIdeal} from '../../utils/Utils';

/**
 * Component stateless que mostra 
 *  - el missatge corresponent segons el IMC i també mostra l'IMC calculat
 * @param {Object} props - Propietats del que rep el component.
 * @param {float} props.imc - l'IMC calculat
 *
 * @example
 * <Resultat imc=34.5 />
 */
const Resultat = props => {
  const valoracio = valoracioIMC(props.imc);
  const pesoIdealObj = pesoIdeal(props.altura);
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>
        Tens un IMC de {parseFloat(props.imc).toFixed(2)}
      </Text>
      <Text style={{color: valoracio.color, fontSize: 20}}>
        {valoracio.msg}
      </Text>
      <Text style={{fontSize: 20}}>
        Tu peso ideal esta entre {parseFloat(pesoIdealObj.min).toFixed(2)} kg y {parseFloat(pesoIdealObj.max).toFixed(2)} kg
      </Text>
    </View>
  );
};
export default Resultat;