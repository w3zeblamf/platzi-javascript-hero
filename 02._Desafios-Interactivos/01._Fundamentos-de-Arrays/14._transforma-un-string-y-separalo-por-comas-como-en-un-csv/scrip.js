/*¡Recuerde usar el modo 'estricto' en todos los scripts ahora!
Puede usar el modo estricto en todos sus programas. Te ayuda a escribir código más limpio,
como evitar que uses variables no declaradas. (https://www.w3schools.com/js/js_strict.asp)*/
'use strict';


//**Desafío 14.- Transforma un string y sepáralo por comas, como en un CSV
//**======================================================================

/* 
En este desafío vas a recibir un array de string y debes retornar un string en donde cada elemento del array esté separado por comas.

La solución debería tener un input y output como los siguientes:

solution(["amor", "sol", "piedra", "día"]);
solution(["diamonds", "hearts", "spades"]);

Output

"amor,sol,piedra,día"
"diamonds,hearts,spades"
*/


// Solución 1 (Mi Solución)

function solution(words) {
	const arrToStr = words.toString();
	return arrToStr
}
console.log(solution(["amor", "sol", "piedra", "día"]));
console.log(solution(['diamonds', 'hearts', 'spades']));


// Otras Soluciones

// Solución 2 
//=========================


//Lecturas de Referencia 
//======================

//MDN Web Docs
//=============
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString
