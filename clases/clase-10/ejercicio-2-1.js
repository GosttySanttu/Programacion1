'use strict';

// Variales:
let html = '';

// Persona:
let Persona = {
	nombre: 'Federico',
	apellido: 'Noto',
	edad: 34,
	email: 'federico.noto@davinci.edu.ar',
	YoSoy: function () {
		return `<p>Mi nombre es ${this.nombre} ${this.apellido}</p>`;
	},
	Tengo: function () {
		let m = `<p>Tengo ${this.edad} añitos</p>`;
		return m;
	},
	Contacto: function () {
		return `<p>Escribime a <a href="mailto:${this.email}">${this.email}</a></p>`;
	}
};

// Ejecución:
html += Persona.YoSoy();
html += Persona.Tengo();
html += Persona.Contacto();

document.getElementById('info').innerHTML = html;