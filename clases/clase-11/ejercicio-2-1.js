'use strict';

// Todos los alumnos:
let aAlumnos = [];

// Creo la función constructora Alumno:
function Alumno() {
	// Propiedades privadas:
	let nombre = 'Nombre del alumno';
	let materias = [];

	// Métodos privados:
	let CalcularPromedio = function () {
		let acum = 0, cont = materias.length;
		for (let materia of materias) {
			acum += materia.DarNota();
		}
		return acum / cont;
	}

	// Métodos públicos:
	this.PedirNombre = function () {
		let banderita = false;
		do {
			if (banderita) {
				alert('¡¡¡No ingresó un texto!!!');
			}
			nombre = prompt('Ingrese el nombre del alumno');
			banderita = true;
		} while (!isNaN(nombre));
	}
	this.GuardarMateria = function (materia) {
		materias.push(materia);
	}
	this.Armar = function () {
		// Armo la info de cada alumno:
		let m = `
			<p>Alumno: ${nombre}</p>
			<p>Materias:</p>
			<ul>
		`;
		// Recorro cada una de las materias:
		for (let materia of materias) {
			// Debo acceder al método Armar de cada materia:
			m += materia.Armar();
		}
		m += `
			</ul>
			<p>Promedio: ${CalcularPromedio()}</p>
		`;
		return m;
	}
}

// Creo la función constructora Materia:
function Materia() {
	// Propiedades privadas:
	let nombre = 'Nombre de la materia';
	let nota = 0;

	// Métodos públicos:
	this.PedirNombre = function () {
		let banderita = false;
		do {
			if (banderita) {
				alert('¡¡¡No ingresó un texto!!!');
			}
			nombre = prompt('Ingrese el nombre de la materia');
			banderita = true;
		} while (!isNaN(nombre));
	}
	this.PedirNota = function () {
		let banderita = false;
		do {
			if (banderita) {
				alert('¡¡¡No ingresó una nota entre 1 y 10!!!');
			}
			nota = parseInt(prompt('Ingrese la nota de la materia'));
			banderita = true;
		} while (!(nota >= 1 && nota <= 10));
	}
	this.DarNota = function () {
		return nota;
	}
	this.Armar = function () {
		// Armo el li con los datos de la materia:
		let m = `<li>Nombre: ${nombre} - Nota: ${nota}</li>`;
		return m;
	}
}

// Funciones:
function Cargar() {
	// Variables:
	let alumno, materia;
	
	// Creo el alumno:
	alumno = new Alumno();
	
	// Pido su nombre:
	alumno.PedirNombre();
	
	// Materias:
	do {
		// Creo la materia:
		materia = new Materia();
		// Pido nombre y nota:
		materia.PedirNombre();
		materia.PedirNota();
		// La guardo en el alumno:
		alumno.GuardarMateria(materia);
	} while (confirm('Más materias?'))
	
	// Guardo al alumno en el array:
	aAlumnos.push(alumno);
}

function Mostrar() {
	// Variable que guarda el html generado:
	let html = '';
	
	if (!aAlumnos.length) {
		html += '<p>Aún no se han cargado alumnos</p>';
	} else {
		// Recorro a los alumnos:
		for (let alumno of aAlumnos) {
			// Muestro cada alumno:
			html += alumno.Armar();
			html += '<hr />'
		}
	}

	// Llamo a la función 'Generar':
	document.getElementById('info').innerHTML = html;
}