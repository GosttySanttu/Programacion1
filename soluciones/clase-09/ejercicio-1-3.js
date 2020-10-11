'use strict';

// Función:
function RecorrerArray3(unArray = ['Sin elmentos'], inicia = 0, finaliza = 0) {
	// Variable que guarda el html generado:
	let html = '';
	
	// Conversión de los valores:
	inicia = parseInt(inicia);
	finaliza = parseInt(finaliza);

	// Verificaciones:
	inicia = isNaN(inicia) || inicia < 0 || inicia > unArray.length ? 0 : inicia;
	finaliza = isNaN(finaliza) || finaliza < 0 || finaliza > unArray.length || inicia >= finaliza ? unArray.length : finaliza;

	// Generación y recorrido:
	html += '<ul>';
	for (let i = inicia; i < finaliza; i++) {
		html += `<li>${unArray[i]}</li>`;
	}
	html += '</ul>';

	// Ejecuto la función 'MostrarInfo':
	MostrarInfo(html);
}
