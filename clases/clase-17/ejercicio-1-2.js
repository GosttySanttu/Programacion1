'use strict';

// Document y métodos:
const d = document;

// Armado del array:
let imagenes = [];
for (let i = 1; i <= 12; i++) {
	imagenes.push(`queen-${i < 10 ? '0' : ''}${i}.jpg`);
}

console.info(imagenes);

// Búsqueda de elementos:
let btnAnt, btnSig, img, aImgs;

img = d.querySelector('#foto');
btnAnt = d.querySelector('#anterior');
btnSig = d.querySelector('#siguiente');
aImgs = d.querySelectorAll('#galeria > div > div img');

console.info(img, '\n', btnAnt, '\n', btnSig, '\n', aImgs);

// Acción para cambiar el src:
for (let imagen of aImgs) {
	console.info(imagen);
	imagen.onclick = function () {
		console.info(this.src);
		img.src = this.src;
	}
}

// Identifico los topes:
var movimientoImgs = 1;
var posActual = 0;
var posInicial = 0;
var posFinal = imagenes.length - aImgs.length; // El total de imágenes - la cantidad de miniaturas.

// Botón anterior:
btnAnt.onclick = function(){
	Navegar('pa-atras');
}

// Botón siguiente:
btnSig.onclick = function () {
	Navegar('pa-delante');
}


function Navegar(paDonde) {
	if (paDonde == 'pa-atras') {
		posActual -= movimientoImgs;
		if (posActual < posInicial) {
			// Ponerle tope:
			posActual = posInicial;
			// Tipo carrusel:
			posActual = posFinal;
		}
	} else {
		posActual += movimientoImgs;
		if (posActual > posFinal) {
			// Ponerle tope:
			posActual = posFinal;
			// Tipo carrusel:
			posActual = posInicial;
		}
	}
	console.info(posActual);
	for (let i = 0; i < aImgs.length; i++) {
		aImgs[i].src = 'items/' + imagenes[i + posActual];
	}
	img.src = 'items/' + imagenes[posActual];
}