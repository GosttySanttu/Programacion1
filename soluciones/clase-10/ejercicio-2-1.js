'use strict';

// Variales:
let html = '';

// Persona:
let Persona = {
	nombre: 'Federico',
	apellido: 'Noto',
	edad: 33,
	email: 'federico.noto@davinci.edu.ar',
	YoSoy: function() {
		return `<p>Mi nombre es ${this.nombre} ${this.apellido}</p>`;
	},
	Tengo : function() {
		return `<p>Tengo ${this.edad} años</p>`;
	},
	Contacto : function() {
		return `<p>Escribime a ${this.email}</p>`;
	}
};

// Ejecución:
html += Persona.YoSoy();
html += Persona.Tengo();
html += Persona.Contacto();

document.getElementById('info').innerHTML = html;