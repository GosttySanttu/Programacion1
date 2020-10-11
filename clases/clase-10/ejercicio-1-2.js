'use strict';

// Variales:
let html2 = '';

// Objeto:
let Entrega2 = {
	Alumno: {
		Nombre: 'Nicolás',
		Apellido: 'Volpe',
		'Comisión': 'dwn2a',
	},
	Materia: {
		Nombre: 'Programación I',
		Docente: 'Federico Noto',
		'Exámen parcial': 1,
	},
};


// Recorrida:
for (let titulo in Entrega) {
	console.info('Índice:', titulo, 'Valor del índice:', Entrega[titulo]);
	html2 += `<p><strong>${titulo}</strong></p>`;
	html2 += '<ul>';
	for (let dato in Entrega[titulo]) {
		console.info('Sub índice:', dato, 'Valor del sub índice:', Entrega[titulo][dato]);
		console.info('Tipo de dato:', typeof Entrega[titulo][dato])
		if (typeof Entrega[titulo][dato] != 'function') {
			html2 += `<li><strong>${dato}:</strong> ${Entrega[titulo][dato]}</li>`;
		}
	}
	console.info('-----');
	html2 += '</ul>';
}

document.getElementById('info-2').innerHTML = html2;