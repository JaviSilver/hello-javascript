/*
Clase 26 - Sets 
Vídeo: https://youtu.be/1glVfFxj8a4?t=9952
*/

// Set, es una colección de valores únicos, es decir, no admite duplicados

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("https://moure.dev") // Añadir un elemento

console.log(mySet)

mySet.delete("https://moure.dev") // Eliminar un elemento, citando el valor exacto

console.log(mySet)

console.log(mySet.delete("Brais")) // Devuelve true si lo ha eliminado, false si no lo ha eliminado
console.log(mySet.delete(4))

console.log(mySet)

// has

console.log(mySet.has("Moure")) // Devuelve true si existe, false si no existe
console.log(mySet.has("Brais"))

// size

console.log(mySet.size) // Devuelve el número de elementos

// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("BraisMoure@mouredev.com")
console.log(mySet)