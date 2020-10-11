'use strict';

// Array de colores:
let aColores = ['red', 'green', 'blue', 'yellow', 'cyan', 'magenta'];

// Document:
const d = document;

// Variables:
let ul = d.querySelector('#elementos');
let divColores = d.querySelector('#colores');

ul.firstElementChild.remove();

console.info(ul, divColores);

// Recorremos el array:
for (let color of aColores) {
	let li = d.createElement('li');
	li.innerHTML = color;
	ul.appendChild(li);

	let div = d.createElement('div');
	div.style.width = '60px';
	div.style.height = '60px';
	div.style.backgroundColor = color;
	div.onclick = function () {
		let todoLosLi = ul.children;
		for (let li of todoLosLi) {
			li.style.color = this.style.backgroundColor;
		}
	}
	divColores.appendChild(div);
	console.info(li, div);
}