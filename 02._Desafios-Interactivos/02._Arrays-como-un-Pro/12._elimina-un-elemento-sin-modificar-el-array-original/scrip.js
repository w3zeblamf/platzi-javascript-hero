/*¡Recuerde usar el modo 'estricto' en todos los scripts ahora!
Puede usar el modo estricto en todos sus programas. Te ayuda a escribir código más limpio,
como evitar que uses variables no declaradas. (https://www.w3schools.com/js/js_strict.asp)*/
'use strict';


//**Desafío 12.- Elimina un elemento sin modificar el array original
//**===================================================================

/* 
En este desafío tienes un array de números y tienes que eliminar un elemento de ese array en una posición específica ¿Sencillo? Pero debes tener en cuenta que no puedes cambiar el array original.

Un ejemplo sería enviar el array [1, 2, 3] y queremos eliminar la posición 0, esto me debería retornar [2, 3] pero el array enviando no debe ser modificado, es decir debe mantenerse con su estado original de [1, 2, 3]

Input

solution([1, 2, 3], 0);
solution(["A", "B", "C"], 1);

Output

[2, 3]
["A", "C"]
*/

// Solución 1 (Mi Solución)

function solution(array, delIndex) {
	const deleteItem = [
		...array.slice(0, delIndex),
		...array.slice(delIndex + 1),
	];
	return deleteItem;
}

console.log(solution([1, 2, 3], 0));
console.log(solution(["A", "B", "C"], 1));


// Otras Soluciones

// Solución 2 (Platzi)
//=========================

function solution(array, index){
  return array.filter((item, i) =>  i !== index)
}; 

console.log(solution([1, 2, 3], 0));
console.log(solution(["A", "B", "C"], 1));


//Lecturas de Referencia 
//======================

//MDN Web Docs
//=============

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

//https://www.peanutbutterjavascript.com/posts/update-arrays-without-mutating-the-original?utm_source=pocket_mylist