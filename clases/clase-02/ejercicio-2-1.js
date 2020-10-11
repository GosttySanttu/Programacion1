'use strict';

// Declaración de variables:
var m = '',
	n,
	cont = 0,
	contApb = 0,
	contDpb = 0,
	contPrm = 0,
	acumApb = 0,
	acumDpb = 0,
	acumPrm = 0,
	min,
	max,
	promDpb,
	promApb,
	promPrm;

// Desarrollo del algoritmo:

m += '<ul>';
	m += '<li><strong>Promedio desaprobados:</strong> ' + promDpb + '</li>';
	m += '<li><strong>Promedio aprobados:</strong> ' + promApb + '</li>';
	m += '<li><strong>Promedio promocionados:</strong> ' + promPrm + '</li>';
	m += '<li><strong>Mínimo:</strong> ' + min + '</li>';
	m += '<li><strong>Máximo:</strong> ' + max + '</li>';
m += '</ul>';