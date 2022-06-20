/*¡Recuerde usar el modo 'estricto' en todos los scripts ahora!
Puede usar el modo estricto en todos sus programas. Te ayuda a escribir código más limpio,
como evitar que uses variables no declaradas. (https://www.w3schools.com/js/js_strict.asp)*/
'use strict';

//**Desafío 12.- Resuelve si dentro de una lista de cartas tienes el AS
//**===================================================================

/* 
Dado un array de string que son nombres de cartas de poker debes retornar la palabra "AS" si dentro de tu baraja tienes un "AS" y un false si no lo tienes.

La solución debería tener un input y output como los siguientes:

solution(['diamonds', 'hearts', 'spades', 'AS']);
solution(['diamonds', 'hearts', 'spades']);
*/


// Solución 1 (Mi Solución)

function solution(numbers) {
	const poker = numbers.includes('AS') ? 'AS' : false
	return poker
}

console.log(solution(['diamonds', 'hearts', 'spades', 'AS']));
console.log(solution(['diamonds', 'hearts', 'spades']));


// Otras Soluciones

// Solución 2 
//=========================

// function solution(cards){
// 	const rta = cards.find((item) => item === 'AS');
// 	return rta || false;
// }; 


//Lecturas de Referencia 
//======================

//MDN Web Docs
//=============

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find