/*
---------------------------------------------
                  Clases
---------------------------------------------
*/

/* Los objetos son muy útiles, pero resulta tedioso tener que
   escribir muchas veces el mismo código para crear muchos objetos
   similares.

   Para resolver este problema tenemos a las CLASES.
   Las clases son como un molde que contiene parámetros
   generales para crear objetos similares, tantos como querramos.

   Cada vez que creamos un nuevo objeto a partir de una clase,
   se le conoce como INSTANCIAR.

   De esta forma, un objeto es una INSTANCIA de una clase.
*/

/* Para definir una clase, hacemos uso de la palabra
   reservada CLASS, seguido del nombre de nuestra clase.

   OJO: por convención, las clases siempre se nombran comenzando
        con una mayúsculas

        por esto las variables siempre se nombran comenzando
        con una minúscula.
*/
class Animal {

    /* El CONSTRUCTOR es la parte más importante de las clases;
       aquí definimos los atributos básicos que tendrán nuestros
       objetos
    */
    constructor(tamanio, color, patas) {
        this.tamanio = tamanio
        this.color = color
        this.patas = patas
    }
    /* Como buena práctica, para proteger los datos de nuestra
       clase podemos hacer uso de los GETTERS Y SETTERS

       En teoría, cuando alguien hace uso de nuestros objetos
       creados a partir de una de nuestras clases, solo
       debemos permitirles hacer uso de los MÉTODOS de
       nuestra clase.

       Los MÉTODOS son idénticos a las FUNCIONES. La única
       diferencia es que los métodos son parte de un objeto,
       y las funciones no dependen de nadie.
    */

    //Getter
    /* Los GETTERS permiten obtener el valor de
       nuestros atributos sin tener que acceder al
       objeto haciendo uso del punto (objeto.atributo).
    */
    getTamanio() {
        return this.tamanio;
    }

    //Setter
    /* Los SETTERS permiten cambiar el valor de
       nuestros atributos sin tener que acceder al
       objeto haciendo uso del punto (objeto.atributo).
    */
    setTamanio(tamanio) {
        this.tamanio = tamanio;
    }

    /* Además de los getters y setters, podemos definir
       nuestros propios métodos para la clase.
  
       Por ejemplo: correr() e irAlBaño()
    */
    correr() {
        return "El animal de color " + this.color + "está corriendo";
    }

    irAlBaño() {
        console.log("No molestes, está en el trono");
    }
}

/* Una vez definida nuestra clase, ahora podemos crear nuestros
   objetos. Es decir, ahora podremos crear INSTANCIAS de nuestra clase.

   Para instanciar nuestra clase, debemos hacer uso de la palabra
   reservada NEW seguido del nombre de nuestra clase; la clase
   debe llevar paréntesis, y dentro de los paréntesis mandamos
   los parámetros que hayamos colocado en nuestro constructor:
            new Animal("parametro1", "parametro2", ...)
   Para guardar nuestra instancia y poder utilizarla después, la línea de
   código debe ir precedida por una variable en donde querramos almacenar
   nuestra nueva instancia.
   Se hace de la siguiente manera:
*/
let pajaroAlien = new Animal("chiquito", "violeta", "2");

/* Para mostrar en consola uno de los métodos de nuestro nuevo objeto,
   lo hacemos de la siguiente manera:
*/
console.log(pajaroAlien.correr());

/* También podemos hacer uso del setter "setTamanio"
   para cambiar el tamaño de nuestro nuevo objeto.
*/
pajaroAlien.setTamanio("grande");

/* Y para mostrar nuestro nuevo valor de "tamaño" en consola,
   podemos hacer uso del getter "getTamanio"
*/
console.log(pajaroAlien.getTamanio());

// //                     EJERCICIO
// Crear una clase Carro con
//   atributos: color, peso, marca
//   metodos: arrancar, apagar
//
//   arrancar -> El carro Toyota de color azul arranco
//   apagar -> El carro Toyota se apago
//
// Crear tres instancias de la clase Carro e
// imprimir con console.log alguno de sus metodos.

/*
---------------------------------------------
            Clases: Ejercicios
---------------------------------------------
*/

/*
	Haz una clase llamada Persona que siga las siguientes condiciones:
	Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
	calcularIMC()
	esMayorDeEdad()
	El constructor pide nombre, edad,sexo,peso y altura
	Generar el RFC a partir de el nombre, edad y sexo
*/

class Persona {
    constructor(nombre, edad, sexo, peso, altura) {
        this.nombre = nombre
        this.edad = edad
        this.sexo = sexo
        this.peso = peso
        this.altura = altura
    }

    calcularIMC() {
        return this.peso / (this.estatura * this.estatura);
    }

    esMayorDeEdad() {
        if (this.edad > 17) {
            return "Es mayor de edad";
        } else return "No es mayor de edad";
    }

    obtenerRFC() {
        this.rfc = (this.nombre + this.edad + this.sexo);
    }
}

let mauricio = new Persona("Mauricio", 22, "H", 73.5, 1.72);

console.log(mauricio.esMayorDeEdad());
/* El atributo "rfc" se genera hasta que se ejecuta por primera vez el
   método "obtenerRFC()". Podemos observar que, si intentamos mostrar
   en consola el atributo "rfc", aparecerá un UNDEFINED en consola.
*/
console.log(mauricio.rfc);
console.log(mauricio.obtenerRFC());

/* Ahora sí, tras ejecutar el método "obtenerRFC()", podemos mostrar
   en consola el atributo. Es decir, el atributo ahora existe.
*/
console.log(mauricio.rfc);

/*
	Crear una clase Cuenta que tenga los siguientes atributos y metodos:
	Titular y cantidad
	ingresar(cantidad)
	retirar(cantidad)
	Hacer las validaciones previas
	Como regla de negocio no debe de tener más de $900 y menos de $10
*/

class Cuenta {
    constructor(titular, cantidad) {
        this.titular = titular
        this.cantidad = cantidad
    }

    ingresar(cantidad) {
        if (this.cantidad + cantidad > 900) {
            return "Estas superando el limite de $900; operacion cancelada";
        } else {
            this.cantidad += cantidad;
            return "Operacion exitosa: Tu saldo es de " + this.cantidad;
        }
    }

    retirar(cantidad) {
        if (this.cantidad - cantidad < 10) {
            return "No tienes fondos suficientes; el minimo es de $10";
        } else {
            this.cantidad -= cantidad;
            return "Has retirado $" + cantidad + ". Tu nuevo saldo es de: " + this.cantidad;
        }

    }
}

let cuenta = new Cuenta("Mauricio Saavedra", 350);

console.log(cuenta.cantidad);

console.log(cuenta.retirar(400));
console.log(cuenta.ingresar(1000));

console.log(cuenta.retirar(50));
console.log(cuenta.ingresar(100));


