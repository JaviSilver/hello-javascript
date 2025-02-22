/*
Clase 27 - Maps
Vídeo: https://youtu.be/1glVfFxj8a4?t=10755
*/

// Map

// Declaración

let myMap = new Map()

console.log(myMap)

// Inicialiación

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

console.log(myMap)

// Métodos y propiedades

// set, añadir un elemento, pero tambien sirve para modificar un valor de una clave existente

myMap.set("alias", "mouredev")
myMap.set("name", "Brais Moure")

console.log(myMap)

// get, obtener un valor a partir de una clave

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has, comprobar si existe una clave

console.log(myMap.has("surname"))
console.log(myMap.has("age"))

// delete, eliminar un elemento a partir de una clave

myMap.delete("email")

console.log(myMap)

// keys (Devuelve las claves), values (Devuelve los valores) y entries (Devuelve las claves y los valores) 

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// size, número de elementos o tamaño del mapa

console.log(myMap.size)

// clear, vaciar el mapa

myMap.clear()

console.log(myMap)



