/**************************************************/
/*          Introducción a JavaScript             */
/**************************************************/

// ************************************************
// 1) Consola y "Hello World"
// ************************************************

// En JavaScript podemos usar "console.log" para mostrar mensajes en la consola.
// Ésta es la forma clásica de comenzar en cualquier lenguaje de programación:

// EJERCICIO 1 (para resolver):
// ************************************
// 1. Escribe otra línea que use console.log para
//    imprimir tu nombre en la consola.
// 2. Ejecuta el archivo con: node index.js
//    y revisa la consola para ver el resultado.
//


/**************************************************/
/*                   Tipos de Datos y Variables               */
/**************************************************/

// En JavaScript existen varios tipos de datos básicos:

// 1. string (cadena de texto) -> "Hola", "JavaScript"
let texto = "Esto es un string en Javascript"; // string
// 2. number (número) -> 10, 3.14
let numeroEntero = 10; // number integer
let numeroDecimal = 3.14; // number float
// 3. boolean (booleano) -> true, false
let esEstudiante = false; // boolean

// 4. undefined -> valor no definido
let valorNoDefinido;
//console.log('valorNoDefinido', valorNoDefinido); // undefined
// 5. null -> valor nulo (intencionalmente vacío)
let valorNulo = null; // null

// 6. NaN -> Not a Number
let notANumber = NaN;

let saludo = false;

let hola = "Hola";
//console.log(hola);
const holaMundo = "Hola Mundo";
//console.log(holaMundo)
hola = false;
//console.log(hola);
//holaMundo = true;
//console.log(holaMundo)

//JAMAS USAR var
var despedida = "Chau";
//console.log(despedida)
despedida = "Bye";
//console.log(despedida)

let buenosDiasAleman = "Guten Morgen";

//Datos/Valores trutsy todos los que no son falsy

//Datos/Valores falsy
let falso = false;
let cero = 0;
let nulo = null;
let indefinido = undefined;
let vacio = '';
let noEsUnNumero = NaN;

// EJEMPLO: 
/*console.log("Texto:", texto);
console.log("Número entero:", numeroEntero);
console.log("Número decimal:", numeroDecimal);
console.log("Booleano:", esEstudiante);
console.log("Undefined:", valorNoDefinido);
console.log("Null:", valorNulo);*/

// EJERCICIO 2 (para resolver):
// ************************************
// 1. Declara una variable "miEdad" y asígnale un número.
// 2. Declara una variable "miCiudad" y asígnale el nombre de tu ciudad.
// 3. Muestra ambas variables en la consola usando console.log.
// 4. Ejecuta el archivo y verifica que aparezca la información.


/**************************************************/
/*                     Arrays(Lista)                     */
/**************************************************/

// Un array (arreglo) es una lista de elementos ordenados.
// Podemos almacenarlos en una sola variable:

const frutas = ["manzana", "banana", "naranja", "mandarina", "arandanos"];
//Formar un array de uno nuevo;
const dosFrutas = frutas.splice(2);
//console.log(dosFrutas);
const verduras = ["brocoli", "lechuga", "tomate"];
//Combinas dos arrays;
let comida = frutas + verduras;
//Esta es la manera correcta;
comida = frutas.concat(verduras);
//console.log('comida', comida);
comida = frutas.join(verduras);
//console.log('comida join', comida);
//console.log(frutas);
let numerosEnteros = [1, 2, 3, 4, 5];
let booleanos = [true, false, false, true];
//Nunca hagas listas combinadas.
let listaCombinada = [true, "Hola", 10, 15, false, "Chau"];


// Podemos acceder a cada elemento usando su índice (comienza en 0):
//console.log("Primera fruta:", frutas[0]);
//console.log("Segunda fruta:", frutas[1]);

// EJEMPLO: Agregamos un nuevo elemento al final con push:
frutas.push("uva");
//console.log(frutas);
//console.log("Después de push:", frutas);

// EJEMPLO: Eliminamos el último elemento con pop:
let ultimaFruta = frutas.pop();

//Remover primer elemento del array
console.log(frutas);
//Remueves primer elemento;
frutas.shift()
console.log(frutas);
// Agregar elemento al inicio
frutas.unshift("uvas")
console.log(frutas);
//Numero de elementos de un array
//console.log(frutas.length)
//Ultimo elemento del array
//console.log(frutas[frutas.length -1]);

/*console.log("Elemento eliminado:", ultimaFruta);
console.log("Después de pop:", frutas);*/

// EJERCICIO 3 (para resolver):
// ************************************
// 1. Crea un array con 3 comidas favoritas.
// 2. Muestra la primera comida en la consola.
// 3. Agrega una nueva comida al array y muestra el array actualizado.
// 4. Elimina la última comida y muestra el array actualizado.


