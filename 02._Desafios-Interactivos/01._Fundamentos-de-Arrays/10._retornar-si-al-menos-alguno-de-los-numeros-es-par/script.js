/*¡Recuerde usar el modo 'estricto' en todos los scripts ahora!
Puede usar el modo estricto en todos sus programas. Te ayuda a escribir código más limpio,
como evitar que uses variables no declaradas. (https://www.w3schools.com/js/js_strict.asp)*/
'use strict';

//**Desafío 10.- Retornar si al menos alguno de los números es par
//**================================================================

/* 
En este desafío tienes un array de números y debes retornar true si dentro de los números de ese array al menos uno es un número par.

La solución debería tener un input y output como los siguientes:

solution([1, 3, 5, 7, 10, 11]);
solution([1, 3, 5]);

Output

true
false
*/


// Solución 1 (Mi Solución)

function solution(numbers) {
	const evenNumber = numbers.filter(value => value % 2 === 0)
	return evenNumber > 0
}

console.log(solution([1, 3, 5, 7, 10, 11])); // true
console.log(solution([1, 3, 5])); // false 


// Otras Soluciones

// Solución 2 
//=========================
// function solution(numbers){
//   return numbers.some((item) => item % 2 === 0);
// }; 

// console.log(solution([1, 3, 5, 7, 10, 11])); // true
// console.log(solution([1, 3, 5])); // false 



//Lecturas de Referencia 
//======================

//MDN Web Docs
//=============

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some