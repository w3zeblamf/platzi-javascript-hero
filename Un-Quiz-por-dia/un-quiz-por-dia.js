/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//**Desafío 01.- ¿Cuál es el resultado del siguiente código?
//**==========================================================

const fruits = [
  { id: 1, name: 'Kiwi', quantity: 5 },
  { id: 2, name: 'Banana', quantity: 30 },
  { id: 3, name: 'Pineapple', quantity: 3 },
];

const count = fruits.some((fruit) => fruit.quantity > 30);

/* Respuesta Correcta: B) false
El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.

En el ejemplo tenemos un arreglo de elementos (fruits) y tenemos una variable asignada a count con la cual estamos utilizando el método some() para validar si el arreglo cumple con la condición implementada, la cantidad sea mayor a 5.

some() ejecuta la función callback una vez por cada elemento presente en el array hasta que encuentre uno donde callback retorna un valor verdadero (true). Si se encuentra dicho elemento, some() retorna true inmediatamente. Si no, some() retorna false. */

//Lecturas recomendadas

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
//https://github.com/platzi/curso-manipulacion-de-arrays/tree/8-some


//*Desafío 02.- Explica este código JavaScript 😎
//**=============================================

console.log(typeof ('22' - 0));
 // number

/* Respuesta Correcta: A) number
Podemos convertir un string valido a number tan solo restándole 0. Es un hack interesante y una alternativa valida a usar el objeto Number, la función parseInt o el operador +.

El operador - solo cumple la tarea de realizar una resta en javascript, cuando se lo aplicamos a un string valido entonces el interprete tiene que convertir dicha cadena a number y luego realizar la operación, entonces nos aprovechamos de que el 0 es neutro aditivo para que la conversión sea exitosa.

Si intentamos usar este hack con cadenas no numéricas la conversión se realiza pero obtendremos un NaN como resultado, así que mucho ojo con eso.

console.log(typeof("aaa" - 0)); // number 
console.log(("aaa" - 0)); // NaN  */

//*Desafío 03.- Explica este código JavaScript 😎
//**=============================================

const numeros = [1, 2, 3, 4, 5];
numeros.length = 0;
console.log(numeros); // ?

/* Respuesta Correcta: C) []
El método length es un getter y un setter al mismo tiempo, esto quiere decir que podemos obtener valores y podemos establecer los mismos dependiendo de lo que se necesite.

En este caso usar length y "setterlo" a 0 es una buena manera de borrar todos los elementos de un arreglo.*/

//*Desafío 04.- Explica este código JavaScript 😎
//**=============================================

console.log('hola'.split('').reverse().join('')); // ?

/* Respuesta Correcta: D) "aloh"

Estos 3 métodos de cadenas se preguntan mucho en entrevistas. Veamos paso por paso que sucede:

Aplicamos split:
split convierte una cadena en arreglo dependiendo del parámetro que se le pase, en este caso una cadena vacía: ["h","o","l","a"].

Aplicamos reverse:
reverse es un método de arreglos, invierte todos los elementos del arreglo: ["a","l","o","h"].

Aplicamos join:
join es un método de arreglos que convierte un arreglo en cadena nuevamente dependiendo del parámetro que se le pase, en este caso una cadena vacía: "aloh"

*/

//** Desafío 05.- ¿Cuál de las siguientes funciones es una Higher Order Function?
//**=============================================

//A
const multiplicar = (a) => (b) => a * b;
//B
const test = (nombre, accion) => {
  return accion(nombre);
};
console.log(test('Ana', console.log)); //Ana (por consola)

/* 

Respuesta Correcta: C) Ambas
Por definición una Higher Order Function es:

1. Una función que regresa otra función. 2. Una función que puede tener funciones en sus parámetros.

multiplicar aunque no lo parezca regresa otra función, podría escribirse también de la siguiente manera:

  function multiplicar(a){
  return function(b){
    return a * b;
  }
}  

Acá se observa mejor que multiplicar regresa una función anónima que realiza la operación del producto, es mucho más sencillo usar retornos implícitos para poder escribir lo mismo en una sola línea como en el ejemplo original.

test recibe 2 parámetros, uno de ellos es una función que en el ejemplo es console.log de javascript nativo, esto es motivo suficiente para que sea considera una Higher Order Function.
*/

//*Desafío 06.- Explica este código JavaScript 😎
//**=============================================

const numeros = [1, 2, [3, 4], 5, 6, [7, 8], 9, 0];
console.log(numeros.flat()); // ?

//🎉 Respuesta Correcta

/* 
Respuesta Correcta: B) [1,2,3,4,5,6,7,8,9,0]
flat es un array method que crea un nuevo arreglo con los elementos concatenados recursivamente hasta una profundidad especificada.
Dicho en otras palabras, permite "aplanar" un arreglo anidado un número determinado de veces. Es una buena alernativa a usar por ejemplo reduce para hacer lo mismo y no muchos devs conocen que existe esta catacterística en el lenguaje.
*/

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

