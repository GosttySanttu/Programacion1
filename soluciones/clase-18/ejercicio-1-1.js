'use strict';

// Array de colores:
let aColores = ['red', 'green', 'blue', 'orange', 'yellow', 'cyan', 'magenta'];

// Document:
const d = document;

// Variables:
let ul, divColores;

// Buscar los elementos:
ul = d.querySelector('#elementos'),
divColores = d.querySelector('#colores');

// Eliminar el primer y único li del ul:
ul.firstElementChild.remove();

// Recorrida del array:
for (let color of aColores) {
	// Creación del li, sus propiedades y agregado al ul:
	let li = d.createElement('li');
	li.innerHTML = color;
	ul.appendChild(li);
	
	// Creación el div, sus propiedades, preparación de su onclick y agregado a #elementos:
	let div = d.createElement('div');
	div.style.width = '60px';
	div.style.height = '60px';
	div.style.display = 'inline-block';
	div.style.backgroundColor = color;
	divColores.appendChild(div);
	
	div.onclick = function () {
		console.info(this.style.backgroundColor);
		// Búsqueda de todos los li
		var aLi = ul.children;
		// Recorrida de cada li y asignación el color:
		for (let li of aLi) {
			li.style.color = this.style.backgroundColor;
		}
	}
}