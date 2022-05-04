let sueldoActual : number = Number(prompt("Ingrese el salario actual"));
let nuevoSueldo : number = 0;

switch sueldoActual{
  
  case 15000:
      if ( 0 < sueldoActual && sueldoActual <= 15000 ) 
      nuevoSueldo = sueldoActual*1.2;
      console.log("Aumento de 20%");
      break;
  case 20000:
      if ( 15001 < sueldoActual && sueldoActual <= 20000 ) 
      nuevoSueldo = sueldoActual*1.1;
      console.log("Aumento de 10%");
      break;
  case 25000:
      if ( 20001 < sueldoActual && sueldoActual <= 25000 ) 
      nuevoSueldo = sueldoActual * 1.05;
      console.log("Aumento de 5%");
      break;
  default:
  nuevoSueldo=sueldoActual;
  console.log("No hay aumento");
}
