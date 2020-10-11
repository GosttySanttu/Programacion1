'use strict';

// Función indexOfAll:
Array.prototype.indexOfAll = function(busqueda = '', inicio = 0) {
	let indice, aIndices = [];
	do {
		indice = this.indexOf(busqueda, inicio);
		if (indice != -1) {
			aIndices.push(indice);
			inicio = indice + 1;
		}
	} while (indice != -1 && inicio < this.length)
	return aIndices;
}

// Función lastIndexOfAll:
Array.prototype.lastIndexOfAll = function(busqueda = '', inicio = this.length - 1) {
	let indice, aIndices = [];
	do {
		indice = this.lastIndexOf(busqueda, inicio);
		if (indice != -1) {
			aIndices.push(indice);
			inicio = indice - 1;
		}
	} while (indice != -1 && inicio >= 0)
	return aIndices;
}

// Función para listar colores:
Array.prototype.Listar = function(valor = '', metodo = 'indexof') {
	let aArray = metodo == 'indexof' ? this.indexOfAll(valor) : this.lastIndexOfAll(valor);
	let html = `<p>El valor "${valor}" aparece la siguiente cantidad de veces: ${aArray.length}.</p>`;
	if (aArray.length) {
		html += `<p>Aparece en el/los índice/s: ${aArray.toString()}.</p>`;
	}
	html += '<hr />';
	document.getElementById('info').innerHTML += html;
}

aColores.Listar('rojo');
aColores.Listar('verde', 'lastindexof');