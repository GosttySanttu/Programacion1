'use strict';

// Variables:
let aColores = ['rojo', 'verde', 'azul'], html = '';

Array.prototype.Listar = function () {
	for (let valor of this) {
		console.info(valor);
	}
}

Array.prototype.ListarHTML = function (tipo = 'ul') {
	let l = '';
	l += tipo == 'ul' ? '<ul>' : '<ol>';
	for (let valor of this) {
		l += `<li>${valor}</li>`;
	}
	l += tipo == 'ul' ? '<ul>' : '<ol>';
	return l;
}

aColores.Listar();
html = aColores.ListarHTML('ol');

document.getElementById('info').innerHTML = html;