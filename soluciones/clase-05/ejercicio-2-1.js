'use strict';

// Creación de la función:
function Paridad(num = null, ceroEsPar = false) {
	// Verificamos:
	if (num == null) {
		// Que el número no esté vacío:
		console.error('No ingresó un número');
	} else if (isNaN(num)) {
		// que el número sea un número:
		console.error('No ingresó un número válido');
	} else {
		var m = 'El número ' + num + ' es ';
		// Analizo si el usuario considera al cero par o no:
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
		// Retorno el mensaje:
		return m;
	}
}