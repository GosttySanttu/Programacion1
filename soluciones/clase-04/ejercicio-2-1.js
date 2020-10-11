'use strict';

// Declaración de variables globales:
var num = null;

// Creación de funciones:
function IngresarNumero () {
	do {
		num = parseInt(prompt('Ingrese un número'));
	} while (isNaN(num))
}

function MostrarParidad() {
	var m = 'El número ';
	if (num == null) { // No puedo poner !num, porque el 0 se considera false
		m = 'Primero debe ingresar un número';
	} else {
		m += num + ' es '
		if (num == 0) {
			m += 'cero';
		} else if (num % 2 == 0) {
			m += 'par';
		} else {
			m += 'impar';
		}
		num = null;
	}
	console.info(m);
}