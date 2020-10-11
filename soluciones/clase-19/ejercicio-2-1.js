'use strict';

// Paises y provincias:
let aProvincias = {
	'Argentina' : ['Buenos Aires', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba', 'Corrientes', 'Entre Ríos', 'Formosa', 'Jujuy', 'La Pampa', 'La Rioja', 'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 'Salta', 'San Juan', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero', 'Tierra del Fuego', 'Tucumán'],
	'Chile' : ['Arica', 'Parinacota', 'Iquique', 'El Tamarugal', 'Antofagasta', 'El Loa', 'Tocopilla', 'Chañaral', 'Copiapó', 'Huasco', 'Choapa', 'Elqui', 'Limarí', 'Isla de Pascua', 'Los Andes', 'Petorca', 'Quillota', 'San Antonio', 'San Felipe de Aconcagua', 'Valparaiso', 'Chacabuco', 'Cordillera', 'Maipo', 'Melipilla', 'Santiago', 'Talagante', 'Cachapoal', 'Cardenal Caro', 'Colchagua', 'Cauquenes', 'Curicó', 'Linares', 'Talca', 'Arauco', 'Bio Bío', 'Concepción', 'Ñuble', 'Cautín', 'Malleco', 'Valdivia', 'Ranco', 'Chiloé', 'Llanquihue', 'Osorno', 'Palena', 'Aisén', 'Capitán Prat', 'Coihaique', 'General Carrera', 'Antártica Chilena', 'Magallanes', 'Tierra del Fuego', 'Última Esperanza'],
	'Uruguay' : ['Artigas', 'Canelones', 'Cerro Largo', 'Colonia', 'Durazno', 'Flores', 'Florida', 'Lavalleja', 'Maldonado', 'Montevideo', 'Paysandú', 'Río Negro', 'Rivera', 'Rocha', 'Salto', 'San José', 'Soriano', 'Tacuarembó', 'Treinta y Tres']
};

// Document:
const d = document;

// Busco los select:
let selPais = d.querySelector('select[name=pais]');
let selProv = d.querySelector('select[name=prov]');

// Variables para creación de elementos:
let o;

// Cargo el array de países:
for (let pais in aProvincias) {
	o = d.createElement('option');
	o.value = pais;
	o.innerHTML = pais;
	selPais.appendChild(o);
}

// Cargo las primeras provincias:
Prov('Argentina');

// Programo el onchange:
selPais.onchange = function () {
	Prov(this.value);
}

// Función que carga las provincias:
function Prov(pais) {
	selProv.innerHTML = '';
	for (let provincia of aProvincias[pais]) {
		o = d.createElement('option');
		o.value = provincia;
		o.innerHTML = provincia;
		selProv.appendChild(o);
	}
}

// Nombre:
let nombre = d.querySelector('input[name=nombre]');

// Genero mensaje personalizado en el onblur:
nombre.onblur = function () {
	if (this.value.length < 3) {
		this.setCustomValidity('Debe tener 3 caracteres como mínimo');
	} else {
		this.setCustomValidity('');
	}
}

// Claves:
let clave1 = d.querySelector('input[name=clave]');
let clave2 = d.querySelector('input[name=reclave]');

// Función mensaje personalizado para las claves:
clave1.onblur = Claves;
clave2.onblur = Claves;

function Claves() {
	if (clave1.value.length < 4 || clave2.value.length < 4 || clave1.value != clave2.value) {
		this.setCustomValidity('Las claves no tiene 4 caracteres como mínimo o no son iguales');
	} else {
		this.setCustomValidity('');
	}
}

// Informo en p#cant:
let aCbx = d.querySelectorAll('input[type=checkbox]');
let msj = d.querySelector('#cant');
msj.innerHTML = 0;
for (let cbx of aCbx) {
	// Si existe, lo guardo:
	cbx.onclick = function () {
		let cont = 0
		for (let cbx of aCbx) {
			if (cbx.checked) {
				cont++;
			}
			console.info(cont);
		}
		msj.innerHTML = cont;
	}
}


// Validación del formulario:
let frm = d.querySelector('#frm');

// Envío del formulario:
frm.onsubmit = function () {
	// Variable de control, si todo está bien, se envía el formulario:
	let control = true;
	
	// Géneros:
	let estado = false;
	let aRad = d.querySelectorAll('input[name=genero]');
	for (let radio of aRad) {
		// Si existe, lo guardo:
		if (radio.checked) {
			estado = radio.value;
		}
	}
	if (estado == false) {
		control = false;
	}
	
	// Intereses:
	let cont = 0;
	let aCbx = d.querySelectorAll('input[type=checkbox]');
	for (let cbx of aCbx) {
		// Si existe, lo guardo:
		if (cbx.checked) {
			cont++;
		}
	}
	if (cont < 3) {
		control = false;
	}
	
	d.querySelector('#mensaje').innerHTML = '';
	if (!control) {
		d.querySelector('#mensaje').innerHTML ='Revise';
	}
	
	return control;
}