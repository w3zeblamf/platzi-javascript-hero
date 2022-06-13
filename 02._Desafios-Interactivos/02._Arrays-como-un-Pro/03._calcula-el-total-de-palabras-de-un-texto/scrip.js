/*¡Recuerde usar el modo 'estricto' en todos los scripts ahora!
Puede usar el modo estricto en todos sus programas. Te ayuda a escribir código más limpio,
como evitar que uses variables no declaradas. (https://www.w3schools.com/js/js_strict.asp)*/
'use strict';


//**Desafío 03.- Calcula el total de palabras de un texto
//**===================================================================

/* 
En este desafío tienes array de strings y cada línea es un fragmento, el Zen de Python, tu reto es hacer un método que retorne el número de palabras totales que tiene el array.

La solución debería tener un input y output como los siguientes:

Input

solution([
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
]);

Output

20

*/

// Solución 1 (Mi Solución)

function solution(lines) {
	const arrdivition = lines.map(line => line.split(' '));
	console.log(arrdivition)
	const arrSeparation = arrdivition.flat()
	console.log(arrSeparation)
	const wordCount = arrSeparation.length
	return wordCount

};

console.log(
	solution([
		'Beautiful is better than ugly',
		'Explicit is better than implicit',
		'Simple is better than complex',
		'Complex is better than complicated',
	])
);

// Otras Soluciones

// Solución 2 (Platzi)
//=========================

function solution(lines){
  return lines.flatMap(line => line.split(' ')).length;
}; 

console.log(
	solution([
		'Beautiful is better than ugly',
		'Explicit is better than implicit',
		'Simple is better than complex',
		'Complex is better than complicated',
	])
);

//Lecturas de Referencia 
//======================

//MDN Web Docs
//=============
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split