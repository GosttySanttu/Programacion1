'use strict';

// Document:
const d = document;

// Div:
let div = null;

// Función que crea el div:
function Crear() {
	div = d.createElement('div');
	div.style.width = '100px';
	div.style.height = '100px';
	div.style.backgroundColor = 'black';
	div.style.position = 'absolute';
	div.style.top = '50%';
	div.style.left = '50%';
	d.body.appendChild(div);
}

// Creo el div:
Crear();

// Colores:
let aColores = ['red', 'green', 'blue', 'yellow', 'orange', 'white'];

// Variable auxiliar para fx:
let fx;

// Detectar tecla:
window.onkeydown = function(e) {
	console.log('e.key:', e.key);
	console.log('e.code:', e.code);
	// Creación del div, si no existe:
	if (e.code == 'KeyN' && div == null) {
		Crear();
	}
	if (div != null) {
		// Detección de tecla común:
		switch (e.key) {
			// Arriba:
			case 'ArrowUp':
				fx = setTimeout(() => { Animar('arr'); }, 10);
				break;
				break;
			// Abajo:
			case 'ArrowDown':
				fx = setTimeout(() => { Animar('aba'); }, 10);
				break;
			// Izquierda:
			case 'ArrowLeft':
				fx = setTimeout(() => { Animar('izq'); }, 10);
				break;
			// Derecha:
			case 'ArrowRight':
				fx = setTimeout(() => { Animar('der'); }, 10);
				break;
			// Enter:
			case 'Enter':
				d.querySelector('main').style.backgroundColor = ColorRandom();
				div.style.backgroundColor = ColorRandom();
				break;
			// Escape:
			case 'Escape':
				div.remove();
				div = null;
				break;
		}
	}
}

// Animación:
function Animar(direccion) {
	let x = div.offsetLeft;
	let y = div.offsetTop;
	let nuevaX, nuevaY;
	switch (direccion) {
		case 'arr':
			nuevaX = x;
			nuevaY = y - 10;
		break;
		case 'aba':
			nuevaX = x;
			nuevaY = y + 10;
		break;
		case 'izq':
			nuevaX = x - 10;
			nuevaY = y;
		break;
		case 'der':
			nuevaX = x + 10;
			nuevaY = y;
		break;
	}
	div.style.left = nuevaX + 'px';
	div.style.top = nuevaY + 'px';
	console.log(nuevaX + 'x' + nuevaY);
	clearInterval(fx);
}
// Random:
function ColorRandom() {
	let numero = Math.round(Math.random() * aColores.length);
	return aColores[numero];
}