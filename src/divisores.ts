let numeroIngresado: number = Number(
  prompt(
    "Ingrese un número entero para ver la cantidad de divisores que tiene:"
  )
);
console.log(
  "El número " +
    numeroIngresado +
    " tiene " +
    cantidadDeDivisores(numeroIngresado) +
    " divisores."
);

function esMultiplo(dividendo: number, divisor: number): boolean {
  if (dividendo % divisor === 0) {
    return true;
  } else {
    return false;
  }
}

function cantidadDeDivisores(numeroIngresado: number): number {
  let cantidad: number = 0;
  let divisor: number;
  for (divisor = 0; divisor <= numeroIngresado; divisor++) {
    if (esMultiplo(numeroIngresado, divisor) === true) {
      cantidad++;
    }
  }
  return cantidad;
}
