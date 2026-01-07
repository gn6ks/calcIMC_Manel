import React from "react";

import { Text, View } from "react-native";
import { calcularDatos } from "../../utils/Utils";

/**
 * Component stateless que mostra
 *  - el missatge corresponent segons el IMC i també mostra l'IMC calculat
 * @param {Object} props - Propietats del que rep el component.
 * @param {float} props.imc - l'IMC calculat
 *
 * @example
 * <Resultat imc=34.5 />
 */
const Resultat = (props) => {
  const datos = calcularDatos(
    props.peso,
    props.altura,
    props.edad,
    props.genero,
    props.nivelActividad
  );
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>
        Tens un IMC de {parseFloat(props.imc).toFixed(2)}
      </Text>
      <Text style={{ color: datos.imc.color, fontSize: 20 }}>
        {datos.imc.msg}
      </Text>
      <Text style={{ fontSize: 20 }}>
        Tu peso ideal esta entre {(datos.pesoIdeal.min).toFixed(2)} kg y{" "}
        {(datos.pesoIdeal.max).toFixed(2)} kg
      </Text>
      <Text style={{ color: datos.necesidad.color, fontSize: 20 }}>
        {datos.necesidad.msg}
      </Text>
      <Text style={{ fontSize: 20 }}>
        Calorias necesarias recomendadas son:{" "}
        {datos.kcalDiario.calorias.toFixed(2)} kcal.
      </Text>
      <Text style={{ fontSize: 20 }}>
        Porcentaje de grasa corporal: {datos.porcentajeGrasa.toFixed(2)} %.
      </Text>
    </View>
  );
};
export default Resultat;