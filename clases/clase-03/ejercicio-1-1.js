'use strict';

// Declaración de variables:
var m = '',
	nombre,
	apellido,
	dni,
	edad,
	sexo,
	nota;

// Desarrollo del algoritmo:
nombre = prompt('Ingrese el nombre del alumno');
apellido = prompt('Ingrese el apellido del alumno');
dni = prompt('Ingrese el DNI del alumno');
sexo = prompt('Ingrese el sexo del alumno');
nota = parseInt(prompt('Ingrese la nota del alumno'));

m += '<ul>';
	m += '<li><strong>Nombre:</strong> ' + nombre + '</li>';
	m += '<li><strong>Apellido:</strong> ' + apellido + '</li>';
	m += '<li><strong>DNI:</strong> ' + dni + '</li>';
	m += '<li><strong>Edad:</strong> ' + edad + '</li>';
	m += '<li><strong>Sexo:</strong> ' + sexo + '</li>';
	m += '<li><strong>Nota:</strong> ' + nota + '</li>';
m += '</ul>';