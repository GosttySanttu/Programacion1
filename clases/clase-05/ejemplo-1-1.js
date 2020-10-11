'use strict';

// Declaración de variables globales:
var rutaArchivo;

// Creación de las funciones:
function CrearImg() {
	document.write('<img src="' + rutaArchivo + '" alt="Imagen de un color" />');
}

function CrearImgConParametro(rutaArchivo) {
	document.write('<img src="' + rutaArchivo + '" alt="Imagen de un color" />');
}