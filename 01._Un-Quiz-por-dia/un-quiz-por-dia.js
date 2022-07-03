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
const test = (nombre, action) => {
	return action(nombre);
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

//*Desafío 13.- Explica este código JavaScript 😎
//**=============================================

const f = (arr) => Array.isArray(arr) && !arr.length;
console.log(f([1, 2, 3])); //?
console.log(f([0])); //?
console.log(f([])); //?
/* 

Respuesta Correcta: D) false false true

Este ejemplo es bien sencillo pero abarca varios temas interesantes de javascript.

La función se encarga de verificar si un arreglo esta vacío o no, para ello hacemos una doble verificación:

Primero, corroboramos que el parámetro arr sea un arreglo, la manera más eficiente de hacerlo es usando el método isArray del objeto Array el cual regresa true si es un arreglo y false sino lo es.

Segundo, corroboramos que la longitud del arreglo sea 0 y convertimos esa salida a boolean para poder hacer una comparación de boeleanos con el operador de corto circuito &&.

Veamos caso por caso:

[1,2,3], es un arreglo pero no esta vacío. Entonces tendriamos: true && false, que evalua a false.

[0], es un arreglo y tampoco esta vacío. Entonces tendriamos: true && false, que evalua a false.

[] es un arreglo y si esta vacío. Entonces tendriamos: true && true, que evalua a true.

Conclusión: false false true.
*/

//*Desafío 14.- ¿Cuál es el resultado del siguiente código?😎
//**=======================================================

const array = ['a', 'bb', 'ccc'];
const rta = array.map((item) => item.length);

/*
Respuesta Correcta: C) [ 1, 2, 3 ]
El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

.map() es inmutable, por lo tanto, no modifica el array original, sino que crea uno nuevo con la “transformación” aplicada. Además, mantienes el mismo length que el array original, te devuelve en el nuevo array la misma cantidad que el array que le aplicaste el método.  */

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

//*Desafío 15.- Analiza determinadamente el siguiente código😎
//**=======================================================

const myarray = [1, 1, 1, 1, 1];
const myrta = array.reduce((total, item) => total + item, 0);

/* Respuesta Correcta: D) 5
El método reduce() recorre el array y llama a la función reductora, almacena el valor del cálculo del array por la función en un acumulador. Un acumulador es una variable que se recuerda todas las iteraciones para almacenar los resultados acumulados de recorrer un array. Podemos usar esto para iterar a través del array, agregar el valor del elemento al acumulador y obtener la suma del array.

El código representado es un ejemplo de la implementación de una función reductora para sumar todos los elementos del array. */

//*Desafío 16.- Analiza determinadamente el siguiente código😎
//**==========================================================

anotherFn();

function anotherFn() {
	console.log(myNumber + myNumber);
}

let myNumber = 4;

/* Respuesta Correcta: B) Uncaught ReferenceError: myNumber is not defined
El error es debido a un concepto que puede ser un poco confuso al empezar en JavaScript: Hoisting.

Hoisting es una técnica de desplazamiento de declaraciones de variables y funciones. Cuando se declara una variable o una función, el código es desplazado hacia arriba, lo que significa que la variable o función puede ser utilizada antes de que se haya declarado.

El concepto de Hoisting fue pensado como una manera general de referirse a cómo funcionan los contextos de ejecución en JavaScript

Conceptualmente, por ejemplo, una estricta definición de hoisting sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del código, pero esto no es lo que ocurre en realidad. Lo que sucede es que las declaraciones de variables y funciones son asignadas en memoria durante la fase de compilación, pero quedan exactamente en dónde las has escrito en el código. (mdn) */

//*Desafío 17.- ¿Cuál es el resultado del siguiente código?😎
//**=======================================================

const frutas = [
	{ id: 1, name: 'Lime', quantity: 5 },
	{ id: 2, name: 'Apple', quantity: 30 },
	{ id: 3, name: 'Pineapple', quantity: 3 },
];

const counting = frutas.some((frutas) => frutas.quantity > 5);

console.log(counting); // true

/* 
Respuesta Correcta: A) true
El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.

En el ejemplo tenemos un arreglo de elementos (fruits) y tenemos una variable asignada a count con la cual estamos utilizando el método some() para validar si el arreglo cumple con la condición implementada, la cantidad sea mayor a 5.

some() ejecuta la función callback una vez por cada elemento presente en el array hasta que encuentre uno donde callback retorna un valor verdadero (true). Si se encuentra dicho elemento, some() retorna true inmediatamente. Si no, some() retorna false.
*/

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

//*Desafío 18.- ¿Qué imprime este código JavaScript?_Operador NOT lógico😎
//**====================================================================

!!null;
!!'';
!!1;

console.log(!!null); //false
console.log(!!''); //false
console.log(!!1); //true

/*
El operador !! realiza una doble negación.

En el primer caso, por coerción de tipos, null es un valor falsy, si lo negamos 2 veces, tendríamos false.

En el segundo caso, por coerción de tipos, "" es un valor falsy, si lo negamos 2 veces tendríamos false.

Por último, el tercer caso, y nuevamente por coerción de tipos, el valor 1 es un valor truthy, si lo negamos 2 veces, obtendremos true. */

//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#logico

//*Desafío 19.- ¿Qué imprime este código JavaScript?_Object_😎
//**====================================================================

function getAge(...args) {
	console.log(typeof args);
}

getAge(21); // Object

/* Respuesta Correcta: C) object
Cuando usamos la sintaxis de ... en los parámetros de una función (ES6: Rest Operator) convertimos a dicho parámetro a un arreglo.

Entonces es tentador marcar la opción B: "array" pero esto sería un error de novato. En JavaScript no existe el tipo de dato array, para tipos no primitivos el lenguaje los evalua como object. Por ese motivo la respuesta correcta es la opción C: "object". */

//* Desafío 20.- ¿Qué crees que imprime el siguiente código?_Desestructuración_😎
//**===========================================================================

const frutas1 = ['Mango', 'Manzana', 'Naranja', 'Pera'];
//    indice =     0       1            2       3

const { 3: pera } = frutas1; // indice = 3
//const[mango] = frutas1; // indice = 0
//const[,,fruta] = frutas1; // indice = 2
//const[,manzana] = frutas1; // indice = 1

//console.log(mango) // 'Mango'
console.log(pera); // 'Pera'
//console.log(fruta) // 'Naranja'
//console.log(manzana) // 'Manzana'

/*
Respuesta Correcta: D) Pera

Para usar la desestructuración en arreglos es importante tener en cuenta los índices de los elementos. Por ello para acceder a Pera en el arreglo frutas hariamos algo como:

const [, , , pera] = frutas;

Donde cada , representa el salto de un índice del arreglo.

Para una sistaxis mas breve podemos usar esto:

const { 3:pera } = frutas;

Donde el 3 representa las posiciones que deseamos saltar. Nota que aunque frutas sea un arreglo usamos {} para la desestructuración */

//*Desafío 21.- ¿Qué imprime este código JavaScript?_Spread Operator_😎
//**====================================================================

console.log([...'Oscar']);

/* 
Respuesta Correcta: A) ["O", "s", "c", "a", "r"]
Un string es un elemento iterable en JavaScript, por ende es posible usar el spread operator directamente obteniendo la propagación de la cadena letra por letra.
*/

//*Desafío 22.- ¿Qué imprime este código JavaScript?_typeof_😎
//**=============================================================

console.log(typeof ([] + []));

/*
Respuesta Correcta: D) string
El operador + por lo general intentará realizar una concateneción, en este caso, el interprete de JavaScript, por coerción de tipos intentará convertir los arreglos a cadenas de texto, haciendo algo como esto aunque no lo veamos:

console.log(typeof ([].toString() + [].toString())); //string console.log(typeof ("" + "")); console.log(typeof ("")); //string */

//*Desafío 23.- ¿Qué imprime este código JavaScript?_igualdad-estricta_😎
//**===================================================================

/*
Respuesta Correcta: C) true false false
En el primer console.log:

console.log(a == b);

Vemos que hacemos una comparación débil con el operador ==, esto significa que solo compararemos los valores de a y b, por ende obtendremos un true.

En el segundo console.log:

console.log(a === b);

Hacemos una comparación estricta usando el operador ===, esto significa que compararemos valores y tipos de datos, a y b tienen el mismo valor, pero a es de tipo number y b esta siendo inicializada usando el contructor Number, por ende es un objeto; entonces obtendremos un false.

En el tercer console.log

console.log(b === c);

Al igual que el caso anterior, intentamos comparar de manera estricta un objeto contra un número, entonces tendremos como resultado un false.

Conclusión: trata de usar simpre ===.
*/

//*Desafío 24.- Explica este código JavaScript_spread operator_😎
//**===================================================================

const nombres1 = ['Ana', 'Sofia', 'Carmen', ...['Cris']];
const [, , , miNombre1] = nombres;
console.log(miNombre1['length']);

/*
Respuesta Correcta: D) 4
Cuando pretendemos hacer una desestructuración de arreglos es súper importante tener en cuenta los índices del mismo. Usando la sintaxis de la , podemos saltar posiciones del arreglo hasta encontrar la propiedad que se desea obtener.

En el ejemplo usamos 3 veces , por ello saltamos 3 posiciones del arreglo nombres para poder obtener (spread operator) la cadena Cris del arreglo anidado.

Finalmente aplicamos el método length con sintaxis de corchete. */

//*Desafío 25.- ¿Cuál es resultado de person.name?_😎
//**==================================================

const person = { name: 'nico', age: 28 };
const newPerson = person;
newPerson.name = 'santi';
console.log(person.name);

/*
Respuesta Correcta: B) santi
En JavaScript existen dos tipos de asignaciones por referencia vs. por valor y esta diferencia es clave, ya que puede producir comportamientos inesperados.

La asignación por valor funciona en los valores primitivos, como por ejemplo:

let  numberA = 45;
let numberB =  numberA;
numberA = 99;
console.log( numberB); // 45

En el caso anterior numberB tiene el valor 45, diferente para arrays, funcions y objetos, en donde se hace una asignación por referencia:

const objA = {age: 45};
const objB =  objA;
objA.age = 99;
console.log( objB.age); // 99

Quiere decir que no estamos copiando el valor, sino la referencia, por lo tanto, un cambio en él puede tener consecuencias en otro.

*/

//*Desafío 26.- Explica este código JavaScript_parseInt_😎
//**========================================================

const num = parseInt('7*6', 10);
console.log(num); //?

/* Respuesta Correcta: C) 7
parseInt convierte un valor a tipo number de una base concreta (base binaria, octal, decimal, etc).

En el ejemplo intentamos convertir "7*6" a base 10, osea, a base decimal.

parseInt toma los valores validos de izquierda a derecha, dicho esto, solo tomará el valor 7 (el * y todo lo que le precede no es un valor valido para parseInt).

En conclusión, solo convierte al 7 de string a number.
*/

//*Desafío 27.- Explica este código JavaScript_método_.map_😎
//**===========================================================

[1, 2, 3].map((num) => {
	if (typeof num === 'number') return;
	return num * 2;
});

/* Respuesta Correcta: C) [undefined, undefined, undefined]
El método `map` es propio del paradigma de la programación funcional. Este método siempre retorna una nuevo arreglo.

En el ejemplo, puesto que estamos iterando sobre un arreglo de números, la condición evaluará `true` para cada uno de los elementos del arreglo, pero hay 2 sentencias `return`. JavaScript ignora todo el código que esta después del primer `return` que encuentra. Dicho esto, tendríamos algo así:

[1, 2, 3].map(num => { if (typeof num === "number") return; });

Ahora, si bien la condición se evalua a `true`, el `return` no devuelve nada, simplemente hace que el código se salga del `map`.

Cuando no devolvemos nada en `return`, `map` regresa siempre `undefined`.

Al tener 3 elementos en el arreglo, y recordando siempre que map regresa un nuevo arreglo, obtenemos como resultado final un arreglo de 3 `undefined`*/

//*Desafío 28.- Explica este código JavaScript_variables_😎
//**=========================================================

let x = 10;
if (true) {
	let y = 20;
	var z = 30;
	console.log(x + y + z);
}

console.log(x + z);

/* Respuesta Correcta: A) 60, 40
Las variables declaradas con let y const tienen un contexto de bloque, esto significa que solo podrán ser accedidas dentro del bloque de llaves donde fueron declaradas, por ejemplo dentro de un bloque if o dentro de una función.

Esta premisa se cumple siempre y cuando esten declaradas dentro de un bloque, si una variable esta fuera de todo bloque entonces se dice que es una variable global y por ende puede ser accedida desde cualquier parte del código.

let x = 10 es una variable global, puesto que no esta encerrada en ningún tipo de bloque.

Dentro del if`

console.log(x + y + z);

En el bloque del if no se tiene acceso a ninguna variable x, por lo tanto javascript subirá al siguiente contexto para buscar una variable x, al encontrarla recien realiza la suma x + y + z que sería 60.

En el último console:

console.log(x + z);

La variable x esta en el contexto global, por ende accedemos a su valor sin problema alguno.

La variable z esta dentro del bloque if y no deberiamos poder acceder a ella, pero z esta declarada con var, esto la convierte en una variable con contexto de función y no de bloque, entonces accedemos a su valor, para poder sumar x + z que sería 40. */

//*Desafío 29.- Explica este código JavaScript_hoisting_😎
//**========================================================

// primera función
function sumar(a, b) {
  return a + b;
}

// segunda función
const sumar = (a, b) => {
  return a + b;
};


/*
Respuesta Correcta: C) La primera función tiene hoisting, la segunda no.
Con una función como la primera es posible hacer esto:

console.log(suma(3,5)); //8
function sumar(a, b){
return a + b;
}  

Podemos llamar a la función antes de su declaración, característica que se denomina hoisting.

Con una función de flecha esto no es posible:

console.log(sumar(3,5)); // ReferenceError: cant access lexical declaration sumar before initialization

const sumar = (a, b) => {
return a + b;
}  

*/

//*Desafío 30.- Explica este código JavaScript_spread operator_😎
//**===========================================================

const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };

