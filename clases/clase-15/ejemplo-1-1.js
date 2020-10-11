'use strict';

// Document y métodos:
const d = document,
	_id = 'getElementById';

// La imagen:
let img = d.getElementById('imagen');
console.info(img);

// El texto:
let txt = d[_id]('texto');
console.info(txt);

// El src de la imagen
console.info('src:', img.src);
console.info('attributes.src.value:', img.attributes.src.value);

// El title del texto:
console.info(txt.title);
console.info(txt.innerHTML);


// Modificación del alt y src de la imagen:
img.src = 'items/flaco-spinetta.jpg';
img.alt = 'Luis Alberto Spinetta tocando la guitarra';

// Modificación del title y contenido del texto:
txt.title = 'Te cuento lo que hace el Flaco';
txt.innerHTML = 'El <em>flaco</em> Spinetta tocando la guitarra';
