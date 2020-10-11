'use strict';

// Todos los alumnos:
let aAlumnos = [], aLegajos = [];

// Creo la función constructora Alumno:
function Alumno() {
	// Propiedades privadas:
	let nombre = 'Nombre del alumno';
	let legajo = 0;
	let materias = [];
	let notas = [];
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
	this.PedirLegajo = function () {
		do {
			legajo = parseInt(prompt('Ingrese su legajo'));
		} while (!EsLegajoValido(legajo))
		aLegajos.push(legajo);
	}
	this.EsLegajoValido(leg) {
		// Para que el legajo sea válido:
		// - tiene que ser número
		// - tiene que estar entre 1 y 2000
		// - tiene que ser único

		// Creamos una variable de control:
		let control = true;
		// si no pasa nada malo, devolveremos true,
		// por el contrario, si los valores no son válidos, false:
		if (isNaN(leg)) {
			alert('No es un número');
			control = false;
		} else if (!(leg >= 1 && leg <= 2000)) {
			alert('El legajo está fuera de rango');
			control = false;
		} else if (aLegajos.indexOf(leg) != -1) {
			alert('El legajo ya existe');
			control = false;
		}
		return control;
	}
	this.GuardarMateria = function (materia) {
		materias.push(materia);
		notas.push(materia.DarNota());
	}
	this.SumaDeNotas = funtion () {
		let acum = 0;
		for (let materia of materias) {
			acum += materia.DarNota();
		}
		return acum;
	}
	this.CantidadMaterias = function () {
		return materias.length;
	}
	this.Armar = function () {
		// Armo la info de cada alumno:
		let m = `
			<p>Alumno: ${nombre}</p>
			<p>Materias (${this.CantidadMaterias()}):</p>
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
		} while (!EsNotaValida(nota))
	}
	let EsNotaValida = function (laNota) {
		if (isNaN(nota)) {
			alert('No es un valor numérico');
			return false;
		} else if (nota >= 1 && nota <= 10) {
			return true;
		} else {
			alert('No es una nota válida');
			return false;
		}
	}
	this.DarNota = function () {
		return nota;
	}
	this.Armar = function () {
		// Armo el li con los datos de la materia:
		let m = `<li${nota >= 4 ? ' style="color:green"':''}>Nombre: ${nombre} - Nota: ${nota}</li>`;
		return m;
	}
}

// Funciones:
function Cargar() {
	// Variables:
	let alumno;
	
	// Creo el alumno:
	alumno = new Alumno();
	
	// Pido su nombre:
	alumno.PedirNombre();

	// Pido su legajo:
	alumno.PedirLegajo();
	
	// Materias:
	do {
		// Creo la materia:
		let materia = new Materia();
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