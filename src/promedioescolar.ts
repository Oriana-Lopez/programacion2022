function obtenerPromedioAlumno(indice: number): number {
  let suma = arrayNota1[indice] + arrayNota2[indice] + arrayNota3[indice];
  suma /= 3;
  return suma;
}

function obtenerPosicion(alumno: string): number {
  let posicion: number = -1;
  for (let indice: number = 0; indice < 3; indice++) {
    if (arrayAlumnos[indice] === alumno) {
      posicion = indice;
    }
  }
  return posicion;
}

function cargarNotasDeAlumnos() {
  for (let indice: number = 0; indice < 3; indice++) {
    arrayAlumnos[indice] = prompt("Ingrese el nombre del alumno: ");
    arrayNota1[indice] = Number(prompt("Nota 1er trimestre:"));
    arrayNota2[indice] = Number(prompt("Nota 2do trimestre:"));
    arrayNota3[indice] = Number(prompt("Nota 3er trimestre:"));
  }
}

let arrayAlumnos: string[] = new Array(10);
let arrayNota1: number[] = new Array(10);
let arrayNota2: number[] = new Array(10);
let arrayNota3: number[] = new Array(10);

cargarNotasDeAlumnos();
let alumno: string = prompt("A quien busca: ");

if (obtenerPosicion(alumno) === -1) {
  console.log("El alumno no existe");
} else {
  console.log(
    "El promedio es ",
    obtenerPromedioAlumno(obtenerPosicion(alumno))
  );
}
