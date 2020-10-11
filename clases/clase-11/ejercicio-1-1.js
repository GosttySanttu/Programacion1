'use strict';

// Creo la función constructora Licuado:
function Licuado() {
	// Creo la pripiedad privada ingredientes:
	let ingredientes = [];

	// Creo el método público AgregarIngredientes:
	this.AgregarIngredientes = function () {
		do {
			let fruta = new Fruta();

			fruta.EstablecerNombre();

			let nombreFruta = fruta.ObtenerNombre();

			ingredientes.push(nombreFruta);

		} while (confirm('Desea agregar otra fruta?'))
	}

	// Creo el getter para ingredientes:
	this.ObtenerIngredientes = function () {
		return ingredientes;
	}
}

// Creo la función constructora Fruta:
function Fruta() {
	// Creo la propiedad privada nombre:
	let nombre;

	// Creo el setter para nombre:
	this.EstablecerNombre = function () {
		do {
			nombre = prompt('Ingrese el nombre de la fruta')
		} while (!isNaN(nombre))
	}
	
	// Creo el getter para nombre:
	this.ObtenerNombre = function () {
		return nombre;
	}
}

// Creo un nuevo licuado:
let licuadito = new Licuado();

// Agrego ingredientes:
licuadito.AgregarIngredientes();

// Obtengo todos los ingredientes:
let ingredientes = licuadito.ObtenerIngredientes();

// Recorro y muestro por consola cada ingrediente:
for (let ingrediente of ingredientes) {
	console.info(ingrediente);
}