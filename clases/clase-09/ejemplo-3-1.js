'use strict';

// Variables:
var _ci = console.info;

// Función con parámetro rest:
function List(param1, param2, param3, ...rest) {
	_ci('Parámetro 1:', param1);
	_ci('Parámetro 2:', param2);
	_ci('Parámetro 3:', param3);
	_ci('Parámetro rest:', rest);
	_ci('-----');
}

_ci('Con 2 argumentos:');
List('Argumento 1', 'Argumento 2');

_ci('Con 3 argumentos:');
List('Argumento 1', 'Argumento 2', 'Argumento 3');

_ci('Con 6 argumentos:');
List('Argumento 1', 'Argumento 2', 'Argumento 3', 'Argumento 4', 'Argumento 5', 'Argumento 6');

// Creo un array con 2 valores:
var aArgumentos = ['Argumento 1', 'Argumento 2'];

_ci('Sin argumento spread:');
List(aArgumentos, 'Argumento 3', 'Argumento 4');

_ci('Con argumento spread incial:');
List(...aArgumentos, 'Argumento 3', 'Argumento 4');

_ci('Con argumento spread en el medio:');
List('Argumento 3', ...aArgumentos, 'Argumento 4');

_ci('Con 2 argumentos spread al inicio:');
List(...aArgumentos, ...aArgumentos, 'Argumento 3', 'Argumento 4');