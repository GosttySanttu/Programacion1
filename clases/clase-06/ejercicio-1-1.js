'use strict';

// Creación de las funciones:
function MostrarDias() {
	var s, m = 'Cursa los días ';
	do {
		s = prompt('Ingrese una sigla (dw, dm, dg)');
		s = s == null ? s : s.toUpperCase();
	} while (!(s == 'DW' || s == 'DM' || s == 'DG'))
	m += ObtenerDias(s);
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