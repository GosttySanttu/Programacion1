'use strict';

// Document:
const d = document;

let div = d.createElement('div');
div.style.width = '100px';
div.style.height = '100px';
div.style.opacity = 0;
div.style.backgroundColor = 'red';
div.onclick = () => {
	clearInterval(fx);
}

d.querySelector('#escenario').appendChild(div);

// Cuando tengo que aumentar la opacidad, lo pongo en 1
// Cuando tengo que disminuir la opacidad, lo pongo en -1
let sentido = 1;

let fx = setInterval(
	function() {
		let o = parseFloat(div.style.opacity);
		if (o <= 0) {
			sentido = 1;
		} else if (o >= 1) {
			sentido = -1;
		}
		div.style.opacity = o + .1 * sentido;
	},
	60
);