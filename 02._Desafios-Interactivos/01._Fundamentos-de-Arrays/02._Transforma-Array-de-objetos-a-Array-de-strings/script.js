/*¡Recuerde usar el modo 'estricto' en todos los scripts ahora!
Puede usar el modo estricto en todos sus programas. Te ayuda a escribir código más limpio,
como evitar que uses variables no declaradas. (https://www.w3schools.com/js/js_strict.asp)*/
'use strict';

//**Desafío 02.- Transforma un Array de objetos a un Array de strings

/*  En este desafío tienes un array de objetos que representan datos de personas con los siguientes atributos:

name
lastName
age

El reto aquí es retornar un array de strings con los nombres, la solución debería tener un input y output como los siguientes:

Input

solution([
  {
    name: 'Nicolas',
    lastName: 'Molina',
    age: 28
  },
  {
    name: 'Valentina',
    lastName: 'Molina',
    age: 19
  },
  ...
]);

Output

['Nicolas', 'Valentina']

*/

//Solución 1 (Mi solución)
//=========================

function solution(array) {
  const ouput = array.map((a) => a.name);
  return ouput;
}

console.log(
  solution([
    {
      name: 'Nicolas',
      lastName: 'Molina',
      age: 28,
    },
    {
      name: 'Valentina',
      lastName: 'Molina',
      age: 19,
    },
  ])
); 

// ['Nicolas', 'Valentina']

// Otras Soluciones

//Solución 2 
//=========================

// function solution(array) {
//   const ouput = array.map(({name}) => name);
//   return ouput;
//}



//Lecturas de Referencia 
//======================

//MDN Web Docs
//=============

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// Stack OverFlow
//=================

//https://stackoverflow.com/questions/19590865/from-an-array-of-objects-extract-value-of-a-property-as-array