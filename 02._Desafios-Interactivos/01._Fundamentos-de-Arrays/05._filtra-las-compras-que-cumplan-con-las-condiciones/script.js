/*¡Recuerde usar el modo 'estricto' en todos los scripts ahora!
Puede usar el modo estricto en todos sus programas. Te ayuda a escribir código más limpio,
como evitar que uses variables no declaradas. (https://www.w3schools.com/js/js_strict.asp)*/
'use strict';

//**Desafío 05.- Filtra las compras que cumplan con las condiciones.
//**================================================================

/* 
Tienes un array de ordenes de compra con los siguientes atributos:

customerName: string
total: number
delivered: boolean

Debes filtrar todas las órdenes de compra que cumplan con la condición de tener un total mayor o igual a 100 y además que el estado delivered sea "true".

La solución debería tener un input y output como los siguientes:

solution([
  {
    customerName: "Nicolas",
    total: 100,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  ...
]);

Output

[
  {
    customerName: "Nicolas",
    total: 100,
    delivered: true,
  },
]
*/

//Solución 1 (Mi Solución)

function solution(array) {
	const filtro = array.filter(producto => producto.total >= 100 && producto.delivered)
	return filtro
};

console.log(solution([
	{
		customerName: "Nicolas",
		total: 100,
		delivered: true,
	},
	{
		customerName: "Zulema",
		total: 120,
		delivered: false,
	},
]));


// Otras Soluciones

//Solución 2 
//=========================



//Lecturas de Referencia 
//======================

//MDN Web Docs
//=============
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter