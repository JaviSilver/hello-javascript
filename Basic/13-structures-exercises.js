/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let animals = ["dog", "cat", "bird", "fish", "rabbit"]
console.log(animals)

// 2. Añade dos más. Uno al principio y otro al final
animals.unshift("horse")
animals.push("turtle")
console.log(animals)

// 3. Elimina el que se encuentra en tercera posición 
animals.splice(2,1)
console.log(animals)

// 4. Crea un set que almacene cinco libros
let books = new Set(["book1", "book2", "book3", "book4", "book5"])
console.log(books)

// 5. Añade dos más. Uno de ellos repetido
books.add("book6")
books.add("book7")
console.log(books)

// 6. Elimina uno concreto a tu elección
books.delete("book3")
console.log(books)

// 7. Crea un mapa que asocie el número del mes a su nombre 
let months = new Map([
    [1, "January"],
    [2, "February"],
    [3, "March"],
    [4, "April"],
    [5, "May"],
    [6, "June"],
    [7, "July"],
    [8, "August"],
    [9, "September"],
    [10, "October"],
    [11, "November"],
    [12, "December"]
])
console.log(months)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(months.has(5))
// 9. Añade al mapa una clave con un array que almacene los meses de verano
months.set("verano", ["June", "July", "August"])
console.log(months)
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let holaSoyFlori = ["Hola", "soy", "Flori"]
console.log(holaSoyFlori)
let setFlori = new Set(holaSoyFlori)
console.log(setFlori)
let mapFlori = new Map([["flori", setFlori]]) 
console.log(mapFlori)