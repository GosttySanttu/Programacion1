'use strict';

// Document y métodos:
const d = document,
	_id = 'getElementById';

// Variables:
let cl1, cl2, btn, msj,
	// Contador de errores:
	err = 0;

// Obtengo todos los objetos:
cl1 = d.getElementById('clave1');
cl2 = d.getElementById('clave2');
btn = d.getElementById('boton');
msj = d.getElementById('mensaje');

// Asigno una función anónima al evento onclick del botón:
btn.onclick = function() {
	// Obtengo los values:
	let pw1 = cl1.value;
	let pw2 = cl2.value;
	if(pw1 == '' || pw2.length == 0) {
		// Falta ingresar:
		msj.innerHTML = 'No ingresaste correctamente las claves';
		msj.style.color = 'blue';
	} else if(pw1 != pw2) {
		// No coinciden:
		msj.innerHTML = 'Las claves no son iguales';
		msj.style.color = 'red';
		// Banderita de error:
		err++;
		if(err == 3) {
			// Límite de errores:
			msj.innerHTML = '3 errores';
			msj.style.color = 'orange';
			// Deshabilitar el botón:
			this.disabled = true;
		}
	} else {
		// Coinciden:
		msj.innerHTML = 'Las claves coinciden';
		msj.style.color = 'green';
		err = 0;
	}
}