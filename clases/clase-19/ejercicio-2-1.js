'use strict';

// Paises y provincias:
let aData = {
	'Argentina' : ['Buenos Aires', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba', 'Corrientes', 'Entre Ríos', 'Formosa', 'Jujuy', 'La Pampa', 'La Rioja', 'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 'Salta', 'San Juan', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero', 'Tierra del Fuego', 'Tucumán'],
	'Chile' : ['Arica', 'Parinacota', 'Iquique', 'El Tamarugal', 'Antofagasta', 'El Loa', 'Tocopilla', 'Chañaral', 'Copiapó', 'Huasco', 'Choapa', 'Elqui', 'Limarí', 'Isla de Pascua', 'Los Andes', 'Petorca', 'Quillota', 'San Antonio', 'San Felipe de Aconcagua', 'Valparaiso', 'Chacabuco', 'Cordillera', 'Maipo', 'Melipilla', 'Santiago', 'Talagante', 'Cachapoal', 'Cardenal Caro', 'Colchagua', 'Cauquenes', 'Curicó', 'Linares', 'Talca', 'Arauco', 'Bio Bío', 'Concepción', 'Ñuble', 'Cautín', 'Malleco', 'Valdivia', 'Ranco', 'Chiloé', 'Llanquihue', 'Osorno', 'Palena', 'Aisén', 'Capitán Prat', 'Coihaique', 'General Carrera', 'Antártica Chilena', 'Magallanes', 'Tierra del Fuego', 'Última Esperanza'],
	'Uruguay' : ['Artigas', 'Canelones', 'Cerro Largo', 'Colonia', 'Durazno', 'Flores', 'Florida', 'Lavalleja', 'Maldonado', 'Montevideo', 'Paysandú', 'Río Negro', 'Rivera', 'Rocha', 'Salto', 'San José', 'Soriano', 'Tacuarembó', 'Treinta y Tres']
};

// Document:
const d = document;

let btn = d.querySelector('[type=submit]');
//btn.disabled = true;

let msj = d.querySelector('#mensaje');

// Selects:
let selPais = d.querySelector('[name=pais]');
let selProv = d.querySelector('[name=prov]');

for (let pais in aData) {
	let opt = d.createElement('option');
	opt.innerHTML = pais;
	opt.value = pais;
	selPais.appendChild(opt);
}

ArmarProv();

function ArmarProv(pais = 'Argentina') {
	selProv.innerHTML = '';
	for (let prov of aData[pais]) {
		let opt = d.createElement('option');
		opt.innerHTML = prov;
		opt.value = prov;
		selProv.appendChild(opt);
	}
}

selPais.onchange = function () {
	console.log('Cambie a', this.value);
	ArmarProv(this.value);
}

let nombre = d.querySelector('[name=nombre]');

nombre.onblur = function () {
	if (this.value.length < 3) {
		this.style.borderColor = 'red';
		this.setCustomValidity('Debe tener 3 caracteres como mínimo');
	} else {
		this.style.borderColor = '#134F5C';
		this.setCustomValidity('');
	}
}

let clave1 = d.querySelector('[name=clave]');
let clave2 = d.querySelector('[name=reclave]');

function ClavesPedorra () {
	let cual = this.name;
	if (cual == 'clave' && this.value.length < 4) {
		this.style.borderColor = 'red';
		this.setCustomValidity('Debe tener 4 caracteres como mínimo');
	} else {
		this.style.borderColor = '#134F5C';
		this.setCustomValidity('');
	}
	if (cual == 'reclave' && this.value != clave1.value) {
		this.style.borderColor = 'red';
		this.setCustomValidity('Las contraseñas no coinciden');
	} else {
		this.style.borderColor = '#134F5C';
		this.setCustomValidity('');
	}
}

function Claves () {
	if (clave1.value != clave2.value || clave1.value.length < 4) {
		this.style.borderColor = 'red';
		this.setCustomValidity('Las contraseñas no coinciden o tienen menos de 4 caracteres');
	} else {
		clave1.style.borderColor = '#134F5C';
		clave2.style.borderColor = '#134F5C';
		clave1.setCustomValidity('');
		clave2.setCustomValidity('');
	}
}

clave1.onblur = Claves;
clave2.onblur = Claves;

let aCbx = d.querySelectorAll('[type=checkbox]');
let aRdo = d.querySelectorAll('[type=radio]');
let p = d.querySelector('#cant');

p.innerHTML = 0;

for (let cbx of aCbx) {
	//console.log("cbx", cbx);
	cbx.onclick = function () {
		if (this.checked) {
			//console.info(this.value + ' está checado');
			p.innerHTML++;
		} else {
			//console.info(this.value + ' no está checado');
			p.innerHTML--;
		}
	}
}

d.querySelector('#frm').onsubmit = function () {
	let control = true;


	// Generos:
	let hayGenero = false;
	for (let rdo of aRdo) {
		//console.log("rdo", rdo);
		if (rdo.checked) {
			hayGenero = true;
		}
	}
	console.log(hayGenero);

	msj.innerHTML = '';

	if (!hayGenero) {
		control = false;
		msj.style.color = 'red';
		msj.innerHTML = 'No has seleccionado un género';
	}


	if (parseInt(p.innerHTML) < 3) {
		control = false;
		msj.style.color = 'red';
		msj.innerHTML += '<br />No has seleccionado 3 intereses';
	}

	//btn.disabled = !control;

	return control;
}