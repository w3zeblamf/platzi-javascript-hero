/*¡Recuerde usar el modo 'estricto' en todos los scripts ahora!
Puede usar el modo estricto en todos sus programas. Te ayuda a escribir código más limpio,
como evitar que uses variables no declaradas. (https://www.w3schools.com/js/js_strict.asp)*/
'use strict';


//**Desafío 04.- Ordena números de mayor a menor
//**==============================================

/* 
En este desafío tienes un array de números el cual va a tener tanto números negativos como positivos y el reto es usando la función sort de JavaScript ordenarlos de mayor a menor.

La solución debería tener un input y output como los siguientes:

Input

solution([3, 1, 11, 5, 2, 7, 8]);

Output

[ 11, 8, 7, 5, 3, 2, 1 ]
*/

// Solución 1 (Mi Solución)

//Orden de mayor a menor
function solution(array) {
	const arrOrder = array.sort((a, b) => b - a);
	return arrOrder;
}

console.log(solution([3, 1, 11, 5, 2, 7, 8])); //  [11, 8, 7, 5, 3, 2, 1]


// Otras Soluciones

// Solución 2 
//=========================

//Orden de menor a mayor
function solution2(array) {
  const arrOrder = array.sort((a, b) => a - b); //  [1, 2, 3, 5, 7, 8, 11]
  return arrOrder;
}

//Lecturas de Referencia 
//======================

//MDN Web Docs
//=============
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
