// Conjunt de funcions per a fer comprovacions
// Les definim fora del component Calculadora ja que 
// podran ser utilitzades per altres components de l'aplicació
/** @module Utils */

/**
 * @typedef {Object} missatgeIMC
 * @property {string} msg - El missatge a mostrar
 * @property {string}  color - El color en que es mostrarà eixe missatge
 */

/**
 * @typedef {Object} info
 * @property {boolean} correcte - Indica si el pes/alçada és correcte
 * @property {string}  msg - Indica el missatge d'error a mostrar
 */

/**
 * Valida un valor de pes introduït per l'usuari.
 *
 * Regles de validació:
 *  - El valor ha de ser un número positiu.
 *  - Pot ser un enter (ex: "50") o un decimal amb punt (ex: "50.5").
 *  - No es permet el valor 0.
 *  - El camp buit retorna un error silenciós (sense missatge), útil per inputs en temps real.
 *
 * @function comprovaPes
 * @param {string} pes - Valor del pes introduït per l'usuari com a text.
 * @returns {{correcte: boolean, msg: string}} Objecte amb el resultat de la validació:
 *   - `correcte`: indica si el valor és vàlid.
 *   - `msg`: missatge d'error en cas que el valor no sigui vàlid.
 *
 * @example
 * comprovaPes("50");
 * // → { correcte: true, msg: "" }
 *
 * @example
 * comprovaPes("0");
 * // → { correcte: false, msg: "El pes ha de ser major de 0 kg" }
 *
 * @example
 * comprovaPes("abc");
 * // → { correcte: false, msg: "Escriu el pes en Kg i amb valors positius (ex: 50.5)" }
 */

export const comprovaPes = pes => {
  //definim una expressió regular per comprovar l'entrada que introdueix l'usuari
  const pesValid = /^(\d+)$|^(\d*\.\d+)$/;

  if (pes.length > 0) {
    //No està buit el valor de pes
    if (pesValid.test(pes)) {
      if (parseFloat(pes) === 0.0) {
        return {
          correcte: false,
          msg: 'El pes ha de ser major de ' + pes + ' kg',
        };
      } else {
        return {correcte: true, msg: ''};
      }
    } else {
      return {
        correcte: false,
        msg: 'Escriu el pes en Kg i amb valors positius (ex:50.5)',
      };
    }
  } else {
    return {correcte: false, msg: ''};
  }
};

/**
 * comprova si la cadena de text introduïda com a text és correcta, segons els criteris indicats a l'enunciat
 * @function
 * @param {string} alt Rebem l'alçada introduïda per l'usuari en forma de cadena de text
 * @returns {info} Torna un objecte info
 *
 */
export const comprovaAlt = alt => {
  //definim una expressió regular per comprovar l'entrada que introdueix l'usuari
  const altValid = /^(\d+)$|^(\d*\.\d+)$/;

  if (alt.length > 0) {
    if (altValid.test(alt)) {
      if (parseFloat(alt) === 0.0) {
        return {
          correcte: false,
          msg: "L'alçada ha de ser major de " + alt + ' m.',
        };
      } else {
        return {correcte: true, msg: ''};
      }
    } else {
      return {
        correcte: false,
        msg: "Escriu l'alçada en m. i amb valors positius (ex:1.25)",
      };
    }
  } else {
    return {correcte: false, msg: ''};
  }
};

/**
 * Realitza el càlcul de l'IMC a partir d'un pes i una alçada
 * @function
 * @param {float} unPes El pes en format correcte
 * @param {float} unaAlsada L'alçada en format correcte
 * @returns {float} Torna l'imc calculat segons la formula.
 *
 */
export const calculaIMC = (unPes, unaAlsada) => {
  const unIMC = unPes / Math.pow(unaAlsada, 2);
  return unIMC;
};

/**
 * Segons un imc rebut com a paràmatre, torna el missatge que li correspon i el color en que es mostrarà el missatge.
 *
 * @function valoracioIMC
 * @param {float} unIMC - Valor numèric de l'IMC calculat.
 * @returns {{msg: string, color: string}} Objecte amb:
 *   - msg: descripció de la categoria d'IMC.
 *   - color: color recomanat per representar visualment l'estat.
 *      - green → rang saludable o lleuger risc
 *      - orange → risc moderat
 *      - red → risc elevat
 * @example
 * valoracioIMC(22);
 * // → { msg: "Normopes", color: "green" }
 *
 * @example
 * valoracioIMC(31);
 * // → { msg: "Obesitat de tipus I", color: "orange" }
 *
 */
export const valoracioIMC = unIMC => {
  let objectResultat = null;
  if (unIMC < 18.5) objectResultat = {msg: 'Pes insuficient', color: 'green'};
  else if (unIMC < 25) objectResultat = {msg: 'Normopes', color: 'green'};
  else if (unIMC < 27)
    objectResultat = {msg: 'Sobrepes grau I', color: 'green'};
  else if (unIMC < 30)
    objectResultat = {msg: 'Sobrepes grau II (preobesitat)', color: 'orange'};
  else if (unIMC < 35)
    objectResultat = {msg: 'Obesitat de tipus I', color: 'orange'};
  else if (unIMC < 40)
    objectResultat = {msg: 'Obesitat de tipus II', color: 'orange'};
  else if (unIMC < 50)
    objectResultat = {msg: 'Obesitat de tipus III (mòrbida)', color: 'red'};
  else if (unIMC >= 50)
    objectResultat = {msg: 'Obesitat de tipus IV (extrema)', color: 'red'};
  return objectResultat;
};