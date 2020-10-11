'use strict';

// Document:
const d = document;

// Objetos:
let p = d.querySelector('.prueba');
let btn = d.querySelector('button');

// Veamos los estilos deseados al hacer click:
btn.onclick = function () {
	let pBGC = getComputedStyle(p).getPropertyValue('background-color');
	let pColor = getComputedStyle(p).getPropertyValue('color');
	console.info('bg:', pBGC, 'color:', pColor);
}

// Veamos todos los estilos:
function TodosLosEstilos() {
	let objetoCSS = getComputedStyle(p);
	for (let propiedad of objetoCSS) {
		console.info(`${propiedad} = ${objetoCSS.getPropertyValue(propiedad)}`);
	}
}

TodosLosEstilos();