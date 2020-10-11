'use strict';

// Creo la función constructora Humano:
function Humano(nombre = 'Nombre', apellido = 'Apellido') {
	this.nombre = nombre;
	this.Presentarse = function () {
		// En este ejemplo es indistito colocar el this o no, en el método:
		//let m = `Soy ${this.nombre} ${apellido}`;
		let m = `Soy ${nombre} ${apellido}`;
		return m;
	}
}

// Se crea el objeto fede:
let fede = new Humano('Federico', 'Noto');

// Se accede a la propiedad nombre del objeto fede
console.log(fede.nombre);

// Se ejecuta el método Presentarse del objeto fede
console.log(fede.Presentarse());

let mari = new Humano('Mariana', 'Noto');