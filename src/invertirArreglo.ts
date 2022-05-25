let longitud: number = Number(prompt("Ingrese la longitud del arreglo"));
let v1: number[] = new Array(longitud);

for (let indice: number = 0; indice < longitud; indice++) {
  v1[indice] = Number(prompt("Ingrese los numeros"));
}

let cadena: string = "";
for (let indice: number = longitud - 1; indice >= 0; indice--) {
  cadena = cadena + v1[indice] + " ";
}
console.log("Los numeros ingresados invertidos son: ", cadena);
