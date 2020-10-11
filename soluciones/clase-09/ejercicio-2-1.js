'use strict';

// Variables:
let aAlumnos = [];

// Funciones:
function CargarAlumno() {
	// Variables:
	let nombre, apellido, nota,
	/* Array que irá guardando las notas del alumno */
	aNotas = [],
	/* Array que irá guardando los datos del alumno, incluídas sus notas */
	aAlumno = [];
	
	// Nombre:
	do {
		nombre = prompt('Ingrese nombre del alumno');
	} while (!isNaN(nombre))
	
	// Apellido:
	do {
		apellido =  prompt('Ingrese apellido del alumno');
	} while (!isNaN(apellido))
	
	// Notas:
	do {
		// Nota:
		do {
			nota = parseInt(prompt('Ingrese nota del alumno'));
		} while (!(nota >= 1 && nota <= 10))
		
		// Cargo la nota al array de notas del alumno:
		aNotas.push(nota);
	
	} while (confirm('¿Ingresar otra nota?'))
	
	// Creo la info del alumno:
	aAlumno['Nombre'] = nombre;
	aAlumno['Apellido'] = apellido;
	aAlumno['Notas'] = aNotas;

	// Cargo el nuevo alumno al array global:
	aAlumnos.push(aAlumno);
}

function MostrarDatos() {
	// Variable que guarda el html generado:
	let html = '', acum, cont;
	
	// Armado:
	for (var i = 0; i < aAlumnos.length; i++) {
		// Inicializo las variables para el promedio para cada alumno:
		acum = 0, cont = 0;
		
		// Datos del alumno:
		html += `<p>${aAlumnos[i]['Nombre']} ${aAlumnos[i]['Apellido']}</p>`;
		
		// Notas:
		html += '<ul>';
			for (let nota of aAlumnos[i]['Notas']) {
				
				// Variables de promedio:
				acum += nota;
				cont++;
				
				// Destaco el tipo de nota por color:
				html += `<li style="color: ${nota >= 4 ? 'green' : 'red'}">${nota}</li>`;
			}
			html += `<li><strong>Promedio:</strong> ${acum / cont}</li>`;
		html += '</ul>';
	}

	// Ejecuto la función 'MostrarInfo':
	MostrarInfo(html);
}