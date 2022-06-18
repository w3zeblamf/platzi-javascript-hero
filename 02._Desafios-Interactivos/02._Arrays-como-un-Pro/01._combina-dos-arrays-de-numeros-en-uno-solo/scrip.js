/*¡Recuerde usar el modo 'estricto' en todos los scripts ahora!
Puede usar el modo estricto en todos sus programas. Te ayuda a escribir código más limpio,
como evitar que uses variables no declaradas. (https://www.w3schools.com/js/js_strict.asp)*/
'use strict';


//**Desafío 01.- Combina dos arrays de números en uno solo
//**=======================================================

/* 
En este desafío recibirás dos arrays de números como parámetros de entrada y debes retornar un array que tenga los dos arrays unidos.

La solución debería tener un input y output como los siguientes:

Input

solution([1, 2, 3], [4, 5, 6]);
solution(["A", "B", "C"], ["D", "E", "H"]);

Output

[1, 2, 3, 4, 5 , 6]
["A", "B", "C", "D", "E", "H"]
*/


// Solución 1 (Mi Solución)
function solution(arrayA, arrayB) {
  const arrJoin = arrayA.concat(arrayB)
  return arrJoin;
}

console.log(solution([1, 2, 3], [4, 5, 6]))
console.log(solution(["A", "B", "C"], ["D", "E", "H"]))


// Otras Soluciones

// Solución 2 
//=========================

// function solution(arrayA, arrayB){
//   return [...arrayA, ...arrayB];
// }; 

// console.log(solution([1, 2, 3], [4, 5, 6]))
// console.log(solution(["A", "B", "C"], ["D", "E", "H"]))

//Lecturas de Referencia 
//======================

//MDN Web Docs
//=============
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

/* 
A better way to concatenate arrays
Array.prototype.concat() is often used to concatenate an array to the end of an existing array. Without spread syntax, this is done as:

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

Append all items from arr2 onto arr1

arr1 = arr1.concat(arr2);
Copy to Clipboard
With spread syntax this becomes:

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
arr1 is now [0, 1, 2, 3, 4, 5]

Note: Not to use 'const' otherwise, it will give TypeError (invalid assignment)
*/