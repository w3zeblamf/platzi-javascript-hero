/*¡Recuerde usar el modo 'estricto' en todos los scripts ahora!
Puede usar el modo estricto en todos sus programas. Te ayuda a escribir código más limpio,
como evitar que uses variables no declaradas. (https://www.w3schools.com/js/js_strict.asp)*/
'use strict';


//**Desafío 06.- Busca dentro de un string y descubre si ¿Tiene la clave?
//**=====================================================================

/* 
En este desafío vas a tener un string y debes buscar si ese string tiene un término de búsqueda, por ejemplo verificar si dentro de la frase "Ana lava la tina" está el término "ana" y si lo tiene retornar un true de lo contrario retornar un false, debes tener en cuenta que debe encontrar coincidencias, así la el término de búsqueda sea mayúscula o minúscula.

La solución debería tener un input y output como los siguientes:

solution("Ana lava la tina", "ana");
solution("Santiago", "tiago");
solution("Nicolas", "ana");

Output

true
true
false
*/

//Solución 1 (Mi solución)

function solution(word, query) {
  const descubre = word.toLowerCase().includes(query.toLowerCase());
  return descubre;
}

console.log(solution('Ana lava la tina', 'ana'));
console.log(solution('Santiago', 'tiago'));
console.log(solution('Nicolas', 'ana'));


// Otras Soluciones

//Solución 2 
//=========================


//Lecturas de Referencia 
//======================

//MDN Web Docs
//=============
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes


