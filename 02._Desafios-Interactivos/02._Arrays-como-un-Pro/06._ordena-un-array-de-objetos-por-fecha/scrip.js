/*¡Recuerde usar el modo 'estricto' en todos los scripts ahora!
Puede usar el modo estricto en todos sus programas. Te ayuda a escribir código más limpio,
como evitar que uses variables no declaradas. (https://www.w3schools.com/js/js_strict.asp)*/
'use strict';


//**Desafío 06.- Ordena un array de objetos por fecha
//**===================================================================

/* 
Tienes un array de objetos que representan personas con los siguientes atributos:

name: string
dateOfBirth: Date
El reto es retornar una lista de los nombres de las personas ordenadas por la fecha de nacimiento de la más reciente a la más antigua.

La solución debería tener un input y output como los siguientes:

Input

solution([
  {
    name: "Nicolas",
    dateOfBirth: new Date(1993, 6, 9),
  },
  {
    name: "Santiago",
    dateOfBirth: new Date(2018, 6, 11),
  },
  {
    name: "Zulema",
    dateOfBirth: new Date(1994, 10, 7),
  }
]);

Output

["Santiago", "Zulema", "Nicolas"]
*/


// Solución 1 (Mi Solución)

function solution(array) {
  const arrData = array.sort((a, b) => b.dateOfBirth - a.dateOfBirth).map(x => x.name);
  return arrData

};

console.log(solution([{
    name: "Nicolas",
    dateOfBirth: new Date(1993, 6, 9),
  },
  {
    name: "Santiago",
    dateOfBirth: new Date(2018, 6, 11),
  },
  {
    name: "Zulema",
    dateOfBirth: new Date(1994, 10, 7),
  },

]));


// Otras Soluciones

// Solución 2 (Platzi)
//=========================

// function solution(array) {
//   const arrData = array.sort((a, b) => b.dateOfBirth.getTime() - a.dateOfBirth.getTime()).map(x => x.name);
//   return arrData

// };


// console.log(solution([{
//     name: "Nicolas",
//     dateOfBirth: new Date(1993, 6, 9),
//   },
//   {
//     name: "Santiago",
//     dateOfBirth: new Date(2018, 6, 11),
//   },
//   {
//     name: "Zulema",
//     dateOfBirth: new Date(1994, 10, 7),
//   },

// ]));


//Lecturas de Referencia 
//======================

//MDN Web Docs
//=============

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort