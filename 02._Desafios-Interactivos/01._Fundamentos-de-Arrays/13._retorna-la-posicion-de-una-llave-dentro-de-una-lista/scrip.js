/*¡Recuerde usar el modo 'estricto' en todos los scripts ahora!
Puede usar el modo estricto en todos sus programas. Te ayuda a escribir código más limpio,
como evitar que uses variables no declaradas. (https://www.w3schools.com/js/js_strict.asp)*/
'use strict';


//**Desafío 13.- Retorna la posición de una llave dentro de una lista
//**===================================================================

/* 
Dado un array de strings existe la palabra clave "myKey" y debes retornar la posición dentro del array en donde se encuentra este string y si no está debes retornan un false.

La solución debería tener un input y output como los siguientes:

solution(["diamonds", "myKey", "spades", "AS"]);
solution(["diamonds", "hearts", "spades"]);
solution(["myKey", "hearts", "spades"]);

Output

1
false
0
*/


// Solución 1 (Mi Solución)

function solution(words) {
  const keyPosition = words.indexOf('myKey');
  return keyPosition !== -1 ? keyPosition : false
}
console.log(solution(['diamonds', 'myKey', 'spades', 'AS'])); // 1
console.log(solution(['diamonds', 'hearts', 'spades'])); // false
console.log(solution(['myKey', 'hearts', 'spades'])); // 0


// Otras Soluciones

// Solución 2 
//=========================

function solution(words){
  const index = words.findIndex((item) => item === 'myKey')
  return index !== -1 ? index : false;
}; 

//Lecturas de Referencia 
//======================

//MDN Web Docs
//=============
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
