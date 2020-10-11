'use strict';

// Creo la función constructora Licuado:
function Licuado() {
	// Creo la pripiedad privada ingredientes:
	let ingredientes = [];

	// Creo el método público AgregarIngredientes:
	this.AgregarIngredientes = function () {
		do {
			// Creo una nueva fruta:
			let fruta = new Fruta();

			// Le cargo su nombre:
			fruta.EstablecerNombre();

			// Obtengo el nombre:
			let nombre = fruta.ObtenerNombre();

			// Guardo la fruta en ingredientes:
			ingredientes.push(nombre);
		} while (confirm('Desea ingresar otra fruta?'))
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
			nombre = prompt('Ingrese el nombre de la fruta');
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