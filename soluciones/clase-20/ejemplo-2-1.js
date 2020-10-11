'use strict';

// Document:
const d = document;

// Obtener párrafo:
let txt = d.querySelector('#cuenta');

// Tiempo:
let fechaActual = new Date();
let fechaFinal = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate() + 90);
console.info('fechaActual:', fechaActual, '\n fechaFinal:', fechaFinal);
//fechaFinal = new Date(2020,5,27,16,0,0);


// Variables para realizar cálculos de conversión:
let segundos = 1000, // los milisegundos de un segundo
	minutos = segundos * 60, // los segundos de un minuto
	horas = minutos * 60, // los minutos de una hora
	dias = horas * 24; // las horas de un día
//console.info(segundos, minutos, horas, dias);

// Cuenta regresiva:
let timer = setInterval(
	function () {
		// Actualización de la fecha actual cada 1000 milisegundos:
		let ahora = new Date();
		// Obtener la diferencia de milisegundos de las fechas:
		let diferencia = fechaFinal.getTime() - ahora.getTime();
		// La diferencia divida por la cantidad de horas del día:
		let d = Math.floor(diferencia / dias);
		// El resto de la diferencia dividida por las horas del día
		// (para dejar los milisegundos para horas, minutos, segundos),
		// divida por la cantidad de minutos de la hora:
		let h = Math.floor((diferencia % dias) / horas);
		// El resto de la diferencia dividida por los mionutos de la hora
		// (para dejar los milisegundos para minutos, segundos),
		// divida por la cantidad de segundos del minuto:
		let m = Math.floor((diferencia % horas) / minutos);
		// El resto de la diferencia dividida por los segundos del minuto
		// (para dejar los milisegundos para segundos),
		// divida por la cantidad de milisegundos del segundo:
		let s = Math.floor((diferencia % minutos) / segundos);

		// Armado
		txt.innerHTML = (d < 10 ? '0' + d : d) + ' días ';
		txt.innerHTML += (h < 10 ? '0' + h : h) + ' horas ';
		txt.innerHTML += (m < 10 ? '0' + m : m) + ' minutos ';
		txt.innerHTML += (s < 10 ? '0' + s : s) + ' segundos';

		//	Verificación:
		if (diferencia <= 0) {
			clearInterval(timer);
		}
	},
	1000
);