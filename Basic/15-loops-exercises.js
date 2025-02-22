/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
let i = 1;
while (i <= 20) {
    console.log(i);
    i++;
    }
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0;
for (let i = 1; i <= 100; i++) {
  suma += i;
  if (i === 100) {
    console.log(suma);
  }
}

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ['Juan', 'Pedro', 'Ana', 'Maria'];
for (let value of nombres) {
    console.log(value)
}
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let cadena = 'Hola, soy Brais';
let contador = 0;
for (let i = 0; i < cadena.length; i++) {
  if (cadena[i] === 'a' || cadena[i] === 'e' || cadena[i] === 'i' || cadena[i] === 'o' || cadena[i] === 'u') {
    contador++;
  }
}
console.log(contador);
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros = [1, 2, 3, 4, 5];
let producto = 1;

for (let i = 0; i < numeros.length; i++) {
  producto *= numeros[i];
  console.log(`Multiplicando por ${numeros[i]}, producto actual: ${producto}`);
}

console.log(`Producto total: ${producto}`);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let numero = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} * ${i} = ${numero * i}`);
}
// 8. Usa un bucle para invertir una cadena de texto
let cadenaInvertida = '';
let cadena1 = 'Hola, soy Brais';
for (let i = cadena1.length - 1; i >= 0; i--) {
  cadenaInvertida += cadena1[i];
}
console.log(cadenaInvertida);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let a = 0;
let b = 1;
let c;
for (let i = 0; i < 10; i++) {
  c = a + b;
  a = b;
  b = c;
  console.log(c);
}
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
console.log('--------------------------');
let numeros1 = [1, 20, 3, 40, 5, 60, 7, 80, 9, 100];
let numerosMayores = [];
for (let i = 0; i < numeros1.length; i++) {
  if (numeros1[i] > 10) {
    numerosMayores.push(numeros1[i]);
  }
}
console.log(numerosMayores);
