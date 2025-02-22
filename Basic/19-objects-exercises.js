/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
let persona1 = {
    nombre: "Brais",
    edad: 27,
    ciudad: "A Coruña"
}
console.log(persona1)
// 2. Accede y muestra su valor
console.log(persona1.nombre)
// 3. Agrega una nueva propiedad
persona1.aficion="futbol"
console.log(persona1)
// 4. Elimina una de las 3 primeras propiedades
delete persona1.ciudad
console.log(persona1)
// 5. Agrega una función e invócala
let saludo = function myFunc() {
    console.log("¡Hola, " + this.nombre + "!")
}
persona1.saludo = saludo
persona1.saludo()
// 6. Itera las propiedades del objeto
for(let propiedad in persona1){
    console.log(propiedad + ": " + persona1[propiedad])
}
// 7. Crea un objeto anidado
let persona2={
    nombre: "Brais",
    edad: 27,
    ciudad: "A Coruña",
    direccion:{
        calle: "Calle Falsa",
        numero: 123,
        cp: 15001
    }
}
console.log(persona2)
// 8. Accede y muestra el valor de las propiedades anidadas
console.log(persona2.direccion.calle)
// 9. Comprueba si los dos objetos creados son iguales
console.log(persona1===persona2)
// 10. Comprueba si dos propiedades diferentes son iguales
console.log(persona1.nombre===persona2.nombre)
