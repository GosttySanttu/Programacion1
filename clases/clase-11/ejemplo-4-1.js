'use strict';

// Creo la función constructora Humano:
function Humano(nombre = 'Nombre', apellido = 'Apellido') {
	this.Presentarse = function () {
		let m = `Soy ${nombre} ${apellido}`;
		return m;
	}
	// Getter:
	this.ObtenerNombre = function () {
		return nombre;
	}
	// Setter:
	this.EstablecerApellido = function (nuevoApellido) {
		apellido = nuevoApellido;
	}
}

// Se crea el objeto fede:
let fede = new Humano('Federico', 'Noto');

// Se accede a la propiedad nombre del objeto fede
console.log(fede.nombre);

// Se ejecuta el método Presentarse del objeto fede
console.log(fede.Presentarse());
console.log(fede.ObtenerNombre());
fede.EstablecerApellido('Saffirio');
console.log(fede.Presentarse());