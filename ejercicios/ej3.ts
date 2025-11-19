const elementos : number[] = [1,2,3,4,5] ;

function suma( arreglo: number [] ) :number  {
let total : number  = 0 ;
let suma : number = 0
for (let i= 0; i < arreglo.length; i++) {
    suma += arreglo[i]

    
}
return suma 
}

/* function maximo(arreglo: number[]) : number {
return Math.max (...arreglo)
}

function minimo( arreglo:number[] ) : number {
return Math.min(...arreglo)
    
} */


console.log(suma(elementos))
console.log(Math.max(...elementos))
console.log(Math.min(...elementos))

/* Ejercicio 3: Arrays y Tipos
Problema: Crea un programa que maneje un array de números y realice las siguientes operaciones:

Declara un array de números con al menos 5 elementos
Calcula la suma de todos los elementos
Encuentra el número mayor y el menor
Muestra todos los resultados en consola */