'use strict';

// Creación de la función:
function CalcularImpuesto(precio = null, impuesto = 21) {
	// Verificamos:
	if (precio == null) {
		// Que el precio no esté vacío:
		console.error('No ingresó un precio');
	} else if (isNaN(precio)) {
		// que el precio sea un número:
		console.error('No ingresó un precio válido');
	} else if (isNaN(impuesto)) {
		// que el impuesto sea un número:
		console.error('No ingresó un impuesto válido');
	} else {
		// Analizo si el valor del impuesto está entre 0 y 100, sino será 21:
		impuesto = impuesto >= 0 && impuesto <= 100 ? impuesto : 21;
		// Calculo el iva:
		var iva = precio * impuesto / 100;
		// Caculo el total:
		var total = precio + iva;
		// Armo el mensaje:
		var m = 'Precio: ' + precio + ' – IVA: ' + impuesto + '% – Total: ' + total;
		// Retorno el mensaje:
		return m;
	}
}