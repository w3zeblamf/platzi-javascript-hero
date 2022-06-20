/*¡Recuerde usar el modo 'estricto' en todos los scripts ahora!
Puede usar el modo estricto en todos sus programas. Te ayuda a escribir código más limpio,
como evitar que uses variables no declaradas. (https://www.w3schools.com/js/js_strict.asp)*/
'use strict';

//**Desafío 08.- Calcula la suma total de los elementos
//**===================================================================================

/* 
Tienes un array de números y debes retornar la suma de todos los valores en él.

La solución debería tener un input y output como los siguientes:

solution([1, 1, 1]);
solution([2, 4, 8]);

Output

3
14
*/

//Solución 1 (Mi Solución)

function solucion(numbers) {
  const valorInicial = 0;
  const suma = numbers.reduce((a, b) => a + b, valorInicial);
  return suma;
}

console.log(solucion([1, 1, 1])); // 3
console.log(solucion([2, 4, 8])); // 14


// Otras Soluciones

//Solución 2 
//=========================



//Lecturas de Referencia 
//======================

//MDN Web Docs
//=============
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce