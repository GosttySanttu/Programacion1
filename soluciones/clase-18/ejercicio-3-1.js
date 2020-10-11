'use strict';

// Document:
const d = document;

// Guardar ambos div:
let original = d.querySelector('#original');
let quitados = d.querySelector('#quitados');

// Guardar las imágenes:
let aImgs = original.children;

// Recorrer las imágenes:
for (let img of aImgs) {
	// Asignar el onclick a cada imagen:
	img.onclick = Mover;
}

// Función para "mover" imagen:
function Mover() {
	// Crear una nueva imagen:
	let img = d.createElement('img');
	// Asignar las propiedades de la original:
	img.src = this.src;
	img.alt = this.alt;
	img.width = this.width;
	img.height = this.height;
	// Agregar la nueva imagen a quitados:
	quitados.appendChild(img);
	// A la original se le asigna la clase "inactivo":
	this.className = 'inactivo';
	// A la original se le aNULA el onclick:
	this.onclick = null;
}