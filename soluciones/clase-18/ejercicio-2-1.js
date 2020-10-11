'use strict';

// Document:
const d = document;

// Variables:
let inputs, txt, btn, ul, aLi, msj;

// Buscar los elementos:
inputs = d.querySelector('#inputs');
txt = inputs.firstElementChild;
btn = inputs.lastElementChild;
ul = d.querySelector('#listado');
aLi = listado.children;
msj = d.querySelector('#mensaje');

// Recorrida de los li:
for (let li of aLi) {
	// A cada a de cada li asignarle una funcion a su onclick:
	li.lastChild.onclick = Borrar;
}

// Creo la función Borrar, que borra el li padre del a, del ul:
function Borrar() {
	// Remuevo el li que contiene el a del ul:
	this.parentNode.remove();
}

// Asignación de una función al onclick del botón:
btn.onclick = function() {
	// Obtener el valor del txt:
	let t = txt.value;
	// Verificar que tenga algún contenido el input:
	if(!t.length) {
		// Si no lo tiene se informa en #mensaje:
		msj.style.color = 'red';
		msj.innerHTML = 'Ingrese un valor';
	} else {
		// Si tiene crear un li y asignar como contenido el value del input:
		let li = d.createElement('li');
		li.innerHTML = t + ' ';
		// Creo un a y se le asignan sus propiedades y métodos:
		let a = d.createElement('a');
		a.href = '#';
		a.innerHTML = '[-]';
		a.onclick = Borrar;
		// Se agrega el a dentro del li y éste dentro del ul:
		li.appendChild(a);
		ul.appendChild(li);
		// Al finalizar, se vacía el input y se resetea el mensaje:
		txt.value = ''
		msj.innerHTML = '';
	}
}