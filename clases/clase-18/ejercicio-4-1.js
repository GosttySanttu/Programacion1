'use strict';

/*
<div id="big">
	<p>El alt de la imagen</p>
	<a href="#">CERRAR</a>
	<img src="ruta-img" alt="alt de la imagen" />
</div>
*/

// Document:
const d = document,
	_ce = 'createElement';

// Buscamos los elementos:
let aImagenes = d.querySelectorAll('img');

for (let img of aImagenes) {
	img.onclick = Ampliar;
}

function Ampliar() {
	// Juguemos con el div:
	let div = d.createElement('div');
	div.id = 'big';
	//d.querySelector('body').appendChild(div);
	d.body.appendChild(div);

	// Juguemos con el párrafo:
	let p = d[_ce]('p');
	p.innerHTML = this.alt;
	div.appendChild(p);

	// Juguemos con el link:
	let a = d[_ce]('a');
	a.innerHTML = 'CERRAR';
	a.href = '#';
	a.onclick = Cerrar;
	div.appendChild(a);

	// Juguemos con la imagen:
	let img = this.cloneNode();
	div.appendChild(img);
}

function Cerrar() {
	d.querySelector('#big').remove();
	//d.body.removeChild(this.parentNode);
	return false;
}