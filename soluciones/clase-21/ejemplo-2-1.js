'use strict';

// Document:
const d = document;

// Objetos:
let pre = d.querySelector('pre');
let addBtns = d.querySelectorAll('#productos button.add');
let delBtns = d.querySelectorAll('#productos button.del');
let reset = d.querySelector('#reset');

let carrito = {
	productos: [],
	cantidad: [],
	total: 0,
};

// Objeto carrito, según localStorage:
if (localStorage.carrito) {
	// Si existe el carrito, se lee del localStorage:
	carrito = JSON.parse(localStorage.carrito);
} else {
	// Si no existe el carrito, se crea en el localStorage:
	localStorage.carrito = JSON.stringify(carrito);
}

// localStorage:
console.info(localStorage, carrito);

// Muestro el detalle del carrito:
pre.innerHTML = `
Productos: ${carrito.productos}
Cantidades: ${carrito.cantidad}
Total: $${carrito.total}

`;

// Acción de los botones para agregar productos:
for (let btn of addBtns) {
	btn.onclick = function () {
		let id = parseInt(this.dataset.id);
		let val = parseInt(this.dataset.val);
		// Verifico si ya existe el producto:
		let indice = carrito.productos.indexOf(id);
		if (indice != -1) {
			// Si existe, actualizo el índice de la cantidad:
			carrito.cantidad[indice]++;
		} else {
			// Si no existe, creo el índice en productos y cantidad:
			carrito.productos.push(id);
			carrito.cantidad.push(1);
		}
		// Actualizo el total:
		carrito.total = parseInt(carrito.total) + val;
		// Actualizo el carrito en el localStorage:
		localStorage.carrito = JSON.stringify(carrito);
		// Muestro el detalle del carrito:
		pre.innerHTML = `
Productos: ${carrito.productos}
Cantidades: ${carrito.cantidad}
Total: $${carrito.total}

`;
	}
}

// Acción de los botones para quitar productos:
for (let btn of delBtns) {
	btn.onclick = function () {
		let id = parseInt(this.dataset.id);
		let val = parseInt(this.dataset.val);
		// Verifico si ya existe el producto:
		let indice = carrito.productos.indexOf(id);
		if (indice != -1) {
			// Verifico si llegó a cero:
			if (carrito.cantidad[indice] > 0) {
				// Si existe, actualizo el índice de la cantidad:
				carrito.cantidad[indice]--;
				// Actualizo el total:
				carrito.total = parseInt(carrito.total) - val;
			}
		}
		// Actualizo el carrito en el localStorage:
		localStorage.carrito = JSON.stringify(carrito);
		// Muestro el detalle del carrito:
		pre.innerHTML = `
Productos: ${carrito.productos}
Cantidades: ${carrito.cantidad}
Total: $${carrito.total}

`;
	}
}

// Reseteo:
reset.onclick = function () {
	// Limpiar el localStorage:
	localStorage.clear();
	// Refrescar la página:
	//location.href = 'https://davinci.edu.ar';
	//console.log(location.href);
	location.reload();

}

