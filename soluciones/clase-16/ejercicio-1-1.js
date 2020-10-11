'use strict';

// Document y métodos:
const d = document,
	_id = 'getElementById';

// Cajitas:
let c1, c2, c3, c4, c5,
// Inputs:
	txtProp, txtVal, btn,
/* Variable global que se encarga de guardar el último div seleccionado (similar a lo que hacemos con document).
Como por defecto no hay div seleccionado, incializa en null: */
	seleccion = null,
// Párrafo:
	msj;

// Búsqueda de elementos (por id):
c1 = d.getElementById('caja-1');
c2 = d.getElementById('caja-2');
c3 = d.getElementById('caja-3');
c4 = d.getElementById('caja-4');
c5 = d.getElementById('caja-5');

txtProp = d.getElementById('css-propiedad');
txtVal = d.getElementById('css-valor');

btn = d.getElementById('boton');

msj = d.getElementById('mensaje');

// Función que guardará el div seleccionado:
function Seleccionar() {
	// Verificamos el div:
	console.info(this);
	// Guardamos "ESTE" div en la variable auxiliar:
	seleccion = this;
	// Como hacemos con d = document;
}

// Asigno la función a cada div en su evento onclick:
c1.onclick = Seleccionar; // Sin paréntesis
c2.onclick = Seleccionar; // Sin paréntesis
c3.onclick = Seleccionar; // Sin paréntesis
c4.onclick = Seleccionar; // Sin paréntesis
c5.onclick = Seleccionar; // Sin paréntesis

// Asigno una función al click del botón:
btn.onclick = function () {
	// Primero verifico que haya un div seleccionado:
	if (seleccion === null) {
		msj.style.color = 'red';
		msj.innerHTML = 'No se seleccionó un div';
	} else {
		// Obtengo los valores de los inputs:
		let prop = txtProp.value;
		let val = txtVal.value;
		// Asigno al div seleccionado la propiedad y el valor:
		seleccion.style[prop] = val;
		// Por las dudas se resetea el mensaje:
		msj.innerHTML = '';
	}
}