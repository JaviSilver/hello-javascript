/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function sum(a, b) {
    return console.log(a + b)
}
sum(5, 10)
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
/*function maxNumber(numbers) {
    let max = numbers[0]
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] > max) {
            max = numbers[i]
        }
    }
    return console.log(max)
}*/
function maxNumber(numbers) {
    return console.log(Math.max(...numbers))
}
maxNumber(numbers)
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let cadena = 'Hola, soy Calvo'
function vocales(cadena){
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === 'a' || cadena[i] === 'e' || cadena[i] === 'i' || cadena[i] === 'o' || cadena[i] === 'u') {
        contador++;
    }
    }
    console.log(contador);
}
vocales(cadena)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
cadena = ['hola', 'soy', 'calvo']
function mayusculas(cadena) {
    let mayus = []
    for(let i = 0; i < cadena.length; i++) {
        mayus.push(cadena[i].toUpperCase())
    }
    return console.log(mayus)
}
mayusculas(cadena)

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
let numero= 7
function primo(numero) {
    for(let i = 2; i < numero; i++) {
        if(numero % i === 0) {
            return console.log(false)
        }
    }
    return console.log(true)
}
primo(numero)
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
let array1= [1, 2, 3, 4, 5]
let array2= [4, 5, 6, 7, 8]
function comunes(array1, array2) {
    let comunes = []
    for(let i = 0; i < array1.length; i++) {
        for(let j = 0; j < array2.length; j++) {
            if(array1[i] === array2[j]) {
                comunes.push(array1[i])
            }
        }
    }
    return console.log(comunes)
}
comunes(array1, array2)
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function numerosPares(array) {
    let suma = 0
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            suma += array[i]
        }
    }
    return console.log(suma)
}
numerosPares(array)
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
array = [1, 2, 3, 4, 5]
function arrayNumerosElevados(array) {
    let elevados = []
    for(let i = 0; i < array.length; i++) {
        elevados.push(array[i] ** 2)
    }
    return console.log(elevados)
}
arrayNumerosElevados(array)
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
let cadena1 = 'ojo rojo';
function cadenaInversa(cadena1) {
    let cadenaInvertida = '';
    for (let i = cadena1.length - 1; i >= 0; i--) {
        cadenaInvertida += cadena1[i];
    }
    console.log(cadenaInvertida);
}
cadenaInversa(cadena1)

// 10. Crea una función que calcule el factorial de un número dado
function factorial(numero) {
    let resultado = 1
    for(let i = 1; i <= numero; i++) {
        resultado *= i
    }
    return console.log(resultado)
}
factorial(4)