'use strict';

// Esto es una función, tema que veremos en breve:
function ElResultadoLogico(valor, tipoDeDato = '') {
	var r = '';
	r += '<li>';
		r += 'El valor evaluado <strong>';
		r += tipoDeDato == 'string' ? '\'' + valor + '\'' : valor;
		r += tipoDeDato ? ' (' + tipoDeDato + ')' : '';
		r += '</strong> se resolverá como <strong>' + (valor ? 'true' : 'false') + '</strong>.';
	r += '</li>';
	document.write(r);
}