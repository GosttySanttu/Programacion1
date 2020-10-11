'use strict';

// Creo la función constructora Humano:
function Humano() {
	let nombre = 'Sin nombre';
	let apellido = 'Sin apellido';
	this.Presentarse = function () {
		let m = `Soy ${this.nombre} ${apellido}`;
		return m;
	}
}

// Se crea el objeto fede:
let fede = new Humano();

// Se accede a la propiedad nombre del objeto fede
console.log(fede.nombre);

// Se ejecuta el método Presentarse del objeto fede
console.log(fede.Presentarse());