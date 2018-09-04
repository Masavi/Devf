/*
---------------------------------------------
                  Variables
---------------------------------------------
*/

// Declaración de Variable
let miVariable;

// Asignación de Variable
miVariable = 10;

// Declaración y asignación de Variable
let nuevaVariable = "hola";


/*
---------------------------------------------
                Tipos de Datos
  las variables en Javascript (var, let) 
  pueden contener cualquier tipo de dato
---------------------------------------------
*/

// String
let cadena = "hola";

// Number
let numero = 10;

// Boolean
let boolean = false;

// Undefined
let indefinido = undefined;

// Null
let vacio = null;

// Haciendo uso de console.log podemos mostrar cosas en consola
console.log(cadena + boolean);

/* Aunque ambas variables contienen el valor 10,
   el tipo de dato es distinto.
*/
let num1 = "10";
let num2 = 10;

/* Podemos aplicar operadores dentro del console log.
   En el caso del operador suma (+) puede concatenar
   los valores de las variables o sumarlas.
   Todo depende del tipo de dato de las variables.
*/
console.log(num1 + num2);
//RESULT: 1010

console.log(num1 - num2);
//RESULT: 0


/*
---------------------------------------------
            Estructuras de Control
Nos permiten modificar la manera en que se
ejecutan las instrucciones de nuestro programa
---------------------------------------------
*/

//           Condicionales IF-ELSE

/* Si se cumple una condición (en este caso si
    5 es mayor que 10), se ejecuta el código dentro
    de las llaves {}. De lo contrario, se ejecuta
    el código después del else
*/
if (5>10){
  console.log("Cinco es mayor que diez");
} else console.log("Cinco no es mayor que diez");

/* Es posible usar tantos if-else como deseemos.
   Esto se conoce como "anidar", es decir, poner
   uno dentro de otro dentro de otro...
*/

let numero = 6;

if (numero > 100){
  console.log("Mayor que cien");
} else if (numero > 50){
    console.log("Mayor que cincuenta");
} else if (numero > 5){
    console.log("Mayor que cinco");
} else console.log("Cualquier otra cosa");

//                Switch

/* Si queremos evaluar una condición contra
   muchos casos, lo recomendable es emplear
   un switch en vez de muchos if-else
*/

let dia = "miercoles";

switch (dia) {

  case "lunes":
    console.log("¡Hoy es lunes!");
    break;

  case "martes":
    console.log("¡Hoy es martes!");
    break;

  case "miercoles":
    console.log("¡Hoy es miercoles!");
    break;

  /* default funciona de la misma forma que "else";
     se ejecuta en caso de no cumplirse cualquiera
     de los casos anteriores
  */
  default:
    console.log("Dia no contiene una cadena valida");
}

/* El signo de igualdad (=) puede
   emplearse de tres formas
*/

// Asignar un valor a una variable
/* = asignación */

// Comparar el valor entre dos cosas
/* == comparación */

/* Comparar si dos cosas son idénticas, es decir,
   si contienen el mismo valor y son del mismo tipo de dato.
*/
/* === idénticos */

//                 Ciclos For

/*  Cuando deseemos ejecutar un bloque de código
    (es decir, ejecutar todo lo que se encuentra
    entre las llaves {} ) muchas veces, podemos
    usar un loop o ciclo for
*/

/* Este for va a iterar hasta que i deje de ser
   menor que diez. Cada vez que itera, i se
   incrementa en uno usando el operador ++

   Con cada iteración del for, imprimimos el
   contenido de la variable i, la cual se encuentra
   incrementando en cada vuelta o iteración
*/
for (let i = 0; i < 10; i++) {
  console.log(i);
}

/* Podemos combinar distintas estructuras de control,
   como si fueran nuestros bloques elementales, para
   construir lo que sea
*/

/* Este for con if dentro muestra en consola
   todos los números pares del 0 al 50
*/
for (let i = 0; i <= 50; i++){
  if (i%2 == 0) {
    console.log( i + " es par");
  }
}

/*
---------------------------------------------
                Ejercicio
A partir de una variable que contenga una cadena de texto,
se debe mostrar mediante un console log esa misma cadena pero
alternando entre minúsculas y mayúsculas

var = "perritosalchicha"

El resultado en consola debe mostrarse como sigue
= "pErRiToSaLcHiChA"

---------------------------------------------
*/


/*
-----------------SOLUCIÓN--------------------
*/

/* 1) ¿Cómo obtengo el tamaño de mi palabra?
var palabra = "hola";
palabra.length -> devuelve el tamaño */

/* 2) ¿Cómo itero sobre mi palabra?
for (i=0; i < palabra.length; i++){
} */

/* 3) ¿Cómo sé cuándo es minúscula y cuándo es mayúscula?
var palabra = "hola"; */

