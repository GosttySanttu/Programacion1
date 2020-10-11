'use strict';

// Declaración de variables:
var m = '',
	nombre,
	apellido,
	dni,
	sexo,
	nota;

// Desarrollo del algoritmo:
do {
	nombre = prompt('Ingrese el nombre del alumno');
} while (!isNaN(nombre))
nombre = nombre.toLowerCase();

do {
	apellido = prompt('Ingrese el apellido del alumno');
} while (!isNaN(apellido))
apellido = apellido.toUpperCase();

do {
	dni = prompt('Ingrese el DNI del alumno');
} while (!(dni.length >= 6 && dni.length <= 8))

do {
	sexo = prompt('Ingrese el sexo del alumno');
} while (!(sexo.toLowerCase() == 'h' || sexo.toLowerCase() == 'm'))

do {
	nota = parseInt(prompt('Ingrese la nota del alumno'));
} while (!(nota >= 1 && nota <= 10))

m += '<ul>';
	m += '<li><strong>Nombre:</strong> ' + nombre + '</li>';
	m += '<li><strong>Apellido:</strong> ' + apellido + '</li>';
	m += '<li><strong>DNI:</strong> ' + dni + '</li>';
	m += '<li><strong>Sexo:</strong> ' + sexo + '</li>';
	m += '<li><strong>Nota:</strong> ' + nota + '</li>';
m += '</ul>';