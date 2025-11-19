interface Persona{
nombre: string;
edad: number ;
email: string;
}

const persona1 : Persona ={
    nombre:"juan",
    edad:20,
    email:"jp@gmail.com"
}

function mostrarValores(persona1:Persona) {
console.log()


}
    

/* 
 Ejercicio 4: Interfaces Básicas
Problema: Crea una interfaz Persona con las propiedades: nombre (string), edad (number) y email (string). Luego:

Crea un objeto que implemente esta interfaz

Crea una función mostrarValores que reciba una Persona y muestre su información formateada

Ejecuta la función con el objeto creado

🔥 ¿y si les pido que mostrarValores pueda recibir cualquier objeto y mostrar sus claves y valores? */