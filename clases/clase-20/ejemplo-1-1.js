'use strict';

// Document:
const d = document;

// Obtener párrafo y inicializar su contenido interno en 10:
let txt = d.querySelector('#mensaje');
txt.innerHTML = 10;

// Intervalo:
let fx = setInterval(
	function () {
		// Decremento:
		txt.innerHTML--;
		// Verificaciones de tiempo:
		if (txt.innerHTML <= 5) {
			txt.style.color = 'red';
			if (txt.innerHTML <= 0) {
				txt.innerHTML = '🎇🎇🎇🎇🎆🎆🎆🎆';
				// Limpiar el intervalo:
				clearInterval(fx);
			}
		}
		console.info('Esta el intervalo andando');
		console.info(new Date());
	},
	1000
);