/**************************************************/
/*                     Objetos                    */
/**************************************************/

// Un objeto es una colección de pares clave-valor.
// Nos permite agrupar datos con sentido semántico.

let persona = {
  nombre: "Juan",
  edad: 25,
  ciudad: "Madrid"
};

// Accedemos a las propiedades con la notación punto o corchetes:
/*console.log("Nombre:", persona.nombre);
console.log("Edad:", persona["edad"]);*/

// EJEMPLO: podemos añadir más propiedades:
persona.ocupacion = "Estudiante";
//console.log("Objeto persona actualizado:", persona);

// EJERCICIO 4 (para resolver):
// ************************************
// 1. Crea un objeto "auto" con propiedades: marca, modelo y año.
// 2. Muestra cada propiedad en la consola.
// 3. Agrega una nueva propiedad (e.g., color).
// 4. Vuelve a mostrar el objeto para verificar el cambio.


/**************************************************/
/*                   Condicionales                */
/**************************************************/

// Las condicionales nos permiten ejecutar bloques de código
// basados en condiciones (true o false).

let edad = 18;

/*if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}*/

// Podemos encadenar más condiciones con else if:
let hora = 10; // 10 AM

/*if (hora < 12) {
  console.log("Buenos días");
} else if (hora < 18) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}*/

// EJERCICIO 5 (para resolver):
// ************************************
// 1. Declara una variable "puntaje" con un valor numérico.
// 2. Si puntaje >= 70, muestra "Aprobado".
// 3. Si puntaje está entre 50 y 69, muestra "Necesita mejorar".
// 4. Si puntaje < 50, muestra "Reprobado".
// 5. Prueba con distintos valores de "puntaje" para verificar cada caso.


/**************************************************/
/*                     Bucles                     */
/**************************************************/

// Los bucles nos permiten ejecutar un bloque de código varias veces.

// For loop:
/*for (let i = 0; i < 5; i++) {
  console.log("Valor de i:", i);
}*/

// While loop:
let contador = 0;
/*while (contador < 3) {
  console.log("Contador:", contador);
  contador++;
}*/

// EJERCICIO 6 (para resolver):
// ************************************
// 1. Crea un bucle "for" que recorra del 1 al 5 y muestre cada número.
// 2. Crea un bucle "while" que cuente hacia atrás desde 3 hasta 1 y muestre cada número.


/**************************************************/
/*                   Funciones                    */
/**************************************************/

// Una función es un bloque de código reutilizable que ejecuta
// una tarea o calcula un valor.

function saludar(nombre) {
  console.log("Hola, " + nombre + "!");
}

// Para llamar (invocar) la función:
//saludar("Carlos");
//saludar("María");

// Podemos regresar un valor usando la palabra clave "return":
function sumar(a, b) {
  return a + b;
}

let resultadoSuma = sumar(5, 3);
//console.log("Resultado de sumar(5, 3):", resultadoSuma);

// EJERCICIO 7 (para resolver):
// ************************************
// 1. Crea una función "multiplicar" que reciba dos números y devuelva su producto.
// 2. Llama a la función con diferentes valores y muestra los resultados en la consola.
// 3. Crea una función "esPar" que reciba un número y regrese true si es par, false si es impar.
// 4. Prueba la función "esPar" con distintos números y muestra el resultado en la consola.


/**************************************************/
/*            Extra: Variables let y const        */
/**************************************************/

// let -> se puede reasignar.
let x = 10;
x = 20; // reasignado

// const -> no se puede reasignar.
const y = 15;
// y = 30; // Esto causaría un error, ya que const no se puede reasignar.

// EJERCICIO 8 (para resolver):
// ************************************
// 1. Declara una variable let "precio" con valor 100, luego reasígnala a 150 y muestra ambos valores.
// 2. Declara una constante "PI" con valor 3.14159 y trata de reasignarla, observa el error que aparece. 


/**************************************************/
/*        ¡Felicitaciones por llegar hasta aquí!  */
/**************************************************/
// Has revisado:
// 1. console.log y "Hello World"
// 2. Tipos de datos
// 3. Arrays
// 4. Objetos
// 5. Condicionales
// 6. Bucles
// 7. Funciones
// 8. Variables let y const

// EJERCICIO FINAL: 
// ************************************
// Con los conocimientos adquiridos, intenta hacer un pequeño programa 
// que solicite al usuario (puedes simularlo asignando valores a variables) 
// datos como su nombre, edad, ciudad, y muestre una presentación final en la consola. 
// ¡Diviértete aprendiendo JavaScript!
