/*
---------------------------------------------
              Arrow Functions
---------------------------------------------
*/

/* Las arrow functions son una novedad de
   ECMAScript6. Nos permiten definir funciones de otra
   manera.

   Puedes definir funciones como gustes, ya sea de
   esta forma o de la forma convencional que vimos
   previamente.
*/
let saludo = (nombre) => {
  return "¡Hola " + nombre + "!";
}

/*
---------------------------------------------
                  Scope
---------------------------------------------
*/

/* Dónde definimos nuestras variables importa,
   e importa mucho.

   Por ejemplo, si definimos una variable "resultado"
   dentro de nuestra funcion "suma", esta variable
   no será visible para todo el código que se encuentra
   fuera de la función.
*/

let suma = (num1, num2) => {
  let resultado = (num1 + num2);
  return resultado;
}

/* Dentro de la función, nosotros podemos llamar a la variable "resultado"
   y hacer uso de ella de la manera que deseemos. Sin embargo, si intentamos
   acceder a nuestra variable "resultado" desde fuera de la función, nos
   saldrá un error.
   En consola nos dirá que la variable "resultado" no existe.
*/

console.log(resultado);
//En consola diría -> UNDEFINED: La variable "resultado" no está definida

/* Así, podemos concluir que cualquier variable definida fuera de un bloque
   de código, es decir, cualquier variable que haya sido definida fuera de
   llaves {} es una variable que puede ser usada en cualquier lugar de nuestro
   código, sin importar dónde. A esto se le conoce como VARIABLES GLOBALES.

   Por el contrario, las variables definidas dentro de un bloque de código,
   es decir, dentro de llaves, son variables a las que solo se puede acceder
   estando dentro del mismo bloque de código.
   Es como si estas variables no existieran fuera del bloque donde fueron definidas.
*/

/*
---------------------------------------------
                  Arreglos
---------------------------------------------
*/

/* Podemos definir una variable como tipo "arreglo"
   si le asignamos a nuestra variable un par de corchetes -> []
*/
let miArreglo = [];

/* Podemos emplear la función typeof() para mostrar en consola
   cuál es el tipo de dato que contiene nuestra variable.

   Aquí ocurre algo muy particular de Javascript; nos dice que
   el tipo de dato de nuestra variable "miArreglo" es OBJECT

   Javascript reconoce arreglos y objetos como tipo OBJECT.
*/
console.log( typeof(miArreglo) );

/* La característica fundamental de los arreglos es que
   almacenan datos mediante un ÍNDICE; es decir, los datos
   se almacenan en POSICIONES dentro del arreglo.

   Podemos llenar un arreglo de forma manual de la siguiene manera:
*/
miArreglo = [1,2,3,4,5];
/* En este caso, el valor 1 está en la posición 0 del arreglo.
   el valor 2 está en la posición 1 del arreglo.
   el valor 3 está en la posición 2 del arreglo.
   el valor 4 está en la posición 3 del arreglo.
   el valor 5 está en la posición 4 del arreglo.

   Para obtener el contenido de alguna de las posiciones de nuestro arreglo,
   se hace de la siguiente manera:
                      miArreglo[posición]
   Debemos escribir el nombre de nuestro arreglo seguido de corchetes [].
   Dentro de los corchetes escribimos el número de la posición que
   deseamos obtener.
*/

/* Podemos recorrer todas las posiciones de nuestro arreglo
   haciendo uso de un ciclo for.

   En nuestro ejemplo observamos que el índice i comienza en 0 y termina en 4,
   por lo que con el siguiente código podemos mostrar mediante un console.log,
   dentro de nuestro for, el valor contenido en cada posición de nuestro arreglo.
*/
for (let i=0; i < miArreglo.length; i++){
  console.log(miArreglo[i]);

}


/* Los ciclos FOR no solo nos sirven para recorrer el arreglo e
   imprimir su contenido. También podemos llenar un arreglo haciendo
   uso de un for.

   Veamos el siguiente ejemplo:
*/
let nuevoArreglo = [];

