let cantNumTotal,
  cantNumPositivos,
  porcNumPositivos: number = 0;

let numero: number = Number(
  prompt("Ingrese un numero positivo, negativo o cero para finalizar")
);
while (numero !== 0) {
  if (numero > 0) {
    cantNumPositivos++;
  }
  cantNumTotal++;
  numero = Number(prompt("Ingrese un numero"));
}
if (cantNumTotal > 0) {
  porcNumPositivos = (cantNumPositivos / cantNumTotal) * 100;
  console.log(
    cantNumPositivos,
    "positivos ",
    porcNumPositivos,
    " % del total."
  );
}
