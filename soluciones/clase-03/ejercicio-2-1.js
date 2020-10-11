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
do {
	do {
		ciudad = prompt('Ingrese la ciudad');
	} while (!isNaN(ciudad))
	do {
		sexo = prompt('Ingrese el sexo');
		sexo = sexo != null ? sexo.toLowerCase() : sexo;
	} while (!(sexo == 'h' || sexo == 'm'))
	do {
		edad = parseInt(prompt('Ingrese la edad'));
	} while (!(edad >= 0 && edad <= 110))
	console.info('Ciudad:', ciudad, 'Sexo:', sexo, 'Edad:', edad);

	cont++;
	acum += edad;
	if (sexo == 'm') {
		contM++;
		acumM += edad;
		if (edad < 21) {
			contM21++;
		}
		if (contM == 1) {
			maxM = edad;
		} else if (edad > maxM) {
			maxM = edad;
		}
	} else {
		contH++;
		acumH += edad;
		if (edad > 21) {
			contH21++;
		}
		if (contH == 1) {
			minH = edad;
		} else if (edad < minH) {
			minH = edad;
		}
	}
} while (confirm('¿Desea ingresa otro dato?'))

prom = acum / cont;
promM = acumM / contM;
promH = acumH / contH;
porcM = contM21 / contM * 100;
porcH = contH21 / contH * 100;

m += '<ul>';
	m += '<li>Promedio de edad general: ' + prom + '.</li>';
	m += '<li>Promedio de edad de las mujeres: ' + promM + '.</li>';
	m += '<li>Promedio de edad de los hombres: ' + promH + '.</li>';
	m += '<li>Porcentaje de mujeres menores a 21 años: ' + porcM + '%.</li>';
	m += '<li>Porcentaje de hombres mayores a 21 años: ' + porcH + '%.</li>';
	m += '<li>La mayor edad ingresada de las mujeres: ' + maxM + '.</li>';
	m += '<li>La menor edad ingresada de los hombres: ' + minH + '.</li>';
m += '</ul>';