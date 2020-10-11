'use strict';

// Creo el objeto PersonaA:
let PersonaA = {
	Nombre: 'Federico',
	Apellido: 'Noto',
	Presentarse: function () {
		console.info(`Mi nombres es ${this.Nombre} ${this.Apellido}`);
	},
	MiMadreEs: function () {
		console.info(PersonaB.Nombre + ' ' + PersonaB.Apellido)
	}
}

// Creo el objeto PersonaB:
let PersonaB = {
	Nombre: 'Marta',
	Apellido: 'Saffirio',
	Presentarse: function () {
		console.info(`Mi nombres es ${this.Nombre} ${this.Apellido}`);
	}
}

// Ejecuto los métodos:
PersonaA.Presentarse();
PersonaA.MiMadreEs();
PersonaB.Presentarse();