for (let i = 0; i < 6; i++) {
  nuevoArreglo[i] = i;        // Cada posición del arreglo, de 0 a 5,
}                             // será llenada con el valor que tenga i

/* En este caso, al iterar, en la posición 0 del arreglo se asignará un 0
   en la posición 1 del arreglo se asignará un 1
   en la posición 2 del arreglo se asignará un 2
   ... y así hasta llegar al 5.
*/

/* Usando un console.log podemos imprimir todo nuestro arreglo para
   verificar que éste se haya llenado correctamente.
*/
console.log(nuevoArreglo);

/* 
      EJERCICIOS:

      1. - Hacer una función que convierta de grados
      centígrados a Farenheit

      2. - Hacer una función que muestre la tabla de
      multiplicar de un número

      3. - Leer un arreglo de enteros y sacar su promedio

      4. - Leer el nombre y sueldo de 8 empleados y
      mostrar el nombre y sueldo del empleado
      que más gana

      EXTRA: Hacer el ejercicio anterior pero para "n" empleados

      5. - Función que pida N parametros y devuelva
      cuantos parametros se le pasaron

      6. - Guardar en un array los 20 primeros
      números pares

      7. - Hacer una funcion que calcule el tiempo
      necesario para que un automóvil que se
      mueve con una velocidad de 73000 m / h
      recorra una distancia de 120 km.
          (TIEMPO = d / v)

      8. - Crear una funcion que reciba como
      parametro una oración y defina si
      es palindromo

      9. - Hacer los primeros 10 dígitos de la
      serie Fibbonacci
      
      EXTRA: Hacer que devuelva los n digitos de la serie Fibonacci
*/


/*
---------------------------------------------
                  Objetos
---------------------------------------------
*/

/* Podemos definir una variable como tipo "objeto"
   asignándole un par de llaves {} a nuestra variable.
*/
let miObjeto = {};    //<- variable que contiene un objeto

/* La característica primordial de los objetos, a diferencia
   de los arreglos, es que almacenan los datos mediante
                      clave: valor
   Aquí no existen posiciones para ubicar los valores almacenados,
   aquí usamos "claves", que sería el nombre con el que identificaremos
   un valor que deseemos almacenar.

   Los objetos, al igual que los arreglos, pueden almacenar lo que sea.
   Por ejemplo:
*/

let miObjeto = {
  mensaje: "que pedo banda",
  numero: 10,
  suma: function(num1,num2){
    return num1 + num2;
  },
  booleano: true
};

/* El objeto anterior contiene texto, número, función y booleano.
   Usemos un console.log para mostrar el contenido de nuestro objeto:
*/
console.log(miObjeto);

/* Para acceder a cualquiera de los ATRIBUTOS, es decir, cualquiera de
   los valores asociados a una clave, se hace de la siguiente manera:
                           miObjeto.mensaje;
   Comenzamos escribiendo el nombre de nuesto objeto, luego colocamos
   un punto, y después del punto escribimos la clave del atributo al que
   deseemos acceder.

    Para imprimir este atributo en consola podemos hacerlo así:
                      console.log(miObjeto.mensaje);
*/

/* La gran utilidad de los objetos es que podemos
   abstraer las características de cualquier cosa
   de la vida real y ponerlas en un objeto.

   Por ejemplo, podemos hacer una clase "persona":
*/
let persona = {
  nombre: "Juanita",
  edad: 18,
  nacionalidad: "Irlanda del Norte",
  dimeQuienEres: function(){
    /*Hacemos uso de "this" para referirnos al objeto dentro de él mismo;
      usando "this" podemos acceder a cualquiera de los atributos del objeto.
    */
    return "Mi nombre es " + this.nombre + " tengo " + this.edad + " años";
  }
}

console.log(persona.dimeQuienEres());

// //        EJERCICIO
//
// Crear tres objetos:
//
// 1) Triangulo
//    Atributos: base, altura
//    Metodo: perimetro, area
//
// 2) Cuadradro
//    Atributos: base, altura
//    Metodo: perimetro, area
//
// 3) Rectangulo
//    Atributos: base, altura
//    Metodo: perimetro, area