//*Desafío 07.- Explica este código JavaScript / Global Scope 😎
//**=============================================================

// var nombre = 'Camila';
// let apellido = 'Rodriguez';
// const edad = 25;
// const getDatosPersonales = () => {
//   console.log(nombre);
//   console.log(apellido);
//   console.log(edad);
// };
// console.log(getDatosPersonales());

/* 
Respuesta Correcta: A) Camila, Rodriguez, 25

Independientemente de la palabra reservada con la que declaremos una variable (var, let, const), esta tendrá scope global siempre y cuando no este dentro de un bloque o dentro de una función. Por este motivo nombre, apellido y edad son variables de scope global y por ello pueden ser accedidas desde la función getDatosPersonales
*/

//*Desafío 08.- ¿Cuál es resultado de person.name? 😎
//**=============================================

/* Respuesta Correcta: B) santi
En JavaScript existen dos tipos de asignaciones por referencia vs. por valor y esta diferencia es clave, ya que puede producir comportamientos inesperados.

La asignación por valor funciona en los valores primitivos, como por ejemplo:

let  numberA = 45;
let numberB =  numberA;
numberA = 99;
console.log( numberB); // 45

En el caso anterior numberB tiene el valor 45, diferente para arrays, functions y objetos, en donde se hace una asignación por referencia:

const objA = {age: 45};
const objB =  objA;
objA.age = 99;
console.log( objB.age); // 99

Quiere decir que no estamos copiando el valor, sino la referencia, por lo tanto, un cambio en él puede tener consecuencias en otro. */

//*Desafío 08.- Explica este código JavaScript 😎
//**=============================================


let nombre = 'Cris';
let edad = 25;
console.log('Mi nombre es %s y tengo %d', nombre, edad);

/* 
Respuesta Correcta: C) Mi nombre es Cris y tengo 25
En javascript como en java es posible usar sustituciones de variables con el operador % seguido de un caracter que especifica el tipo de dato que se pretende imprimir. En este caso, $s reemplaza un string ("Cris") y %d reemplaza un valor decimal o dígito numérico (25).

Este método de imprimir por consola no es muy usado, ni siquiera es conocido, pero esta bueno saber que existe.
*/

//https://stackoverflow.com/questions/42406146/javascript-s-or-d-represents-string

//*Desafío 10.- Explica este código JavaScript 😎
//**=============================================

const nombres = ['Ana', 'Sofia', 'Carmen', ...['Cris']];
const [, , , miNombre] = nombres;
console.log(miNombre['length']);

/* Respuesta Correcta: D) 4
Cuando pretendemos hacer una desestructuración de arreglos es súper importante tener en cuenta los índices del mismo. Usando la sintaxis de la , podemos saltar posiciones del arreglo hasta encontrar la propiedad que se desea obtener.

En el ejemplo usamos 3 veces , por ello saltamos 3 posiciones del arreglo nombres para poder obtener (con spread operator) la cadena Cris del arreglo anidado.

Finalmente aplicamos el método length con sintaxis de corchete. 
*/


//*Desafío 11.- Explica este código JavaScript 😎
//**=============================================

function test() {
  let nombre = 'Alex';
  if (true) {
    console.log(nombre);
    let nombre = 'Oscar';
  }
}
console.log(test());

/*
Respuesta Correcta: B) ReferenceError: Cannot access "nombre" before initialization
Dos aspectos a tomar en cuenta en este ejemplo.

Primero, recordar que las variables declaradas con let o const tienen scope de bloque.
Segundo, recordar que las variables declaradas con let o const no tienen hoisting, cuando intentamos acceder a una variable antes de su inicializción entra en la Temporal Dead Zone. La variable nombre no puede ser mostrada sin antes inicializarla, nombre esta en su Temporal Dead Zone
*/ 

//*Desafío 12.- Explica este código JavaScript (Global_Objects/Array/at) 😎
//**====================================================================

const profesores = ['Oscar', 'Nico', 'Freddy', 'Christian', 'Angela'];
console.log(profesores.at(1)); //?
console.log(profesores.at(-1)); //?
console.log(profesores.at(10)); //?
console.log(profesores.at(3.8)); //?
console.log(profesores.at(-3.3)); //?

/* Respuesta Correcta: A) Nico Angela undefined Christian Freddy
El método .at es una nueva forma de poder acceder a elementos de arreglos o a caracteres de cadenas.

Recibe como parámetro un número que representa en este ejemplo el índice al cual se quiere acceder.

.at(1) regresa el item "Nico" puesto que tiene el índice 1.
.at(-1) regresa el item "Angela", es una manera elegante de acceder al último item de un arreglo.
.at(10) regresa undefiend puesto que no existe un item con dicho índice en el arreglo.
.at(3.8) y .at(-3.3) solo tomaran la parte entera del parámetro, por ende tendremos .at(3) que regresa "Christian" y at.(-3) que regresa "Freddy". */