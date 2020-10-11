'use strict';

// Document y métodos:
const d = document;

// Variable que guarda el div activo:
let divActivo = null; // Inicializa en null porque al principio ningún div está desplegado.

// Busco los divs:
let aDivs = [];

// Recorro el array de divs:
for(let div of aDivs) {
	// A cada div le asigno un onclick:
	div.onclick = Animar;
}

// Creo a función que anima:
function Animar() {
	console.info(this);
	if (divActivo == null) {
		// EL DIV ACTIVO ahora es this
		divActivo = this;

		// DESPLEGAR EL DIV ACTIVO:
		// Cambiar el alto del div activo
		// Cambien el color del h3 por el alt de la imagen del div activo
		// ... Aca va el DOM
	} else if (divActivo == this) {
		// REPLEGAR EL DIV ACTIVO:
		// Cambiar el alto del div activo
		// Cambien el color del h3 a gray
		// ... Aca va el DOM

		// EL DIV ACTIVO ahora es null
		divActivo = null;
	} else {
		// REPLEGAR EL DIV ACTIVO:
		// Cambiar el alto del div activo
		// Cambien el color del h3 a gray
		// ... Aca va el DOM

		// EL DIV ACTIVO ahora es this
		divActivo = this;
		
		// DESPLEGAR EL DIV ACTIVO:
		// Cambiar el alto del div activo
		// Cambien el color del h3 por el alt de la imagen del div activo
		// ... Aca va el DOM
	}
}