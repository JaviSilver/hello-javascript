/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
/* let myArray = [1, 2, 3, 4]
let [first, second] = myArray
console.log(first)
console.log(second) */
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
//let [first2, second2, third2, fourth2, fifth2 = 0] = myArray
/*console.log(first2)
console.log(second2)
console.log(third2)
console.log(fourth2)
console.log(fifth2) */
// 3. Usa desestructuración para extraer dos propiedades de un objeto
/*let object1 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}
let { name, age } = object1
console.log(name)
console.log(age)*/

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let object2 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}
let { name: myName, age: myAge } = object2
console.log(myName)
console.log(myAge)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let miObjeto = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    address: {
        city: "Vigo",
        country: "Spain"
    }
}
let { name: myName2, address: { city: myCity } } = miObjeto
console.log(myName2)
console.log(myCity)

// 6. Usa propagación para combinar dos arrays en uno nuevo
let myArray1 = [1, 2, 3, 4]
let myArray2 = [5, 6, 7, 8]
let myArray3 = [...myArray1, ...myArray2]
console.log(myArray3)
// 7. Usa propagación para crear una copia de un array
let miArray= [...myArray1]
console.log(miArray)
// 8. Usa propagación para combinar dos objetos en uno nuevo
let miObjeto1 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}
let miObjeto2 = {
    city: "Vigo",
    country: "Spain"
}
let miObjeto3 = { ...miObjeto1, ...miObjeto2 }
console.log(miObjeto3)
// 9. Usa propagación para crear una copia de un objeto
let miObjetoCopia = { ...miObjeto3 }
console.log(miObjetoCopia)
// 10. Combina desestructuración y propagación
let myArray4 = [1, 2, 3, 4]
let [first3, second3, ...rest] = myArray4
console.log(first3)
console.log(second3)
console.log(rest)
