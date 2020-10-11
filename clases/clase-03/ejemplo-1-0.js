'use strict';

// Esto es una función, tema que veremos en breve:
function DevolucionIsNaN(valor, tipoDeDato = '') {
	var r = '';
	r += '<li>';
		r += 'El valor evaluado <strong>';
		r += tipoDeDato == 'string' ? '\'' + valor + '\'' : valor;
		r += tipoDeDato ? ' (' + tipoDeDato + ')' : '';
		r += '</strong> devolverá <strong>' + isNaN(valor) + '</strong>.';
	r += '</li>';
	document.write(r);
}