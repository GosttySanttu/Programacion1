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
		info += `
		<p><strong>${aSodaStereo[i][0]} ${aSodaStereo[i][1]}</strong></p>
		<p><strong>Instrumento:</strong> ${aSodaStereo[i][2]}</p>
		<img src="items/${aSodaStereo[i][3]}" />
		`;
	}
	document.getElementById('info').innerHTML = info;
}