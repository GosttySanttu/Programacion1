// Variable para guardar mensaje:
var info = '';

// Matriz base:
var aSodaStereo = [];

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

// Creación de la matriz asociativa:

// Recorrida de la matriz:

// Egreso de información:
document.getElementById('info').innerHTML = info;