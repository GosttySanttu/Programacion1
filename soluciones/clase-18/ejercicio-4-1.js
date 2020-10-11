'use strict';

// Document:
const d = document;

// Buscar las imágenes:
let aImgs = d.querySelectorAll('main img');

// Recorrer las imágenes:
for (let img of aImgs) {
	// Asignar el onclick a cada imagen:
	img.onclick = Ampliar;
}

// Función que amplía:
function Ampliar() {
	// Crear el div y darle sus propiedades:
	let div = d.createElement('div');
	div.id = 'big';
	// Crear el p y darle sus propiedades:
	let p = d.createElement('p');
	p.innerHTML = this.alt;
	// Crear el a y darle sus propiedades y evento:
	let a = d.createElement('a');
	a.href = '#';
	a.innerHTML = 'CERRAR';
	a.onclick = function () {
		d.getElementById('big').remove();
		// Para eveitar que haga la acción por defecto de un href="#":
		return false;
	}
	// Crear la img y darle sus propiedades:
	let img = d.createElement('img');
	img.src = this.src;
	img.alt = this.alt;
	// Hacer los appendChild:
	d.body.appendChild(div);
	div.appendChild(p);
	div.appendChild(a);
	div.appendChild(img);
}