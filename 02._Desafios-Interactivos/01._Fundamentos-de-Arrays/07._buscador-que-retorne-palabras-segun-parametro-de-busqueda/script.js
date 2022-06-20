/*¡Recuerde usar el modo 'estricto' en todos los scripts ahora!
Puede usar el modo estricto en todos sus programas. Te ayuda a escribir código más limpio,
como evitar que uses variables no declaradas. (https://www.w3schools.com/js/js_strict.asp)*/
'use strict';

//**Desafío 07.- Crea un buscador que retorne palabras de acuerdo parámetro de búsqueda
//**===================================================================================

/* 
Tu desafío es crear un buscador usando funciones como filter y includes, vas a tener array con palabras e tienes que retornar un array con sola las que cumplan con la condición de tener el parámetro de búsqueda.

La solución debería tener un input y output como los siguientes:

solution(["ana", "santi", "nico", "anastasia"], "an");
solution(["ana", "santi", "nico", "anastasia"], "xyz");

Output

["ana", "santi", "anastasia"]
[]
*/

//Solución 1 (Mi Solución)

function solucion(words, query) {
  const buscador = words.filter(word => word.includes(query))
  return buscador
  }
  
  console.log(solucion(["ana", "santi", "nico", "anastasia"], "an"));
  console.log(solucion(["ana", "santi", "nico", "anastasia"], "xyz"));


  //Consola: 
  //========

  //["ana", "santi", "anastasia"]
  //[]


// Otras Soluciones

//Solución 2 
//=========================



//Lecturas de Referencia 
//======================

//MDN Web Docs
//=============
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes