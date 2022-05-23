let longitud: number = 6;
let v1: number[] = new Array(longitud);
let v2: number[] = new Array(longitud);
let vSuma: number[] = new Array(longitud);

for (let indice: number = 0; indice < longitud; indice++) {
  v1[indice] = Number(prompt("Ingrese el valor de v1"));
}

for (let indice: number = 0; indice < longitud; indice++) {
  v2[indice] = Number(prompt("Ingrese el valor de v2"));
}

for (let indice: number = 0; indice < longitud; indice++) {
  vSuma[indice] = v1[indice] + v2[indice];
  console.log(vSuma[indice]);
}
