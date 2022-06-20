/*¡Recuerde usar el modo 'estricto' en todos los scripts ahora!
Puede usar el modo estricto en todos sus programas. Te ayuda a escribir código más limpio,
como evitar que uses variables no declaradas. (https://www.w3schools.com/js/js_strict.asp)*/
'use strict';


//**Desafío 07.- Retorna los valores únicos de una lista
//**===================================================================

/* 
En este desafío tienes un array de números positivos y negativos, tu reto es retornar un array ordenado de menor a mayor y dejando los valores sin que se repitan números.

La solución debería tener un input y output como los siguientes:

Input

solution([1, 2, -3, -1, 2, 4, 4, 1, 45, -1]);

Output

[ -3, -1, 1, 2, 4, 45 ]
*/

// Solución 1 (Mi Solución)

function solution(array) {

	const unicValues = array.sort((a, b) => a - b)
	const setValues = new Set(unicValues)
	return [...setValues]

}

console.log(
	solution([1, 2, -3, -1, 2, 4, 4, 1, 45, -1]) // [-3, -1, 1, 2, 4, 45]
);


// Otras Soluciones

// Solución 2 (Platzi)
//=========================

function solution2(array){
  return array
    .filter((item, i, array) => array.indexOf(item) === i)
    .sort((a,b) => a - b);
}; 

console.log(
	solution2([1, 2, -3, -1, 2, 4, 4, 1, 45, -1]) // [-3, -1, 1, 2, 4, 45]
);

//Lecturas de Referencia 
//======================

//MDN Web Docs
//=============

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
//https://developer.mozilla.org/es/docs/Web/API/Element/setAttribute
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

// Stack Overflow
//================
//https://es.stackoverflow.com/questions/168678/como-encontrar-repetidos-en-un-array-javascript#:~:text=Hola%20puedes%20utilizar%20el%20un%20Set%20para%20remover,y%20puded%20ser%20iterado%20de%20la%20siguiente%20manera%3A