// Los pares (0,2,4..) deben ser minúsculas
/* palabra.charAt(0); */
//RESULT: h

// Los nones (1,3,5..) deben ser minúsculas
/* palabra.charAt(1); */
//RESULT: o

/* Haciendo uso de una condición, evaluamos
   si el residuo de i dividio entre 2 es 0.
   Si es así, se trata de un número par.

   if(i%2 == 0)
*/

/* 4) ¿Cómo muestro en pantalla estas mínusculas y mayúsculas juntas? */

/* Mientras el FOR itera, podemos ir guardando
   en una nueva variable cada letra mínscula o
   mayúscula que se encuentre.

   if(i%2 == 0){
     miNuevaCadena = miNuevaCadena + str.charAt(i).toLowerCase();
   } else miNuevaCadena = miNuevaCadena + str.charAt(i).toUpperCase();

   Luego imprimimos nuestra nueva cadena con un console log.

   -> console.log(miNuevaCadena);
*/


//Integrando las respuestas anteriores, tenemos el siguiente código
var str = "HOLITA";
var miNuevaCadena = "";

for (var i = 0; i < str.length; i++) {
  if(i%2 == 0){
    miNuevaCadena = miNuevaCadena + str.charAt(i).toLowerCase();
  } else miNuevaCadena = miNuevaCadena + str.charAt(i).toUpperCase();
}

console.log(miNuevaCadena);

/*
---------------------------------------------
                  Funciones
---------------------------------------------
*/

/* Una función ejecuta todo el código contenido
   entre llaves {}. La palabra reservada "return"
   nos permite devolver algún valor para utilizarlo
   en algún otro lugar.
*/
function miFuncion() {
  return "¡Hola!";
}

/* Podemos ejecutar la función y guardar el resultado
   en una variable. "Return" devuelve el mensaje "¡Hola!",
   este será almacenado en la variable "mensaje"
*/
let mensaje = miFuncion();

// Mostramos el contenido de "mensaje" en consola.
console.log(mensaje);

/* También podemos mostrar el valor de devolución
   de la función mediante un console.log, es decir,
   cachamos lo que manda el "return" de la función
   y lo mostramos en consola.

   Es importante aclarar que, si solo ejecutamos
   nuestra función, es decir, hacemos lo siguiente:
                    miFuncion();
   no se mostrará nada en ningún lugar, ya que no
   estamos haciendo nada con lo que devuelve la función.
*/
console.log(miFuncion());


/* Las funciones llevan paréntesis () porque éstas
   pueden llevar "parámetros". Los parámetros se
   escriben dentro de los paréntesis.

   Aún si la función no usará parámetros, siempre
   debemos escribir los paréntes, aunque queden vacíos.
*/
function miFuncion2(mensaje) {
  console.log(mensaje);
}

/* Algo interesante ocurre al ejecutar la función que definimos
   en la línea de arriba (miFuncion2). En consola Podemos
   observar el siguiente resultado:

   -> "este es el mensaje"
   -> undefined

   Además de mostrarnos el console.log que se ejecuta al llamar
   a la función miFuncion2(), también obtenemos un UNDEFINED.
   Esto ocurre porque en esta ocasión no hicimos uso de la palabra
   reservada RETURN. Al no usar un return, nos devuelve un mensaje
   de "undefined", esto porque no está definido un valor de devolución.

   En otras palabras, si no usamos RETURN dentro de nuestras funciones,
   obtendremos un UNDEFINED. El que te aparezca este UNDEFINED no afecta en nada.
*/
miFuncion2("este el mensaje");

/* Las funciones pueden tener cero, uno o muchos parámetros.
   En este caso, la función "suma" recibe dos parámetros, que
   son dos números que serán sumados.
*/
function suma(num1, num2) {
  return num1 + num2;
}

console.log(suma(5, 3));

/* Es posible escribir tantas líneas de código como nosotros deseemos dentro
   de las llaves {} de nuestra función. Por ejemplo, podemos hacer una función
   utilizando el código del ejercicio que realizamos en la primera sesión, donde
   convertíamos cualquier palabra en cAmElCaSe, es decir, alternamos los caracteres
   de una palabra entre mayúsculas y minúsculas.
*/
function minusMayus(palabra) {

  let miNuevaCadena = ""

  for (var i = 0; i < palabra.length; i++) {
    if (i % 2 == 0) {
      miNuevaCadena = miNuevaCadena + palabra.charAt(i).toLowerCase();
    } else miNuevaCadena = miNuevaCadena + palabra.charAt(i).toUpperCase();
  }

  return miNuevaCadena;
}

/* Para hacer uso de nuestra nueva función, simplemente ejecutamos
   la función minusMayus() y mandamos dentro de los paréntesis la
   palabra que deseemos convertir.
*/
console.log(minusMayus("coco"));