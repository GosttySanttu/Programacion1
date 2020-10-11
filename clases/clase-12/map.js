'use strict';

// Array:
let lados = [1, 1, 2, 3, 5, 8];

// Aplicación del méotodo:
let perimetros = lados.map(CalcularPerimetro);

function CalcularPerimetro(valorLado) {
	return valorLado * 4;
}

let areas = lados.map(valorLado => valorLado ** 2);

// Resultados:
console.info('perimetros:', perimetros);
console.info('-----');
console.info('areas:', areas);
console.info('-----');

// Array:
let personas = [
	{ nombre: 'Pablo', apellido: 'Intilisano'},
	{ nombre: 'Fede', apellido: 'Noto'},
	{ nombre: 'Juan', apellido: 'Beret'},
];

// Aplicación del méotodo:
let nombreApellidos = personas.map(ObtenerNombreApellido);
function ObtenerNombreApellido(laPersona) {
	return laPersona.nombre + ' ' + laPersona.apellido;
}

// Resultados:
console.info('nombreApellidos:', nombreApellidos);