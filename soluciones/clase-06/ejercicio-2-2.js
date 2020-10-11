'use strict';

// Creación de la función para ingresar un valor númerico validado:
function IngresarNumero(txt = 'Ingrese un valor numérico', esFloat = true) {
	var n;
	do {
		n = esFloat ? parseFloat(prompt(txt)) : parseInt(prompt(txt));
	} while (isNaN(n))
	return n;
}