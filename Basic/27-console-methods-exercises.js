/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente
function errorFunction() {
    console.error("Este es un mensaje de error.")
    console.error("Error al conectarse a la base de datos: ", new Error("Conexión fallida."))
}
errorFunction()
// 2. Crea una función que utilice warn correctamente
function warnFunction() {
    console.warn("Este es un mensaje de advertencia.")
}
warnFunction()
// 3. Crea una función que utilice info correctamente
function infoFunction() {
    console.info("Este es un mensaje de información adicional.")
}
infoFunction()
// 4. Utiliza table
let personas = []
personas.push({name: "Brais", age: 37}, {name: "Sara", age: 25}, {name: "Javier", age: 21})
console.table(personas)
// 5. Utiliza group
console.group("Lista de la compra:")
console.log("1. Pan")
console.log("2. Leche")
console.log("3. Huevos")
console.groupEnd()
// 6. Utiliza time
console.time("Time 1")
for (let i = 0; i < 1000000; i++) {
    
}
console.timeEnd("Time 1")
// 7. Valida con assert si un número es positivo
let edadParaBeber=17
console.assert(edadParaBeber >= 18, "No puedes beber alcohol si eres menor de edad.")
// 8. Utiliza count
console.count("Veces")
console.count("Veces")
console.count("Veces")
console.count("Veces")
console.countReset("Veces")
// 9. Utiliza trace
function funcion1() {
    funcion2()
}
function funcion2() {
    console.trace("Seguimiento normal")
}
funcion1()
// 10. Utiliza clear
console.clear()