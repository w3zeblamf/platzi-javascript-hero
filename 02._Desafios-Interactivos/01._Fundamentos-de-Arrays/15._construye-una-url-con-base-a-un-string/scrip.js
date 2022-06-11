/*¡Recuerde usar el modo 'estricto' en todos los scripts ahora!
Puede usar el modo estricto en todos sus programas. Te ayuda a escribir código más limpio,
como evitar que uses variables no declaradas. (https://www.w3schools.com/js/js_strict.asp)*/
'use strict';


//**Desafío 15.- Construye una URL con base a un string
//**===================================================================

/* 
En este desafío vas a recibir el título de un artículo y tú debes transformarlo en un formato de URL en donde normalmente se transforma todo en minúscula y se cambian los espacios por un guion (-), por ejemplo: Curso de arrays => curso-de-arrays

La solución debería tener un input y output como los siguientes:

solution("La forma de correr Python");
solution("La API para nunca parar de aprender");
solution("Curso de arrays");

Output

"la-forma-de-correr-python"
"la-api-para-nunca-parar-de-aprender"
"curso-de-arrays"

*/


// Solución 1 (Mi Solución)

function solution(title) {
  const arrToURL = title.toLowerCase().split(' ').join('-');
  return arrToURL;
}

console.log(solution('La forma de correr Python'));
console.log(solution('La API para nunca parar de aprender'));
console.log(solution("Curso de arrays"));


// Otras Soluciones

// Solución 2 
//=========================
// function solution(title){
//   return title.split(' ').join('-').toLowerCase();
// }; 

//Lecturas de Referencia 
//======================

//MDN Web Docs
//=============
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join