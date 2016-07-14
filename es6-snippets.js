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
