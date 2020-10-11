'use strict';

// Versión 2:
var aColoresParaLaOtraVersion = [
	'red',
	'green',
	'blue',
];

// Requiero indicar cual será el próximo índice:
var indice = 3;

function AgregarDeOtraForma() {
	var color;
	do {
		color = prompt('Ingrese un color');
	} while (!isNaN(color))
	// Agrego mediante índice:
	aColoresParaLaOtraVersion[indice] = color;
	// Incremento el índice para dejarlo prepara para el próximo valor:
	indice++;
}

function MostrarDeOtraForma() {
	console.info(aColoresParaLaOtraVersion);
	alert(aColoresParaLaOtraVersion);
}