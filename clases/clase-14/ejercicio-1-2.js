'use strict';

String.prototype.ReplaceAll = function(busqueda, reemplazo, insensible = false) {
	let expresionRegular = new RegExp(busqueda, insensible ? 'gi' : 'g');
	return this.replace(expresionRegular, reemplazo);
}

document.getElementById('info').innerHTML += `<p>${cadena.ReplaceAll('a', '-')}</p>`;
document.getElementById('info').innerHTML += `<p>${cadena.ReplaceAll('a', '-', true)}</p>`;

// Yapa:
Array.prototype.Promedios = function () {
	let acum = 0, cont = 0;
	for (let valor of this) {
		if (typeof valor === 'number') {
			acum += valor;
			cont++;
		}
	}
	return acum / cont;
}

let numeros = [1, 4, 'José', {}, 10];
console.info(numeros.Promedios());