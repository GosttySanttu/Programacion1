'use strict';

// Document y métodos:
const d = document;

// Armado del array:
let imagenes = [];
for (let i = 1; i <= 12; i++) {
	imagenes.push(`queen-${i < 10 ? '0' : ''}${i}.jpg`);
}

// Búsqueda de elementos:
let btnAnt, btnSig, img, aImgs;

img = d.querySelector('#foto');
btnAnt = d.querySelector('#anterior');
btnSig = d.querySelector('#siguiente');
aImgs = d.querySelectorAll('#galeria > div > div img');

console.info(img, '\n', btnAnt, '\n', btnSig, '\n', aImgs);

// Acción para cambiar el src:
for (let imagen of aImgs) {
	imagen.onclick = function () {
		img.src = this.src;
	}
}

// Identifico los topes:
var movimientoImgs = 3;
var posActual = 0;
var posInicial = 0;
var posFinal = imagenes.length - aImgs.length; // El total de imágenes - la cantidad de miniaturas.

// Botón anterior:
btnAnt.onclick = function () {
	// Decremento la cantidad de imágenes a mover:
	posActual += movimientoImgs * 1;
	if (posActual >= posFinal) {
		// Con tope:
		posActual = posFinal;
		// Rotativo:
		posActual = posInicial;
	}
	// Recorro cada miniatura:
	for (let i = 0; i < aImgs.length; i++) {
		aImgs[i].src = 'items/' + imagenes[i + posActual];
	}
}

// Botón siguiente:
btnSig.onclick = function () {
	// Incremento la cantidad de imágenes a mover:
	posActual += movimientoImgs * -1;
	if (posActual <= posInicial) {
		// Con tope:
		posActual = posInicial;
		// Rotativo:
		posActual = posFinal;
	}
	// Recorro cada miniatura:
	for (let i = 0; i < aImgs.length; i++) {
		aImgs[i].src = 'items/' + imagenes[i + posActual];
	}
}