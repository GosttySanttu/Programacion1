'use strict';

// Document:
const d = document;

let inputs = d.querySelector('#inputs');
let txt = inputs.firstElementChild;
let btn = inputs.lastElementChild;

let msj = d.querySelector('#mensaje');

let ul = d.querySelector('#listado');
let ulHechos = d.querySelector('#hechos');
ulHechos.style.backgroundColor = 'gray';
let aLi = ul.children;

let aTareasHechas = [];

console.info(inputs, txt, btn, ul, aLi);

for (let li of aLi) {
	li.firstElementChild.onclick = Borrar;
}

btn.onclick = function () {
	let textito = txt.value.trim();
	if (!textito.length) {
		msj.innerHTML = 'Debe ingresar un valor';
		msj.style.color = 'red';
	} else {
		let li = d.createElement('li');
		li.innerHTML = textito + ' ';
		ul.appendChild(li);
		let a = d.createElement('a');
		a.href = '#';
		a.innerHTML = '[-]';
		a.onclick = Borrar;
		li.appendChild(a);
		txt.value = '';
		msj.innerHTML = '';
	}
}

function Borrar () {
	ulHechos.appendChild(ul.removeChild(this.parentNode));
	for (let liHechos of ulHechos.children) {
		// No quiero modificar el onclick, sino que quiero remover el a de cada li:
		liHechos.firstElementChild.onclick = function () {
			return false;
		}
		liHechos.firstElementChild.style.display = 'none';
	}
	return false;
}