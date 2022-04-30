let numero1: number = Number(prompt("Ingrese el primer numero"));
let numero2: number = Number(prompt("Ingrese el segundo numero"));
let indice, aux: number;
let suma: number = 0;
indice = numero1;
if (numero1 > numero2) {
  aux = numero1;
  numero1 = numero2;
  numero2 = aux;
}
for (let indice: number = numero1; indice <= numero2; indice++) {
  suma = suma + indice;
}
console.log("Resultado:", suma);
