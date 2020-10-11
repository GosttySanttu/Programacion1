'use strict';

// Document y métodos:
const d = document,
	_id = 'getElementById';

// Cajitas:
let cajas, c1, c2, c3, c4, c5,
// Inputs:
	txtProp, txtVal, btn,
/* Variable global que se encarga de guardar el último div seleccionado (similar a lo que hacemos con document).
Como por defecto no hay div seleccionado, incializa en null: */
	seleccion = null,
// Párrafo:
	msj;

// Búsqueda de elementos (por relación familiar a partir de un id):
cajas = d.getElementById('cajas-editables');

c1 = cajas.firstElementChild;
c2 = c1.nextElementSibling;
c3 = cajas.children[2];
c4 = c3.nextElementSibling;
c5 = cajas.lastElementChild;

txtProp = cajas.nextSibling.nextSibling.firstElementChild.lastElementChild;
txtVal = cajas.nextElementSibling.children[1].lastElementChild;

btn = cajas.nextElementSibling.lastElementChild.firstElementChild;

msj = cajas.parentNode.lastElementChild;

console.info(c1, c2, c3, c4, c5, txtProp, txtVal, btn, msj);

// Función que guardará el div seleccionado:
function Seleccionar() {
	console.info('Antes del click:', seleccion);
	seleccion = this;
	console.info('Después del click:', seleccion);
}

// Asigno la función a cada div en su evento onclick:
c1.onclick = Seleccionar; // Sin paréntesis
c2.onclick = Seleccionar; // Sin paréntesis
c3.onclick = Seleccionar; // Sin paréntesis
c4.onclick = Seleccionar; // Sin paréntesis
c5.onclick = Seleccionar; // Sin paréntesis

// Asigno una función al click del botón:
btn.onclick = function () {
	if (seleccion == null) {
		msj.style.color = 'red';
		msj.innerHTML = 'No seleccionó ningún div';
	} else {
		let propiedad = txtProp.value;
		let valor = txtVal.value;
		seleccion.style[propiedad] = valor;
		msj.innerHTML = '';
	}
}