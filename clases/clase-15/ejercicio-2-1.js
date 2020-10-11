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
msj = d[_id]('mensaje');

// Asigno una función anónima al evento onclick del botón:
btn.onclick = function() {
	// Obtengo los values:
	let pw1 = cl1.value;
	let pw2 = cl2.value;
	if(pw1 == '' || pw2.length == 0) { // !pw2.length
		// Falta ingresar:
		msj.innerHTML = 'Uno o ambos campos no están completos';
		msj.style.color = 'blue';
	} else if(pw1 != pw2) {
		// No coinciden:
		msj.innerHTML = 'Las contraseñas no coinciden';
		msj.style.color = 'red';
		// Banderita de error:
		err++;
		if (err == 3) {
			msj.innerHTML = 'Alcanzaste el límite de intentos, has sido deshabilitado, vuelve a intentarlo en 15 minutos';
			msj.style.color = 'orange';
			// this representa al botón que está disparando el evento onclick:
			this.disabled = true;
		}
	} else {
		// Coinciden:
		msj.innerHTML = 'Las contraseñas coinciden';
		msj.style.color = 'green';
	}
}