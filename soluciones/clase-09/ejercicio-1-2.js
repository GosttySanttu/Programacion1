'use strict';

// Función:
function RecorrerArray2(unArray = ['Sin elmentos'], inicia = 0) {
	// Variable que guarda el html generado:
	let html = '';
	
	// Conversión del valor:
	inicia = parseInt(inicia);

	// Verificaciones:
	inicia = isNaN(inicia) || inicia < 0 || inicia > unArray.length ? 0 : inicia;

	// Generación y recorrido:
	html += '<ul>';
	for (let i = inicia; i < unArray.length; i++) {
		html += `<li>${unArray[i]}</li>`;
	}
	html += '</ul>';

	// Ejecuto la función 'MostrarInfo':
	MostrarInfo(html);
}
