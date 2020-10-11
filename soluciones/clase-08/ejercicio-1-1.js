// Variable para guardar mensaje:
var info = '';

// Matriz base:
var aSodaStereo = [];
/*
aSodaStereo[0] = [];			// Necesito indicar que la posición 0 será un array.
aSodaStereo[0][0] = 'Gustavo';
aSodaStereo[0][1] = 'Cerati';
aSodaStereo[0][2] = 'Guitarra';
aSodaStereo[0][3] = 'cerati.jpg';

aSodaStereo[1] = [];			// Necesito indicar que la posición 1 será un array.
aSodaStereo[1][0] = 'Héctor';
aSodaStereo[1][1] = 'Bosio';
aSodaStereo[1][2] = 'Bajo';
aSodaStereo[1][3] = 'bosio.jpg';

aSodaStereo[2] = [];			// Necesito indicar que la posición 2 será un array.
aSodaStereo[2][0] = 'Carlos';
aSodaStereo[2][1] = 'Ficicchia';
aSodaStereo[2][2] = 'Batería';
aSodaStereo[2][3] = 'alberti.jpg';
*/
// Creación de la matriz asociativa:
aSodaStereo[0] = [];			// Necesito indicar que la posición 0 será un array.
aSodaStereo[0]['Nombre'] = 'Gustavo';
aSodaStereo[0]['Apellido'] = 'Cerati';
aSodaStereo[0]['Instrumento'] = 'Guitarra';
aSodaStereo[0]['Imagen'] = 'cerati.jpg';

aSodaStereo[1] = [];			// Necesito indicar que la posición 1 será un array.
aSodaStereo[1]['Nombre'] = 'Héctor';
aSodaStereo[1]['Apellido'] = 'Bosio';
aSodaStereo[1]['Instrumento'] = 'Bajo';
aSodaStereo[1]['Imagen'] = 'bosio.jpg';

aSodaStereo[2] = [];			// Necesito indicar que la posición 2 será un array.
aSodaStereo[2]['Nombre'] = 'Carlos';
aSodaStereo[2]['Apellido'] = 'Ficicchia';
aSodaStereo[2]['Instrumento'] = 'Batería';
aSodaStereo[2]['Imagen'] = 'alberti.jpg';

// Recorrida de la matriz:
for (var i = 0; i < aSodaStereo.length; i++) {
	info += '<ul>';
	for (var dato in aSodaStereo[i]) {
		if (dato == 'Imagen') {
			info += `<li><strong>${dato}:</strong> <img src="items/${aSodaStereo[i][dato]}" /></li>`;
		} else {
			info += `<li><strong>${dato}:</strong> ${aSodaStereo[i][dato]}</li>`;
		}
		
	}
	info += '</ul>';
}

// Egreso de información:
document.getElementById('info').innerHTML = info;