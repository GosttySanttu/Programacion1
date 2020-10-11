'use strict';

// Document y métodos:
const d = document,
	_id = 'getElementById';

let cajasEditables = d.getElementById('cajas-editables');

// Búsqueda dinámica de todos los divs de #cajas-editables:
let cajasDinamicas = cajasEditables.getElementsByTagName('div');

// Búsqueda estática de todos los divs de #cajas-editables:
let cajasEstaticas = cajasEditables.querySelectorAll('div');

// Mostrar el consola:
console.info('cajasDinamicas:', cajasDinamicas);
console.info('cajasEstaticas:', cajasEstaticas);

// Ya veremos cómo, pero agrego un div a #cajas-editables;
cajasEditables.appendChild(d.createElement('div'));

// Mostrar el consola:
console.info('cajasDinamicas (ahora serán 6 elementos):', cajasDinamicas);
console.info('cajasEstaticas (seguirán siendo 5 elementos):', cajasEstaticas);