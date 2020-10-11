'use strict';

// Document:
const d = document;

// Buscamos los elementos:
let original = d.querySelector('#original');
let quitados = d.querySelector('#quitados');
let aImagenes = original.children;

for (let img of aImagenes) {
	img.onclick = Mover;
}

function Mover() {
	// Crear una nueva imagen:
	let img = this.cloneNode();
	if (img.hasAttribute('id')) {
		//img.removeAttribute('id');
		img.id = `c-${img.id}`;
	}
	// Le damos sus atributos:
	quitados.appendChild(img);
	// Le asigno la clase inactivo a la original:
	this.className = 'inactivo';
	// aNULLamos el onclick de la original
	this.onclick = null;
}