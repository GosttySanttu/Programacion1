'use strict';

// Document:
const d = document;

let txa = d.querySelector('textarea');
let btn = d.querySelector('[type=button]');
let msj = d.querySelector('#mensaje');
let chat = d.querySelector('#chat div');

console.log(txa, btn, chat, msj);

chat.innerHTML = '';

btn.onclick = function () {
	let aEstados = d.querySelectorAll('[name=estado]');
	let textito = txa.value;
	let estado = null;
	for (let est of aEstados) {
		if (est.checked) {
			estado = est.value;
		}
	}
	//console.info(aEstados, textito, estado);
	//if (textito.length == 0 || estado == null) {}
	if (!textito.length || !estado) {
		msj.style.color = 'red';
		msj.innerHTML = 'Debe ingresar un valor';
	} else {
		msj.innerHTML = '';
		//txa.value = null;
		//txa.value = '';
		d.querySelector('form').reset();
		let p = d.createElement('p');
		p.innerHTML = textito;
		p.style.backgroundImage = `url(items/${estado}.jpg)`;
		p.ondblclick = function () {
			this.remove();
		}
		chat.appendChild(p);
	}
}