'use strict';

// Creación de la función:
function CrearImgOpcionalConRetorno(rutaArchivo = 'items/000000.jpg') {
	return '<img src="' + rutaArchivo + '" alt="Imagen de un color" />';
}