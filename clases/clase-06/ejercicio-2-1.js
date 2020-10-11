'use strict';

// Declaración de variables globales:
var n1 = null, n2 = null, r = null;

// Creación de las funciones:
function ObtenerNumero1() {
	do {
		n1 = parseInt(prompt('Ingrese el primer valor'));
	} while (isNaN(n1))
}

function ObtenerNumero2() {
	do {
		n2 = parseInt(prompt('Ingrese el segundo valor'));
	} while (isNaN(n2))
}

function Operacion(operador) {
	if (n1 == null || n2 == null) {
		console.warn('No ingresó uno o ambos valores');
	} else {
		switch (operador) {
			case 'sumar':
				r = n1 + n2;
				break;
			case 'restar':
				r = n1 - n2;
				break;
			case 'multiplicar':
				r = n1 * n2;
				break;
			case 'dividir':
				r = n1 / n2;
		}
	}
}

function Mostrar() {
	if (r == null) {
		console.warn('No realizó ninguna operacion')
	} else {
		var m = 'El resultado es: ' + r;
		console.info(m);
		// Reinicio de variables:
		n1 = null;
		n2 = null;
		r = null;
	}
}