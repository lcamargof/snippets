//////////////////////////////
// Declaración de variables //
//////////////////////////////

var a = 5; // Manera tradicional, el alcance es toda la función
let b = 10; // Alcance de bloque local, solo el bloque que lo declara
const c = 20; // No se puede reasignar

if (true) {
	var a = 30; // a = a
	let b = 5; // Solo dentro del bloque "if" b != b

	console.log(a); // 30
	console.log(b); // 5
}

console.log(a); // 30
console.log(b); // 10
c = 50; // TypeError: Assignment to constant variable.

///////////////////////////
// Declaración de clases //
///////////////////////////

class Person {

	// Class constructor
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	// Class method
	greet() {
		// Uso de `
		return `Mi nombre es ${this.name}, tengo ${this.age} años...
		¡Mucho gusto!`;
	}
}

const person = new Person('Luis Camargo', 23); // No la volvera a reasignar

console.log(person.greet()); // Mi nombre es Luis Camargo, tengo 23 años... \n ¡Mucho gusto!

///////////////
// Funciones //
///////////////

// Función de una linea con "return" implicito
// Y sin () por ser solo un parametro
const myFunction = text => console.log(text);

const myFunctionTwo = (param1, param2 = 'test') => {
	console.log(param1);

	return param2; // test
}

// Old way
function myNormalFunction() {
	this.test = 'variable local';
	this.other = 'Otra variable local';

	// Copia del this
	let self = this;

	// Otro bloque de funcion
	setTimeout(function() {
		console.log(this.test); // undefined
		console.log(self.test); // variable local
	}, 100);

	setTimeout(() => {
		console.log(this.other); // Otra variable local
	}, 50);
}

/*
	Este console.log regresara:
	1. 'test' => Es el parametro por default de la función que regrese en el return
	2. 'hola' => Parametro enviado
 */
console.log(myFunctionTwo('hola'));

// Definimos una nueva instancia de la funcion
var normalFunction = new myNormalFunction();

// Function anonima sin parametros
console.log( () => 'Hola mundo!' ); // Hola mundo