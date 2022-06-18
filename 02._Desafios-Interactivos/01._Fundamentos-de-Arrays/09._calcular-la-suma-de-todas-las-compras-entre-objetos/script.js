/*¡Recuerde usar el modo 'estricto' en todos los scripts ahora!
Puede usar el modo estricto en todos sus programas. Te ayuda a escribir código más limpio,
como evitar que uses variables no declaradas. (https://www.w3schools.com/js/js_strict.asp)*/
'use strict';

//**Desafío 08.- Calcular la suma de todas las compras entre objetos
//**================================================================

/* 
Tienes un array de órdenes de compra con los siguientes atributos:

customerName: string
total: number
delivered: boolean
Debes retornar la suma total de todas las órdenes de compra.

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

220
*/


//Solución 1 (Mi Solución)

function solution(orders) {
  const sumaCompras = orders.map((item) => item.total).reduce((a, b) => a + b, 0);
  return sumaCompras;
}

console.log(
  solution([
    {
      customerName: 'Nicolas',
      total: 100,
      delivered: true,
    },
    {
      customerName: 'Zulema',
      total: 120,
      delivered: false,
    },
  ])
); //Consola: 220


// Otras Soluciones

//Solución 2 
//=========================



//Lecturas de Referencia 
//======================

//MDN Web Docs
//=============
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

//https://www.delftstack.com/es/howto/javascript/sum-array-of-objects-javascript/#:~:text=Producción%3A%20Copy%20235-,Utilice%20las%20funciones%20map()%20y%20reduce()%20para%20sumar,no%20caen%20en%20esa%20categoría.