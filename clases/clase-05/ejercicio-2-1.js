'use strict';

// Creación de la función:
function Paridad(num = null, ceroEsPar = false) {
	if (num == null) {
		console.error('No ingresó un valor');
	} else if (isNaN(num)) {
		console.error('No ingresó un número');
	} else {
		var m = 'El número ' + num + ' es ';
		if (ceroEsPar) {
			if (num % 2 == 0) {
				m += 'par';
			} else {
				m += 'impar';
			}
		} else {
			if (num == 0) {
				m += 'cero, evidentemente';
			} else if (num % 2 == 0) {
				m += 'par';
			} else {
				m += 'impar';
			}
		}
		return m;
	}
}