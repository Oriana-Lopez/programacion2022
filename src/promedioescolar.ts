let num1: number = Number(prompt("Ingrese el número de alumnos: "));
let num2: string = prompt("A quien busca: ");

let numAlumnos : number = num1;
let alumnos : string[] = new Array(numAlumnos);
let nota1 : number[] = new Array(numAlumnos);
let nota2 : number[] = new Array(numAlumnos);
let nota3 : number[] = new Array(numAlumnos);
let indice : number;

for (let indice: number = 0; indice < numAlumnos.length; indice++) {
  let alumnos[indice] = prompt("Nombre: ");
  let nota1[indice] = Number(prompt("Nota 1er trimestre:"));
  let nota2[indice] = Number(prompt("Nota 2do trimestre:"));
  let nota3[indice] = Number(prompt("Nota 3er trimestre:"));
}

let alumBuscado : string = num2;
let encontrado : boolean = false;
let promedio : number = 0;
indice = 0;

while (indice < numAlumnos && !encontrado) {
  if (alumnos[indice] == alumBuscado) {
    encontrado = true;
    promedio = nota1[indice] + nota2[indice] + nota3[indice];
    promedio /= 3;
  }
  indice++;
}

if (encontrado) {
  console.log("El promedio de ",alumBuscado, " es ",promedio);
} else {
console.log("No se pudo encontrar a ",alumBuscado);
}
