/*¡Recuerde usar el modo 'estricto' en todos los scripts ahora!
Puede usar el modo estricto en todos sus programas. Te ayuda a escribir código más limpio,
como evitar que uses variables no declaradas. (https://www.w3schools.com/js/js_strict.asp)*/
'use strict';


//**Desafío 11.- Edita un elemento sin modificar el array original
//**===================================================================

/* 
En este desafío tienes un array de números y tienes que modificar un valor de ese array en una posición específica ¿Sencillo? Pero debes tener en cuenta que no puedes cambiar el array original.

Un ejemplo sería enviar el array [1, 2, 3] y queremos modificar la posición 0 con el valor 'change', esto me debería retornar ['change', 2, 3] pero el array enviando no debe ser modificado, es decir debe mantenerse con su estado original de [1, 2, 3]

Input

solution([1, 2, 3], 0, "change");
solution(["A", "B", "C"], 1, 1);

Output

["change", 2, 3]
["A", 1, "C"]
*/

// Solución 1 (Mi Solución)

function solution(array, index, newValue) {
  const addNewItem = [
    ...array.slice(0, index),
    newValue,
    ...array.slice(index + 1),
  ];
  return addNewItem;
}

console.log(solution([1, 2, 3], 0, 'change'));
console.log(solution(["A", "B", "C"], 1, 1));



// Otras Soluciones

// Solución 2 (Platzi)
//=========================

// function solution(array, index, newValue){
//   return array.map((item, i) => {
//     if (i === index) {
//       return newValue;
//     }
//     return item;
//   });
// } 

//solution([1, 2, 3], 0, "change");
//solution(["A", "B", "C"], 1, 1);

//Lecturas de Referencia 
//======================

//MDN Web Docs
//=============
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
