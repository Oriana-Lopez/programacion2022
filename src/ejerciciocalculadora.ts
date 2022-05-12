function dibujarLinea() {
  let linea = "-";
  for (let i: number = 0; i <= 40; i++) {
    linea = linea + "-";
  }
  console.log(linea);
}

let num1: number = Number(prompt("Ingrese primer numero"));
let num2: number = Number(prompt("Ingrese segundo numero"));
let opcion: number = Number(
  prompt(
    "Ingrese 1 para sumar, 2 para restar, 3 para dividir, 4 para multiplicar u otro valor para finalizar"
  )
);
let resultado: number = 0;

switch (opcion) {
  case 1:
    resultado = num1 + num2;
    dibujarLinea();
    console.log("El resultado de la operacion es: ", resultado);
    dibujarLinea();
    break;
  case 2:
    resultado = num1 - num2;
    dibujarLinea();
    console.log("El resultado de la operacion es: ", resultado);
    dibujarLinea();
    break;
  case 3:
    resultado = num1 / num2;
    dibujarLinea();
    console.log("El resultado de la operacion es: ", resultado);
    dibujarLinea();
    break;
  case 4:
    resultado = num1 * num2;
    dibujarLinea();
    console.log("El resultado de la operacion es: ", resultado);
    dibujarLinea();
    break;
  default:
    console.log("Programa finalizado");
}
