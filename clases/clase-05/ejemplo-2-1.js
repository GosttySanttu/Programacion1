'use strict';

// Creación de las funciones:
function CrearImgOpcional(rutaArchivo = 'items/000000.jpg') {
	document.write('<img src="' + rutaArchivo + '" alt="Imagen de un color" />');
}

function CrearImgObligatorio(rutaArchivo = null) {
	if (rutaArchivo == null) {
		console.error('No se recibió un valor válido');
	} else {
		document.write('<img src="' + rutaArchivo + '" alt="Imagen de un color" />');
	}
}