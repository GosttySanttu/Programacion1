'use strict';

// Variables:
let aAlumnos = [];
/*
// Puedo precargar valores para probar la parte de "MOSTRAR":
aAlumnos[0] = [];
aAlumnos[0]['Nombre'] = 'Arturo';
aAlumnos[0]['Apellido'] = 'Duro';
aAlumnos[0]['Notas'] = [2, 4, 8];
aAlumnos[1] = [];
aAlumnos[1]['Nombre'] = 'Fernando';
aAlumnos[1]['Apellido'] = 'Blando';
aAlumnos[1]['Notas'] = [1, 3, 7];
*/

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
	for (let alumno of aAlumnos) {
		// Inicializo las variables para el promedio para cada alumno:
		let acum = 0, cont = 0;
		
		// Datos del alumno:
		html += `<p>${alumno['Nombre']} ${alumno['Apellido']}</p>`;
		
		// Notas:
		html += '<ul>';
			for (let nota of alumno['Notas']) {
				// Variables de promedio:
				cont++;
				acum += nota;
				
				// Destaco el tipo de nota por color:
				html += `<li style="color: ${nota >= 4 ? 'green' : 'red'};">${nota}</li>`;
			}
			html += `<li><strong>Promedio:</strong> ${acum / cont}</li>`;
		html += '</ul>';
	}

	// Ejecuto la función 'MostrarInfo':
	MostrarInfo(html);
}

// Gracias Akil:
let BorrarDatos = () => {
	aAlumnos = [];
	MostrarInfo('');
}

function MostrarNombre() {
	// Variable que guarda el html generado:
	let html = '';
	
	// Armado:
	for (let alumno of aAlumnos) {
		// Datos del alumno:
		html += `<p>${alumno['Nombre']} ${alumno['Apellido']}</p>`;
	}

	// Ejecuto la función 'MostrarInfo':
	MostrarInfo(html);
}