function dibujarLinea() {
  let linea = "-";
  for (let i: number = 0; i <= 40; i++) {
    linea = linea + "-";
  }
  console.log(linea);
}

let numeroo1: number = Number(prompt("Ingrese primer numero"));
let numeroo2: number = Number(prompt("Ingrese segundo numero"));
let opcion: number = Number(
  prompt(
    "Ingrese 1 para sumar, 2 para restar, 3 para dividir, 4 para multiplicar u otro valor para finalizar"
  )
);
let resultadoo: number = 0;

switch (opcion) {
  case 1:
    resultadoo = numeroo1 + numeroo2;
    dibujarLinea();
    console.log("El resultado de la operacion es: ", resultadoo);
    dibujarLinea();
    break;
  case 2:
    resultadoo = numeroo1 - numeroo2;
    dibujarLinea();
    console.log("El resultado de la operacion es: ", resultadoo);
    dibujarLinea();
    break;
  case 3:
    resultadoo = numeroo1 / numeroo2;
    dibujarLinea();
    console.log("El resultado de la operacion es: ", resultadoo);
    dibujarLinea();
    break;
  case 4:
    resultadoo = numeroo1 * numeroo2;
    dibujarLinea();
    console.log("El resultado de la operacion es: ", resultadoo);
    dibujarLinea();
    break;
  default:
    console.log("Programa finalizado");
}
