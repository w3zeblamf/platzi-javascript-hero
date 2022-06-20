/*¡Recuerde usar el modo 'estricto' en todos los scripts ahora!
Puede usar el modo estricto en todos sus programas. Te ayuda a escribir código más limpio,
como evitar que uses variables no declaradas. (https://www.w3schools.com/js/js_strict.asp)*/
'use strict';

//**Desafío 04.- Retorna solo palabras de 4 letras y más.
//**=====================================================

/* 
Tienes un array con palabras, tu desafío es retornar un array solo con las que cumplan con la condición de tener 4 o más letras.

La solución debería tener un input y output como los siguientes:

solution(['amor', 'sol', 'piedra', 'día']);

Output

[ 'amor', 'piedra' ]
*/
//Solución 1 (My )Solution
//=========================
function solution(array) {
	const arrOutput = array.filter(word => word.length >= 4);
	return arrOutput
};

console.log(solution(['amor', 'sol', 'piedra', 'día']));

// Otras Soluciones

//Solución 2 
//=========================


//Lecturas de Referencia 
//======================

//MDN Web Docs
//=============
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter