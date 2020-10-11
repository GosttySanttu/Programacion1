'use strict';

// Creo la función:
function indexOfAll(array = [], busqueda = '', inicio = 0) {
	
}

// Función para listar colores:
function ListarIndexOf(color, array) {
	let aArray = indexOfAll(array, color);
	let html = `<p>El valor "${color}" aparece la siguiente cantidad de veces: ${aArray.length}.</p>`;
	if (aArray.length) {
		html += `<p>Aparece en el/los índice/s: ${aArray.toString()}.</p>`;
	}
	html += '<hr />';
	document.getElementById('info').innerHTML += html;
}

ListarIndexOf('rojo', aColores);
ListarIndexOf('verde', aColores);
ListarIndexOf('amarillo', aColores);