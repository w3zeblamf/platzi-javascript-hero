/*¡Recuerde usar el modo 'estricto' en todos los scripts ahora!
Puede usar el modo estricto en todos sus programas. Te ayuda a escribir código más limpio,
como evitar que uses variables no declaradas. (https://www.w3schools.com/js/js_strict.asp)*/
'use strict';

//**Desafío 01.- Transforma un Array de objetos a un Array de strings

/* 
En este desafío tienes un array de números, usando la función map debes retornar todos los números del array multiplicados por dos.

La solución debería tener un input y output como los siguientes:

Input

solution([2, 4, 5, 6]);

Output

[4,8,10,12]
*/

//Solución 1 (Mi solución)

function solution(array) {
  const mapArry = array.map((arrIndex) => arrIndex * 2);
  return mapArry
}

console.log(solution([2, 4, 5, 6])); // [4,8,10,12]


//Referencia MDN Web Docs
//=========================
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map