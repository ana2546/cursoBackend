/* let base : number = 20; 
let altura : number = 30;


function cuenta(base: number , altura: number  ) : number {
    return base*altura}

 console.log(cuenta(base,altura)) */

function calcularAreaRectangulo(ancho: number, alto: number): number {
  if (ancho <= 0 || alto <= 0) {
    throw new Error('El ancho y el alto deben ser valores positivos');
  }
  return ancho * alto;
}

const ancho: number = 10;
const alto: number = 5;
const area: number = calcularAreaRectangulo(ancho, alto);

console.log(`El área de un rectángulo de ${ancho}x${alto} es: ${area}`);


/* Ejercicio 2: Funciones con Tipos
Problema: Crea una función que calcule el área de un rectángulo. La función debe:

Recibir dos parámetros: ancho (number) y alto (number)
Retornar el área calculada (number)
Incluir validación para asegurar que los valores sean positivos
Mostrar el resultado en consola */