'use strict';

// Creación de las funciones:
function MostrarDias() {
	var s, m;
	do {
		s = prompt('Ingrese una sigla por favor: dw, dm, dg');
		s = s ? s.toLowerCase() : s;
	} while (!(s == 'dw' || s == 'dm' || s == 'dg'))
	m = 'Cursás los días ' + ObtenerDias(s);
	console.info(m);
}

function ObtenerDias(sigla) {
	var dias;
	switch (sigla.toLowerCase()) {
		case 'dw':
			dias = 'Ma, Ju, Vi';
			break;
		case 'dm':
			dias = 'Lu, Mi, Vi';
			break;
		case 'dg':
			dias = 'Mi, Ju, Vi';
	}
	return dias;
}