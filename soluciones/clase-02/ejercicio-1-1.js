'use strict';

// Declaración de variables:
var m = '',
	n,
	cont = 0,
	acum = 0,
	min,
	max,
	prom;

// Desarrollo del algoritmo:
m += '<ul>';
for (var cont = 1; cont <= 5; cont++) {
	n = parseInt(prompt('Ingrese un valor'));
	// Acumulación:
	acum += n;
	// Mínimo y máximo:
	if (cont == 1) {
		min = n;
		max = n;
	} else {
		min = n < min ? n : min;
		max = n > max ? n : max;
	}
	// Consola:
	console.info('Valor:', n, 'cont:', cont, 'acum:', acum, 'min:', min, 'max:', max);
	// Armo el mensaje:
	m += '<li>Valor ' + cont + ': <strong>' + n + '</strong>.</li>';
}
m += '</ul>';

// Calculo de promedio:
prom = acum / cont;

m += '<ul>';
	m += '<li><strong>Promedio:</strong> ' + prom + '</li>';
	m += '<li><strong>Mínimo:</strong> ' + min + '</li>';
	m += '<li><strong>Máximo:</strong> ' + max + '</li>';
m += '</ul>';