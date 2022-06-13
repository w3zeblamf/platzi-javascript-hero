/*¡Recuerde usar el modo 'estricto' en todos los scripts ahora!
Puede usar el modo estricto en todos sus programas. Te ayuda a escribir código más limpio,
como evitar que uses variables no declaradas. (https://www.w3schools.com/js/js_strict.asp)*/
'use strict';


//**Desafío 07.- Ordena una lista de nombres por el apellido
//**===================================================================

/* 
En este desafío tienes un array con una lista de strings que representan el nombre y apellido de varios usuarios, el reto es retornar ese array ordenado alfabéticamente por el apellido.

La solución debería tener un input y output como los siguientes:

Input

solution([
  "Nicolas Molina",
  "Andrea Perez",
  "Zulema Vicente",
  "Juan Amador"
]);

Output

[
  "Juan Amador",
  "Nicolas Molina",
  "Andrea Perez",
  "Zulema Vicente"
]
*/

// Solución 1 (Platzi)

function solution(array) {
	return array.sort((a, b) => {
		const lastNameA = a.split(' ')[1];
		const lastNameB = b.split(' ')[1];
		return lastNameA.localeCompare(lastNameB);
	});
}; 

console.log(solution(['Nicolas Molina', 'Andrea Perez', 'Zulema Vicente', 'Juan Amador'])
);


// Otras Soluciones

// Solución 2 
//=========================

//Lecturas de Referencia 
//======================

//MDN Web Docs
//=============
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//