import React from 'react';

import {Text, View} from 'react-native';
import {valoracioIMC} from '../../utils/Utils';

/**
 * Component stateless que mostra el missatge corresponent al IMC i l'IMC calculat
 * @param {float} Props
 * @example
 * <Resultat imc=34.5 />
 */
const Resultat = props => {
  const valoracio = valoracioIMC(props.imc);
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>
        Tens un IMC de {parseFloat(props.imc).toFixed(2)}
      </Text>
      <Text style={{color: valoracio.color, fontSize: 20}}>
        {valoracio.msg}
      </Text>
    </View>
  );
};
export default Resultat;