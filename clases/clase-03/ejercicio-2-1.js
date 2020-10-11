'use strict';

// Declaración de variables:
var m = '',
	ciudad,
	sexo,
	edad,
	cont = 0,
	contM = 0,
	contH = 0,
	acum = 0,
	acumM = 0,
	acumH = 0,
	contM21 = 0,
	contH21 = 0,
	maxM,
	minH,
	prom,
	promM,
	promH,
	porcH,
	porcM;

// Desarrollo del algoritmo:


m += '<ul>';
	m += '<li>Promedio de edad general: ' + prom + '.</li>';
	m += '<li>Promedio de edad de las mujeres: ' + promM + '.</li>';
	m += '<li>Promedio de edad de los hombres: ' + promH + '.</li>';
	m += '<li>Porcentaje de mujeres menores a 21 años: ' + porcM + '%.</li>';
	m += '<li>Porcentaje de hombres mayores a 21 años: ' + porcH + '%.</li>';
	m += '<li>La mayor edad ingresada de las mujeres: ' + maxM + '.</li>';
	m += '<li>La menor edad ingresada de los hombres: ' + minH + '.</li>';
m += '</ul>';