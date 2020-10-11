'use strict';

// Variales:
let html1 = '';

// Array:
let Entrega = [];

// Creando nuevo índice y sub-índices:
Entrega['Alumno'] = [];
Entrega['Alumno']['Nombre'] = 'Nicolás';
Entrega['Alumno']['Apellido'] = 'Volpe';
Entrega['Alumno']['Comisión'] = 'dwn2a';
Entrega['Alumno']['No responder al profe'] = function () {
	return true;
}

// Creando nuevo índice y sub propiedades:
Entrega['Materia'] = [];
Entrega['Materia'] = {
	Nombre: 'Programación I',
	Docente: 'Federico Noto',
	'Exámen parcial': 1,
};

// Recorrida:
for (let titulo in Entrega) {
	console.info('Índice:', titulo, 'Valor del índice:', Entrega[titulo]);
	html1 += `<p><strong>${titulo}</strong></p>`;
	html1 += '<ul>';
	for (let dato in Entrega[titulo]) {
		console.info('Sub índice:', dato, 'Valor del sub índice:', Entrega[titulo][dato]);
		console.info('Tipo de dato:', typeof Entrega[titulo][dato])
		if (typeof Entrega[titulo][dato] != 'function') {
			html1 += `<li><strong>${dato}:</strong> ${Entrega[titulo][dato]}</li>`;
		}
	}
	console.info('-----');
	html1 += '</ul>';
}

document.getElementById('info-1').innerHTML = html1;