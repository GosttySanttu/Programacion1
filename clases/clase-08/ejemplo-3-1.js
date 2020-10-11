'use strict';

// Creación de la matriz:
var aSodaStereo = [
	['Gustavo', 'Cerati', 'Guitarra', 'soda-stereo-cerati.jpg'],
	['Héctor', 'Bosio', 'Bajo', 'soda-stereo-bosio.jpg'],
	['Carlos', 'Ficicchia', 'Batería', 'soda-stereo-alberti.jpg'],
];

// Función para mostrar la info recorrida:

function MostrarInfo() {
	var info = '';
	for (var i = 0; i < aSodaStereo.length; i++) {
		info += `<p>Músico ${i}:</p>`;
		info += '<ul>';
		for (var j = 0; j < aSodaStereo[i].length; j++) {
			if (j == 3) {
				info += `<li><img src="items/${aSodaStereo[i][j]}" /></li>`;
			} else {
				info += `<li>${aSodaStereo[i][j]}</li>`;
			}
		}
		info += '</ul>';
	}
	document.getElementById('info').innerHTML = info;
}