'use strict';

// Declaración de variables globales:
var siglas = null; // Inicializo la variable vacía

// Creación de funciones:
function IngresarSigla() {
	do {
		siglas = prompt('Ingrese las siglas: dw, dm, dg');
		siglas = siglas == null ? siglas : siglas.toLowerCase();
	} while (!(siglas == 'dw' || siglas == 'dm' || siglas == 'dg'))
}

function MostrarCarrera() {
	var m = 'Cursa la carrera de ';
	if (!siglas) { // if (siglas == null) {
		m = 'Primero debe ingresar las siglas';
	} else {
		switch(siglas.toLowerCase()) {
			case 'dw':
				m += 'Diseño Web';
				break;
			case 'dm':
				m += 'Diseño Multimedial';
				break;
			case 'dg':
				m += 'Diseño Gráfico';
				break;
			default:
				m = 'La siga no es válida';
		}
		// Una vez armado el mensaje, reinicio:
		suglas = null;
	}
	console.info(m);
}