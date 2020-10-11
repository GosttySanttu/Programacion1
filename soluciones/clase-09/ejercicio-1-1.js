'use strict';

// Función:
function RecorrerArray(unArray = ['Sin elmentos']) {
	// Variable que guarda el html generado:
	let html = '';
	
	// Generación y recorrido:
	html += '<ul>';
	for (let valor of unArray) {
		html += `<li>${valor}</li>`;
	}
	html += '</ul>';

	// Ejecuto la función 'MostrarInfo':
	MostrarInfo(html);
}
