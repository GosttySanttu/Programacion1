'use strict';

// Creo la función:
function lastIndexOfAll(array = [], busqueda = '', inicio = array.length - 1) {
	
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