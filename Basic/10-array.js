/*
Clase 25 - Arrays
Vídeo: https://youtu.be/1glVfFxj8a4?t=8741
*/

// Array, es una colección de valores, que pueden ser de cualquier tipo

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Brais", "Moure", "mouredev", 37, true]
myArray2 = new Array("Brais", "Moure", "mouredev", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Brais"
// myArray2[0] = "Moure"
myArray2[1] = "mouredev"
myArray2[4] = "mouredev"

console.log(myArray2)

myArray = []
myArray[2] = "Brais"
// myArray[0] = "Moure"
myArray[1] = "mouredev"

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop, añadir y eliminar elementos al final

myArray.push("Brais") // Añade hacia la derecha o al final
myArray.push("Moure")
myArray.push("mouredev")
myArray.push(37)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop() // Elimina el último

console.log(myArray)

// shift y unshift, añadir y eliminar elementos al principio

console.log(myArray.shift()) // Elimina el primero y lo devuelve
console.log(myArray)

myArray.unshift("Brais", "mouredev") // Añade hacia la izquierda o al principio
console.log(myArray)

// length, tamaño del array

console.log(myArray.length)

// clear, vaciar un array

myArray = []
myArray.length = 0 // alternativa
console.log(myArray)

// slice, coger un pedazo

myArray = ["Brais", "Moure", "mouredev", 37, true]

let myNewArray = myArray.slice(1, 3) //Coges un pedazo, pero sin tener en cuenta al ultimo elemento 

console.log(myArray)
console.log(myNewArray)

// splice, eliminar un pedazo 

myArray.splice(1, 3) // Elimina un pedazo, en este caso desde la posición 1, y 3 elementos
console.log(myArray)

myArray = ["Brais", "Moure", "mouredev", 37, true]

myArray.splice(1, 2, "Nueva entrada")  // Elimina un pedazo, y lo reemplaza por otro, en este caso "Nueva entrada"
console.log(myArray)