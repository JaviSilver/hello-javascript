/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let Hola = "Hola"
let Mundo = "Mundo"
let Saludo = Hola + " " + Mundo
console.log(Hola + " " + Mundo)
// 2. Muestra la longitud de una cadena de texto
console.log(Saludo.length)
// 3. Muestra el primer y último carácter de un string
console.log(Saludo[0])
console.log(Saludo[Saludo.length - 1])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(Saludo.toUpperCase())
console.log(Saludo.toLowerCase())
// 5. Crea una cadena de texto en varias líneas
let mensaje = `Hola, este
es mi mensaje
porque
soy la pera
limonera`
console.log(mensaje)

// 6. Interpola el valor de una variable en un string
let nombre="Juan"
let apellido="Perez"
let masaje=`Hola, ${nombre} y mi apellido es ${apellido}`
console.log(masaje)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
let stringConEspacios = "Hola Mundo, esto es una prueba";
let stringConGuiones = stringConEspacios.replace(/ /g, "-");
console.log(stringConGuiones);
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(masaje.includes("Hola"))
// 9. Comprueba si dos strings son iguales
let string1 = "Hola Mundo"
let string2 = "Hola Mundo"
console.log(string1 === string2)
// 10. Comprueba si dos strings tienen la misma longitud
console.log(string1.length === string2.length)