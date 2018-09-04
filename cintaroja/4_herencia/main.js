/*
---------------------------------------------
                 Herencia
---------------------------------------------
*/


/* Podemos definir una clase padre que pasará sus
   atributos y métodos a clases derivadas de ésta,
   mejor conocidas como "clases hijas".
*/
class Animal{
	constructor(name, peso){
		this.name = name
		this.peso = peso
	}

	getName(){
		return this.name
	}

	setName(newName){
		this.name = newName
	}

	comer(comida){
		return 'El ' + this.name + ' esta comiendo ' + comida
	}
}

/* Usamos la palabra reservada "extends" para indicar que esta
   clase Perro está heredando o "extendiendo" de la clase Animal
*/
class Perro extends Animal{
	constructor(raza,name,peso){
		super(name,peso)
		this.raza = raza
	}

	getRaza(){
		return this.raza
	}

	setRaza(newRaza){
		this.raza = newRaza
	}

	correr(){
    // Esta es otra forma de mostrar mensajes, usando comillas invertidas y
    // colocando las variables que deseemos mostrar dentro de algo como esto -> ${}
		return `El perro de la raza ${this.raza} esta corriendo`
	}
}

// Lo mismo ocurre con la clase Pájaro; esta extiende de Animal
class Pajaro extends Animal{
	constructor(color,name,peso){
		super(name,peso)
		this.color = color
	}

	volar(){
		return `El pajarito de color ${this.color} esta volando`
	}
}

var pug = new Perro("Pug","Fido",40)
console.log(pug)

var perico = new Pajaro("Azul","Periquito",5)
console.log(perico)

/* Podemos pasar un objeto de tipo "Animal", es decir,
   una instancia de la clase Animal como parámetro de
   una función.

   pug y perico son instancias de las clases Perro y Pájaro,
   las cuales, a su vez, son clases hijas de la clase Animal.

   Por lo tanto, pug y perico no solo son instancias de la
   clase Perro y Pájaro, también son instancias de la clase Animal.
*/
function comerComida(Animal){
	console.log(Animal.comer("Comida"));
}

// Así, la siguiente función sirve con cualquier objeto derivado
// de la clase Animal. En este caso, podemos usar el objeto "perico"
// o el objeto "pug" y en ambos casos la función se ejecutará sin problemas.
comerComida(perico)

/*
---------------------------------------------
            Herencia: Ejercicio
---------------------------------------------
*/

/* Crear una clase comida, que herede a tres clases
comidamexicana, comidajaponesa, comidatailandesa,
la clase padre debe tener los
atributos: nombre, precio, sazon, tamanio
  metodos: hervir(), emitirOlor()

Con clases que hereden de Comida:
comidamexicana:
  -picor
  enchilar()
comidajaponesa:
  -saladez
  queTanSalado()
comidatailandesa:
  -color
  deQueColor()
 */