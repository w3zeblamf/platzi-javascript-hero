/*¡Recuerde usar el modo 'estricto' en todos los scripts ahora!
Puede usar el modo estricto en todos sus programas. Te ayuda a escribir código más limpio,
como evitar que uses variables no declaradas. (https://www.w3schools.com/js/js_strict.asp)*/
'use strict';


//**Desafío 09.- Calcula la frecuencia con la que aparece un número
//**===================================================================

/* 
En este desafío tienes un array de números positivos y negativos, tu reto es retornar un objeto con el número de veces que aparece un número.

La solución debería tener un input y output como los siguientes:

Input

solution([1, 2, -3, -1, 2, 4, 4, 1, 45, -1]);

Output

{
  '1': 2,
  '2': 2,
  '4': 3,
  '45': 1,
  '-3': 1,
  '-1': 2
}
*/

// Solución 1 (My Solution )

function solution(array) {
	return array.reduce((newObj, number) => {
		newObj[number] ? (newObj[number] += 1) : (newObj[number] = 1);

		return newObj;
	}, {});
}

console.log(solution([1, 2, -3, -1, 2, 4, 4, 1, 45, -1]));


// Otras Soluciones

// Solución 2 (Platzi)
//=========================

// function solution(array){
//   return array.reduce((obj, item) => {
//     if (obj[item]) {
//       obj[item] += 1;
//     } else {
//       obj[item] = 1;
//     }
//     return obj;
//   }, {});
// } 

//console.log(solution([1, 2, -3, -1, 2, 4, 4, 1, 45, -1]));


//Lecturas de Referencia 
//======================

//MDN Web Docs
//=============

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else