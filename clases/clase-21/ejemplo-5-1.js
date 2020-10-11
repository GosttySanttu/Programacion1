'use strict';

// Document:
const d = document;

// 1. Hacer click en el button #btn1 y mostrar todos los valores en el p#info:
let btn1 = d.querySelector('#btn1');
let inf = d.querySelector('#info');
btn1.onclick = Info;
function Info(e) {
	let evento = e || window.event;
	inf.innerHTML = '';
	for (let info in evento) {
		inf.innerHTML += `${info}: ${evento[info]}<br />`; // Sí, está muy mal generar por innerHTML el br!!! NO LO HAGA OH ALUMNO!
	}
}

// 2. Agregar dos eventos del tipo click al button #btn2, el primero ejecutará la función F1, que mostrará el mensaje "Función 1"; el segundo ejecutará la función F2, que mostrará el mensaje "Función 2". Los mensajes se mostrar en p#info:

function F1() {
	inf.innerHTML = 'Función 1<br />';
}
function F2() {
	inf.innerHTML += 'Función 2<br />';
}

let btn2 = d.querySelector('#btn2');

btn2.addEventListener('click', F1, true);
btn2.addEventListener('click', F2, true);

// 3. Con la estructura del div#prueba-2, probar la propagación de eventos:

// Burbujeo: de adentro hacia afuera.
d.querySelector('#a1').addEventListener('click', function(e) { inf.innerHTML = 'Hiciste click en el a<br />'; /*e.stopPropagation();*/ }, false);
d.querySelector('#p1').addEventListener('click', function(e) { inf.innerHTML += 'Hiciste click en el p<br />'; /*e.stopPropagation();*/ }, false);
d.querySelector('#d1').addEventListener('click', function(e) { inf.innerHTML += 'Hiciste click en el div<br />'; /*e.stopPropagation();*/ }, false);

// Captura: de afuera hacia adentro.
d.querySelector('#a2').addEventListener('click', function(e) { inf.innerHTML += 'Hiciste click en el a<br />'; /*e.stopPropagation();*/ }, true);
d.querySelector('#p2').addEventListener('click', function(e) { inf.innerHTML += 'Hiciste click en el p<br />'; /*e.stopPropagation();*/ }, true);
d.querySelector('#d2').addEventListener('click', function(e) { inf.innerHTML = 'Hiciste click en el div<br />'; /*e.stopPropagation();*/ }, true);