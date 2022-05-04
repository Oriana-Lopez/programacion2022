let sueldoActual: number = Number(prompt("Ingrese el salario actual"));
let nuevoSueldo: number = 0;

switch (true) {
  case sueldoActual > 0 && sueldoActual <= 15000:
    nuevoSueldo = sueldoActual * 1.2;
    console.log(
      "Recibe un aumento de 20% y su nuevo sueldo es: " + nuevoSueldo
    );
    break;
  case sueldoActual >= 15001 && sueldoActual <= 20000:
    nuevoSueldo = sueldoActual * 1.1;
    console.log(
      "Recibe un aumento de 10% y su nuevo sueldo es: " + nuevoSueldo
    );
    break;
  case sueldoActual >= 20001 && sueldoActual <= 25000:
    nuevoSueldo = sueldoActual * 1.05;
    console.log("Recibe un aumento de 5% y su nuevo sueldo es: " + nuevoSueldo);
    break;
  default:
    console.log("No hay aumento");
}
