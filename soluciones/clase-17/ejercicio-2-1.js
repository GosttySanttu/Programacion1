'use strict';

// Document y métodos:
const d = document;

// Variable que guarda el div activo:
let divActivo = null; // Inicializa en null porque al principio ningún div está desplegado.

// Busco los divs:
let aDivs = d.querySelectorAll('#thumbs div');
console.info(aDivs);

// Recorro el array de divs:
for(let div of aDivs) {
	// A cada div le asigno un onclick:
	div.onclick = Animar;
}

// Creo a función que anima:
function Animar() {
	console.info(this);
	if (divActivo == null) {
		// Como no hay ningun div desplegado, el div al que le acabo de hacer click pasa a serlo, lo despliego:
		divActivo = this;
		Animacion('DESPLEGAR');
	} else if (divActivo == this) {
		// El divActivo es al que le acabo de hacer click, entonces lo repliego y vacío el divActivo:
		Animacion('REPLEGAR');
		divActivo = null;
	} else {
		// El div activo es otro div, lo repliego, asigno el nuevo div clickeado como activo y lo depliego:
		Animacion('REPLEGAR');
		divActivo = this;
		Animacion('DESPLEGAR');
	}
}

// Función que anima:
function Animacion(accion) {
	if(accion == 'DESPLEGAR') {
		divActivo.style.height = '265px';
		divActivo.querySelector('h3').style.color = divActivo.querySelector('img').alt;
	} else {
		divActivo.style.height = '30px';
		divActivo.querySelector('h3').style.color = 'gray';
	}
}