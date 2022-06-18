/*¡Recuerde usar el modo 'estricto' en todos los scripts ahora!
Puede usar el modo estricto en todos sus programas. Te ayuda a escribir código más limpio,
como evitar que uses variables no declaradas. (https://www.w3schools.com/js/js_strict.asp)*/
'use strict';


//**Desafío 02.- Transforma un array de arrays en uno de un solo nivel
//**===================================================================

/* 
En este desafío tienes un array que contiene otros arrays internos, debes retornar un array que tenga los elementos de los otros arrays eliminando los arrays internos y dejando solo los valores, normalmente a esto le llamamos aplanar el array o "Flattening Algorithm".

La solución debería tener un input y output como los siguientes:

Input

solution([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

Output

[1, 2, 3, 4, 5, 6, 7, 8, 9]
*/


// Solución 1 (Mi Solución)

function solution(array) {
	const arrConcat = array.flat();
	return arrConcat;
}

console.log(
	solution([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	])
);


// Otras Soluciones

// Solución 2 
//=========================



//Lecturas de Referencia 
//======================

//MDN Web Docs
//=============
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat