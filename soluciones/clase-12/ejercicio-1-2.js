'use strict';

// Creo la función:
function lastIndexOfAll(array = [], busqueda = '', inicio = array.length - 1) {
	// Variable que se encarga de guardar el índice de la búsqueda:
	let indice;

	// Variable que se encarga de ir guardando todos los índices de la búsqueda:
	let aIndices = [];

	// Se repite el proceso mientras haya índices:
	do {
		// Búsqueda:
		indice = array.lastIndexOf(busqueda, inicio);

		// Se verifica si hubo algún resultado:
		if (indice != -1) {
			// Si lo hubo, se guarda el índice:
			aIndices.push(indice);

			// Ahora el inicio será la siguiente posición al índice encontrado:
			inicio = indice - 1;
		}
	} while (indice != -1 && inicio >= 0)

	// Se retorna el array con los índices:
	return aIndices;
}

// Función para listar colores:
function ListarLastIndexOf(color, array) {
	let aArray = lastIndexOfAll(array, color);
	let html = `<p>El valor "${color}" aparece la siguiente cantidad de veces: ${aArray.length}.</p>`;
	if (aArray.length) {
		html += `<p>Aparece en el/los índice/s: ${aArray.toString()}.</p>`;
	}
	html += '<hr />';
	document.getElementById('info').innerHTML += html;
}

ListarLastIndexOf('rojo', aColores);
ListarLastIndexOf('verde', aColores);
ListarLastIndexOf('amarillo', aColores);