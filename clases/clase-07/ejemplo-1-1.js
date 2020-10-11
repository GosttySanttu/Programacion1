'use strict';

// Versión 1:
var aColores = [
	'red',
	'green',
	'blue',
];

function Agregar() {
	var color;
	do {
		color = prompt('Ingrese un color');
	} while (!isNaN(color))
	// Agrego mediante push:
	aColores.push(color);
}

function Mostrar() {
	console.info(aColores);
	alert(aColores);
}