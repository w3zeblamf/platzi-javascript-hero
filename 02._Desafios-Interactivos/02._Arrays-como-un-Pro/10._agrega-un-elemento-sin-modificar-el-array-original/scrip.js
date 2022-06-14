/*¡Recuerde usar el modo 'estricto' en todos los scripts ahora!
Puede usar el modo estricto en todos sus programas. Te ayuda a escribir código más limpio,
como evitar que uses variables no declaradas. (https://www.w3schools.com/js/js_strict.asp)*/
'use strict';


//**Desafío 10.- Agrega un elemento sin modificar el array original
//**===================================================================

/* 
En este desafío tienes un array de números y tienes que agregar una nueva propiedad al final del array ¿Sencillo? Pero debes tener en cuenta que no puedes cambiar el array original.

Un ejemplo sería enviar el array [1, 2, 3] y agregar el número 4, esto me debería retornar [1, 2, 3, 4] pero el array enviando no debe ser modificado, es decir debe mantenerse con su estado original de [1, 2, 3].

Input

solution([1, 2, 3], 4);
solution(["A", "B"], "C");

Output

[1, 2, 3, 4]
["A", "B", "C"]
*/

// Solución 1  (Platzi)

function solution(array, newElement) {
	const newArray = [...array, newElement]
	return newArray
};

console.log(solution([1, 2, 3], 4))


// Otras Soluciones

// Solución 2
//=========================


//Lecturas de Referencia 
//======================

//MDN Web Docs
//=============
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
