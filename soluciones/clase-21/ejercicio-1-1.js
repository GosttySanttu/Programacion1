'use strict';

// Document:
const d = document;

// Nivel:
function VelocidadNivel(nivel = 1) {
	let velocidad = 1000;
	switch (nivel) {
		case 1:
			velocidad = 1000;
			break;
		case 2:
			velocidad = 800;
			break;
		case 3:
			velocidad = 600;
			break;
		case 4:
			velocidad = 400;
			break;
		case 5:
			velocidad = 200;
			break;
		case 6:
			velocidad = 100;
			break;
		default:
			velocidad = 2000;
	}
	return velocidad;
}

let aColores = ['red', 'green', 'blue', 'yellow', 'cyan'];

let timer = d.querySelector('#timer');
timer.innerHTML = 30;

// Definir aleatoriamente el color "ganador" e informarlo en #color:
let colorGanador = aColores[Math.round(Math.random() * (aColores.length - 1))];
d.querySelector('#color').innerHTML = colorGanador;
d.querySelector('#color').style.color = colorGanador;

// Puntaje:
let puntaje = 0;
let puntos = d.querySelector('#puntos');

let fx, timeout;
d.querySelector('#start').onclick = function () {
	// Crear cada 100ms un div de 50x50px, posición absoluta, top y left aleatorio dentro de los límites del navegador, color aleatorio de un array de 5 colores.
	fx = setInterval(AgregarObjeto, VelocidadNivel(6));

	// Que esto suceda durante 30 segundos, informar el tiempo restante en #timer.
	timeout = setInterval(
		function () {
			timer.innerHTML--;
			if (parseInt(timer.innerHTML) <= 0) {
				clearInterval(fx);
				clearInterval(timeout);
			}
		},
		1000
	);
}

function AgregarObjeto() {
	let div = d.createElement('div');
	let color = aColores[Math.round(Math.random() * (aColores.length - 1))];
	let x = Math.round(Math.random() * (d.body.offsetWidth - 25));
	let y = Math.round(Math.random() * (d.body.offsetHeight - 25));
	div.style.cssText = `width: 50px; height: 50px; border-radius: 25px; position: absolute; top: ${y}px; left: ${x}px; background-color: ${color}`;
	// Cada vez que el usuario hace click en un div del color "ganador" suma 100 puntos, mostrar el puntaje en #puntos (empieza en 0):
	// Cada vez que el usuario hace click en un div que no es del color "ganador", resta 50 puntos:
	div.onclick = function () {
		if (this.style.backgroundColor == colorGanador) {
			puntaje += 100;
		} else {
			puntaje -= 50;
		}
		puntos.innerHTML = puntaje;
		this.remove();
	}
	d.body.appendChild(div);
}