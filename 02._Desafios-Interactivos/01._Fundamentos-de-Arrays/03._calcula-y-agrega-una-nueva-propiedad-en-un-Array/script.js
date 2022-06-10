
/*¡Recuerde usar el modo 'estricto' en todos los scripts ahora!
Puede usar el modo estricto en todos sus programas. Te ayuda a escribir código más limpio,
como evitar que uses variables no declaradas. (https://www.w3schools.com/js/js_strict.asp)*/
'use strict';

//**Desafío 03.- Calcula y agrega una nueva propiedad en un Array

/*  
Tienes un array de productos con los siguientes atributos:

name
price
stock
Debes agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base.

Por ejemplo si aplicamos el 19% de impuestos para un producto con precio de $1000 el resultado de los "taxes" será $190, debes tener en cuenta que como resultado se debe dejar un valor entero sin decimales.

La solución debería tener un input y output como los siguientes:

solution([
  {name: "Product 1", price: 1000, stock: 10},
  {name: "Product 2", price: 2000, stock: 20},
  ...
]);

Output

[{name: "Product 1", price: 1000, stock: 10, taxes: 190},
  {name: "Product 2", price: 2000, stock: 20, taxes: 380},
  ...
]
*/

//Solución 1 (Platzi)
//=========================

function solution(array) {
  return array.map((item) => ({...item, taxes: Math.trunc(item.price * 0.19),
  }));
}

console.log(
  solution([
    {
      name: 'Product 1',
      price: 1000,
      stock: 10,
    },
    {
      name: 'Product 2',
      price: 2000,
      stock: 20,
    },
  ])
);


// Otras Soluciones

//Solución 2 
//=========================




//Lecturas de Referencia 
//======================

//MDN Web Docs
//=============
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map

