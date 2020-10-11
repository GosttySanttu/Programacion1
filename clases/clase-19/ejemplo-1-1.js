'use strict';

// Carreras:
let aCarreras = ['Diseño Web', 'Diseño Multimedial', 'Diseño Gráfico', 'Cine y Animación', 'Diseño de Videojuegos', 'Analista en Sistemas'];

// Document:
const d = document;

// Obtener los elementos:
let form = d.querySelector('form');
let fset = d.querySelector('fieldset');
let btn = d.querySelector('input');

// Contador:
let cont = 0;

// Armado:
for (let carrera of aCarreras) {
	// Crear el input checkbox:
	let cbx = d.createElement('input');
	cbx.type = 'checkbox';
	cbx.name = `carrera-${carrera.toLowerCase().replace(/ /gi, '-')}`;
	cbx.value = carrera.toLowerCase().replace(/ /gi, '-');
	/*cbx.onclick = function () {
		console.info('Al estar cotenido por un label, no detecta el onclick');
	}*/
	// Crear el label:
	let lbl = d.createElement('label');
	/*lbl.onclick = function () {
		console.info(this.firstElementChild);
		console.info('Si se hace click en el label, lo muestra 2 veces');
	}*/
	lbl.appendChild(cbx);
	lbl.innerHTML += ` ${carrera.toUpperCase()}`;
	fset.appendChild(lbl);
}

// Una vez creado, es recomendable buscar los checkbox:
for (let cbx of form.querySelectorAll('input[type=checkbox]')) {
	cbx.onclick = function () {
		console.info(this);
		if (this.checked) {
			cont++;
		} else {
			cont--;
		}
		// Botón:
		console.info(cont);
		btn.disabled = true;
		if (cont >= 3) {
			btn.disabled = false;
		}
	}
}

// onsubmit del form:
form.onsubmit = function () {
	console.info('Se quiso enviar el formulario');
	// Variable de control:
	let control = true;
	// Verificación:
	if (cont < 3) {
		control = false;
	}
	return control;
}