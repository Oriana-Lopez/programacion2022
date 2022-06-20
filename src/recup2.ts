function cargarProductos(arrayProducto: string[]): void {
  for (let i: number = 0; i < arrayProducto.length; i++) {
    arrayProducto[i] = prompt("Ingrese producto " + i + " en el carrito");
  }
}

function cargarPrecioProductos(arrayPrecioProductos: number[]): void {
  for (let i: number = 0; i < arrayPrecioProductos.length; i++) {
    let precio: number = Number(
      prompt("ingrese precio de producto " + listaProductos[i])
    );
    while (precio <= 0) {
      precio = Number(
        prompt("ingrese precio de producto " + listaProductos[i])
      );
    }
    arrayPrecioProductos[i] = precio;
  }
}

function cargarCantidadProductos(arrayCantidadProductos: number[]): void {
  for (let i: number = 0; i < arrayCantidadProductos.length; i++) {
    let cantidad: number = Number(
      prompt("ingrese cantidad de " + listaProductos[i] + " en el carrito")
    );
    while (cantidad <= 0) {
      cantidad = Number(
        prompt("ingrese cantidad de " + listaProductos[i] + " en el carrito")
      );
    }
    arrayCantidadProductos[i] = cantidad;
  }
}

function calcularPrecioTotal(
  arregloPrecios: number[],
  arregloStock: number[]
): number {
  let total: number = 0;
  for (let i: number = 0; i < arregloPrecios.length; i++) {
    total = total + Number(arregloPrecios[i]) * Number(arregloStock[i]);
  }
  return total;
}

function mostrarMensajeFinal(): void {
  console.log("El detalle de su compra es: ");
  for (let i: number = 0; i < cantidadDeProductos; i++) {
    console.log(
      stockProductos[i] +
        " unidades de " +
        listaProductos[i] +
        " a un precio unitario de " +
        precioProductos[i] +
        " = " +
        stockProductos[i] * precioProductos[i]
    );
  }
}

//Programa Principal
let cantidadDeProductos: number = Number(
  prompt("Ingrese cantidad de productos a comprar")
);
let listaProductos: string[] = new Array(cantidadDeProductos);
let precioProductos: number[] = new Array(cantidadDeProductos);
let stockProductos: number[] = new Array(cantidadDeProductos);
let precioTotal: number = 0;
let descuento: number = 0.1;

cargarProductos(listaProductos);

//cargarPrecioProductos(precioProductos);
//cargarCantidadProductos(stockProductos);
//precioTotal = calcularPrecioTotal(precioProductos, stockProductos);

if (precioTotal > 1000) {
  precioTotal = precioTotal - precioTotal * descuento;
}

if (precioTotal < 1000) {
  mostrarMensajeFinal();
  console.log(
    "el valor total de su compra es " +
      precioTotal +
      ", muchas gracias por su compra"
  );
} else if (precioTotal > 3000) {
  mostrarMensajeFinal();
  console.log(
    "el valor total de su compra es " +
      precioTotal +
      ", usted esta participando por el sorteo de un 0K"
  );
} else if (precioTotal > 2000) {
  mostrarMensajeFinal();
  console.log(
    "el valor total de su compra es " +
      precioTotal +
      ", usted esta participando por el sorteo de una moto"
  );
} else if (precioTotal > 1000) {
  mostrarMensajeFinal();
  console.log(
    "el valor total de su compra es " +
      precioTotal +
      ", usted esta participando por el sorteo de un tv led"
  );
}