console.log(admin); //🤔?


/* Respuesta Correcta: B) { admin: true, name: "Lydia", age: 21 }
El spread operator en este ejemplo se encarga de propagar el objeto user dentro del objeto admin.

Sin usar el spread operator tendríamos un objeto anidado:

  { admin: true, { name: "Lydia", age: 21 } }  


Justamente el spread operator se encarga de expandir user para evitar el anidamiento. */



//*Desafío 31.- Explica este código JavaScript_JSON.stringify_😎
//**===========================================================


const settings = {
  username: "lydiahallie",
  level: 19,
  health: 90
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data); //🤔?

/*
Respuesta Correcta: A) "{"level":19, "health":90}"
JSON.stringify puede recibir un 2do parámetro opcional denominado replacer, puede ser una función o un arreglo, y se encarga de hacer un filtro de las propiedades del objeto que deseamos convertir a string, en el ejemplo solo deseamos convertir las propiedades ["level", "health"], ignorando username.
*/

//*Desafío 32.- Explica este código JavaScript_scope_😎
//**===========================================================

let numb = 10;

const increaseNumber = () => numb++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1); // 🤔
console.log(num2); // 🤔


/* 
Respuesta Correcta: A) 10, 10
La primera función en llamarse es increaseNumber que solo se encarga de retornar la variable num y luego la incrementa; num no esta en el scope de la función por eso pasamos a buscar la variable en el scope global. Esta función regresará 10.

num1 se pasa como parámetro a increasePassedNumber que hace lo mismo que increaseNumber, regresa primero el valor de la variable y luego la incrementa, por ello obtenemos nuevamente como salida el valor 10.
*/

//*Desafío 33.- Explica este código JavaScript_funciones_😎
//**========================================================

const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply(); //🤔?
multiply(); //🤔?
multiply(value); //🤔?
multiply(value); //🤔?

/*
Respuesta Correcta: C) 20, 20, 20, 40
Hay que concentrarse en el orden en que se llaman las funciones para comprender que es lo que pasa acá.

Primera llamada: A multiply no le pasamos ningún parámetro, por ende, toma el parámetro por defecto x que es un objeto desestructurado cuya key number tiene el valor de 10. Entonces x.number *= 2 nos retorna 20.

Segunda llamada: Similar a la primera llamada, hacemos lo mismo, entonces obtenemos nuevamente 20.

Tercera llamada: A multiply en su llamada le pasamos el argumento value por lo que la función ahora ignora el parámetro por defecto. number es nuevamente 10, por ello el resultado de la multiplicación nuevamente será 20.

Cuarta llamada: Similar a la tercera llamada, pero el valor de value actual es 20 que fue el resultado de la tercera llamada, entonces ahora x.number *= 2, será 40.
*/