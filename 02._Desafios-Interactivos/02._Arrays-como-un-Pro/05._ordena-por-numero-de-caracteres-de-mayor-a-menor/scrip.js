/*¡Recuerde usar el modo 'estricto' en todos los scripts ahora!
Puede usar el modo estricto en todos sus programas. Te ayuda a escribir código más limpio,
como evitar que uses variables no declaradas. (https://www.w3schools.com/js/js_strict.asp)*/
'use strict';


//**Desafío 05.- Ordena por número de caracteres de mayor a menor
//**===================================================================

/* 
Tienes un array con palabras y tienes que retornar un array ordenado de la palabra con menos caracteres a la palabra con más caracteres.

La solución debería funcionar algo similar:

solution([
  "Hola",
  "Viajar",
  "Sol",
  "Aprender"
]);

Output

[
  "Sol",
  "Hola",
  "Viajar",
  "Aprender"
]
*/

// Solución 1 (Mi Solución)

//Ordena por número de caracteres de menor a mayor
function solution(array) {
  const arrOrder = array.sort((a, b) => a.length - b.length);
  return arrOrder;
}

console.log(solution(['Hola', 'Viajar', 'Sol', 'Aprender'])); 
// ["Sol", "Hola", "Viajar", "Aprender"]


// Otras Soluciones

// Solución 2 
//=========================

//Ordena por número de caracteres de mayor a menor
// function solution2(array) {
//   const arrOrder = array.sort((a, b) => b.length - a.length);
//   return arrOrder;
// }

// console.log(solution2(['Hola', 'Viajar', 'Sol', 'Aprender'])); 
// ["Aprender", "Viajar", "Hola", "Sol"]

//Lecturas de Referencia 
//======================

//MDN Web Docs
//=============

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
