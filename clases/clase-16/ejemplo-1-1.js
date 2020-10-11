'use strict';

/*
<div id="div"><p>El primer párrafo</p><p>El segundo párrafo</p>
	<p>
		El párrafo del <a href="#">link</a>
	</p>
</div>
*/

// Document y métodos:
const d = document,
	_id = 'getElementById';

// El div:
let div = d.getElementById('div');

// Primer hijo y primer hijo html:
console.info('Primer hijo', div.firstChild);
console.info('Primer hijo html', div.firstElementChild);
console.info('-----');

// Último hijo y último hijo html:
console.info('Último hijo', div.lastChild);
console.info('Último hijo html', div.lastElementChild);
console.info('-----');

// Hijos e hijos html:
console.info('Hijos', div.childNodes);
console.info('Hijos html', div.children);
