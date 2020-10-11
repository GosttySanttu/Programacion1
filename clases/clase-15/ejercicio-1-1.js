'use strict';

// Document y métodos:
const d = document,
	_id = 'getElementById';

// src y alt:
const srcCharly = 'items/charly-garcia.jpg';
const altCharly = 'Carlos Alberto García Moreno tocando el piano';
const txtCharly = '<em>Charly</em> García tocando el piano';
const srcFlaco = 'items/flaco-spinetta.jpg';
const altFlaco = 'Luis Alberto Spinetta tocando la guitarra';
const txtFlaco = 'El <em>flaco</em> Spinetta tocando la guitarra';

// La imagen:
let img = d.getElementById('imagen');

// El texto:
let txt = d[_id]('texto');

// Colocamos el color en red:
txt.style.color = 'red';

// Asignamos una función con nombre al onclick de la imagen:
img.onclick = CambiarMusico;

// Creamos la función:
function CambiarMusico () {
	// Debo saber cuál es el src actual:
	if (this.attributes.src.value == srcCharly) {
		// Cambio al Flaco:
		this.src = srcFlaco;
		this.alt = altFlaco;
		txt.innerHTML = txtFlaco;
		txt.style.color = 'blue';
	} else {
		// Cambio a Charly:
		this.src = srcCharly;
		this.alt = altCharly;
		txt.innerHTML = txtCharly;
		txt.style.color = 'red';
	}
}