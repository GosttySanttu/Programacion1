'use strict';

// Variables:
let aAlumnos = [];

function CargarAlumno() {
	// Creo las variables:
	let nombre, apellido, nota,
		// Array que guarda todas las notas del alumno:
		aNotas = [],
		// Array que guarda toda la info del alumno, incluso las notas:
		alumno = [];

		// Pido los datos nombre y apellido:
		do {
			nombre = prompt('Ingrese nombre');
		} while (!isNaN(nombre))
		do {
			apellido = prompt('Ingrese apellido');
		} while (!isNaN(apellido))

		// Ingreso las notas del alumno:
		do {
			do {
				nota = parseInt(prompt('Ingrese nota'));
			} while (!(nota >= 1 && nota <= 10))
			// Guardo cada nota en el array de notas con push:
			aNotas.push(nota);
		} while (confirm('Desea ingresar otra nota?'))

		// Guardo la info del alumno:
		alumno['Nombre'] = nombre;
		alumno['Apellido'] = apellido;
		alumno['Notas'] = aNotas;

		// Guardo al alumno en el array de alumnos:
		aAlumnos.push(alumno);

}

function MostrarDatos() {
	// Variable que guarda el html generado:
	let html = '';
	
	// Armado:
	for (let i = 0; i < aAlumnos.length; i++) {
		// Inicializo las variables para el promedio para cada alumno:
		let acum = 0, cont = 0;
		
		// Datos del alumno:
		html += `<p>${aAlumnos[i]['Nombre']} ${aAlumnos[i]['apellido']}</p>`;
		
		// Notas:
		html += '<ul>';
			for (let j = 0; j < aAlumnos[i]['Notas'].length) {
				// Variables de promedio:
				cont++;
				acum += aAlumnos[i]['Notas'][j];
				
				// Destaco el tipo de nota por color:
				html += `<li style="color: ${aAlumnos[i]['Notas'][j] >= 4 ? 'green' : 'red'}">${aAlumnos[i]['Notas'][j]}</li>`;
			}
			html += `<li><strong>Promedio:</strong> ${acum / cont}</li>`;
		html += '</ul>';
	}

	// Ejecuto la función 'MostrarInfo':
	MostrarInfo(html);
}