'use strict';

// Consola:
const _ci = console.info;

// Creo un array:
let array = [
	'Dato 1',
	'Dato 2',
	3.1416,
	true,
	false,
	[
		'Sub dato 1',
		'Sub dato 2',
	],
];

// Ciclo for:
for (let i = 0; i < array.length; i++) {
	_ci(`array[${i}]:`, array[i]);
}
_ci('-----');

// Ciclo for in:
for (let indice in array) {
	_ci('indice:', indice, '- array[indice]:', array[indice]);
}
_ci('-----');

// Ciclo for of:
for (let valor of array) {
	_ci(valor);
}
_ci('-----');

// Ciclo forEach:
array.forEach(function (valor, indice) {
	_ci('indice:', indice, '- valor:', valor);
});