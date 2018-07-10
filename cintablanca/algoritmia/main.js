/*
---------------------------------------------
            Estructuras de Control

Nos permiten modificar el flujo de ejecución
de nuestros programas; es decir, podemos
cambiar de qué manera se ejecuta nuestro código
---------------------------------------------
*/



/*
---------------------------------------------
                  IF - ELSE
---------------------------------------------
*/

/* Después de escribir la palabra reservada
   IF debemos escribir paréntesis. Dentro de
   estos ponemos la codición que deseemos
   evaluar. Si no se cumple esta condición, se
   salta el bloque de código definido entre
   llavas "{}"  y se ejecuta lo que esté en
   después de la palabra reservada ELSE;
   en este caso, se ejecuta un console.log que
   dice "No se cumplio la condicion"
*/

if ( 1 > 5 ) {
  console.log("Se cumplio la condicion")
} else {
  console.log("No se cumplio la condicion")
}

/* Tenemos tres formas de usar el "igual"
          =       ==        ===
*/

// = ASIGNACION
//numero = "hola"

// == COMPARACION; compara VALOR
// if ("10" == 10) { console.log("son iguales") }

// === IDENTIDAD; compara VALOR y TIPO DE DATO
// if (10 === 10) {console.log("son identicos")}


/* Podemos encadenar múltiples "if"
   de la siguiente manera:
*/

let numero = 0;


if (numero == 1) {
  console.log("Ingresaste el numero 1");
} else if (numero == 2){
  console.log("Ingresaste el numero 2");
} else if (numero == 3){
  console.log("Ingresaste el numero 3");
} else console.log("No ingresaste un numero entre 1 y 3");

/*
---------------------------------------------
                CICLOS FOR
---------------------------------------------
*/

/* Esta es la estructura básica de un FOR:

   Despues de escribir la palabra reservada
   FOR debemos poner paréntes "()".
   Dentro de estos van tres argumentos:
   1) índice: este nos dice desde dónde
      vamos a comenzar a iterar.
   2) condición de fin: así decidimos
      cuándo queremos que deje de ejecutarse
      nuestros FOR; en este caso cuando
      i deje de ser menor que diez.
   3) qué hacer tras cada iteración:
      en este caso, queremos que al iterar
      de nuevo, i se incremente en 1
*/
for ( let i = 0; i < 10; i++ ){
  console.log(i);
}

/* Podemos llenar un arreglo manualmente...
*/
let ositoDePeluche = [
  "Esta es la posicion 0",
  "Esta es la posicion 1",
  "Esta es la posicion 2"
];

/* E imprimir el contenido de
   cualquiera de sus posiciones
   haciendo uso de los corchetes "[]"

   Dentro de los corchetes debemos
   especificar el numero de la posicion
   a la que deseemos acceder
*/
console.log( ositoDePeluche[2] );

/* Podemos llenar un arreglo
   haciendo uso de un FOR:
*/

// Definimos un arreglo vacío
let nuevoArreglo = [];

// Llenemos el arreglo con los números del 1 al 5
for ( let i = 0; i < 5; i ++){
  nuevoArreglo[i] = i + 1
}

// Mostramos en consola nuestro nuevoArreglo una vez llenado:
console.log(nuevoArreglo);

/* También podemos hacer uso de
   un FOR para mostrar el contenido
   de nuestro arreglo, posición por
   posición:
*/

// Usando "nuevoArreglo.length" puedo conocer el tamaño de el arreglo
for ( let i = 0; i < nuevoArreglo.length; i ++){
    // el indice "i" cambiara con cada iteracion
    console.log( nuevoArreglo[i] );
}

/*
---------------------------------------------
                FUNCIONES

  Nos permiten aislar pedazos de código.
  Este código aislado puede ser ejecutado
  posteriormente cuantas veces deseemos.
---------------------------------------------
*/

// Sin funciones, haríamos algo como esto para realizar una suma...
let num1 = 10;
let num2 = 20;

let suma = num1 + num2;
console.log(suma);

/* Usando funciones, la cosa cambia.

   Para definir una funcion, escribimos
   la palabra reservada "function"
   seguido del nombre que deseemos ponerle.

   Luego, el nombre va seguido de paréntesis "()"
   Dentro de estos podemos definir parámetros.
   OJO: esto es opcional

   En nuestro caso, los parámetros de la función 2
   "suma" son num1 y num2.

   Los parámetros pueden ser tantos como desemos.
   Los parámetros pueden ser llamados como deseemos.

   Luego de los paréntesis donde van los parámetros,
   van las llaves "{}". Dentro de estas definimos
   todo el código que querramos que se ejecute
   cada vez que invoquemos a nuestra funcion "suma"

   Dentro de las llaves, especificamos con la palabra
   "return" lo que queremos obtener al ejecutar la función.

   Del lado derecho del return está el código que será
   ejecutado. El resultado de la ejecución de ese código
   se pasará al "return"

   OJO: el uso del RETURN es opcional. Solo lo empleamos
   si deseamos obtener algo al ejecutar la funcion.

   Ese algo que obtenemos al ejecutar la funcion debe
   "cacharse" con alguna cosa para poder utilizarse.
*/
function suma(num1, num2) {
  return num1 + num2;
}

// Si solo ejecuto mi funcion de esta manera:
suma (10, 20); // Se devolverá el resultado de la suma de 10 y 20
// pero el resultado no se mostrará en ningún lugar :(

// Para "cachar" el resultado de ejecutar la funcion,
// guardo lo que devuelve "return" en una variable "resultado"
let resultado = suma( 10, 20);

// Y muestro el contenido de mi variable con un console log
console.log(resultado);

// Otra manera de ejecutar la funcion "suma" es mandando
// variables en vez de valores estáticos (como 10 y 20)
let n1 = 5;
let n2 = 7;
// Ahora el resultado de ejecutar la funcion "suma()"
// es "cachado" por el console.log
console.log (  suma( n1, n2)  );


/* Una función que no lleva
   return dentro, se escribe
   puede escribir así
*/
function nuevaFuncion(){
  console.log("Hola");  // Al ejecutarse la funcion, se ejecuta el "console.log"
}

nuevaFuncion(); // Se ejecuta y se muestra en consola "Hola"

/* Podemos crear funciones para muchas cosas,
   por ejemplo, para saber si alguien es
   mayor de edad

   OJO: Al ejecutarse una funcion, solo se
        ejecuta el primer RETURN que encuentre.

        El resto de los returns son ignorados.
*/
let edadUsuario = prompt("Ingresa tu edad");

function esMayorDeEdad(variable){
  if ( variable == 18){
    return "Es mayor de edad";
  } else return "No es mayor de edad";
}

console.log( esMayorDeEdad(edadUsuario) );

/* Otra manera de ejecutar la funcion
   "esMayorDeEdad" es la siguiente:
*/

// console.log( esMayorDeEdad(prompt("Ingresa tu edad")) );
