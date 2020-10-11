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
var movimientoImgs = 1;
var posActual = 0;
var posInicial = 0;
var posFinal = imagenes.length - aImgs.length; // El total de imágenes - la cantidad de miniaturas.

// Botón anterior:
btnAnt.onclick = function () {
	Navegacion('ant');
}

// Botón siguiente:
btnSig.onclick = function () {
	Navegacion('sig');
}

// Navegación:
function Navegacion(direccion) {
	let sentido = direccion == 'ant' ? -1 : 1;
	posActual += movimientoImgs * sentido;
	if (direccion == 'ant') {
		if (posActual < posInicial) {
			// Con tope:
			posActual = posInicial;
			// Semi rotativo:
			posActual = posFinal;
		}
	} else {
		if (posActual > posFinal) {
			// Con tope:
			posActual = posFinal;
			// Semi rotativo:
			posActual = posInicial;
		}
	}
	// Recorro cada miniatura:
	for (let i = 0; i < aImgs.length; i++) {
		aImgs[i].src = 'items/' + imagenes[i + posActual];
	}
}