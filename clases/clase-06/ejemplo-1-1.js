'use strict';

// Creación de las funciones:
function Sumar(sumando1, sumando2) {
	var suma = sumando1 + sumando2;
	return suma;
}

function Dividir(dividendo, divisor) {
	var cociente = dividendo / divisor;
	return cociente;
}

function PromediarEntre2(num1 = 0, num2 = 0) {
	if (isNaN(num1) || isNaN(num2)) {
		console.error('Alguno de los valores ingresados (o ambos), no son números.');
		return 'No se pudo calcular.';
	} else {
		var suma = Sumar(num1, num2);
		var promedio = Dividir(suma, 2);
		return 'El promedio es: ' + promedio;
	}
}