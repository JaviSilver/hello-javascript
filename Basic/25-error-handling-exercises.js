/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/
/*
// 1. Captura una excepción utilizando try-catch
function esNumero(a){
    if(!Number.isInteger(a)){
        throw new Error("No es un número entero")
    } else{
        console.log("Es un número entero")
    }
}
try{
    esNumero("a")
} catch(error){
    console.log(error.message)
}
// 2. Captura una excepción utilizando try-catch y finally
try{
    esNumero("a")
} catch(error){
    console.log(error.message)
} finally{
    console.log("Me voy a ejecutar aunque tu no quieras")
}
// 3. Lanza una excepción genérica
// 3. Lanza una excepción genérica
function lanzarExcepcionGenerica() {
    throw new Error("Esta es una excepción genérica")
}

try {
    lanzarExcepcionGenerica();
} catch (error) {
    console.log(error.message);
}
// 4. Crea una excepción personalizada

class ExcepcionFlori extends Error {
    constructor(message) {
        super(message);
        this.name = "SoyFlori";
    }
    printFlori() {
        console.log("Soy Flori")
    }
}


// 5. Lanza una excepción personalizada
function lanzarExcepcionPersonalizada() {
    throw new ExcepcionFlori("Esta es una excepción personalizada")
}
try {
    lanzarExcepcionPersonalizada()
} catch (error) { 
    console.log(error.message)
    error.printFlori()
}

// 6. Lanza varias excepciones según una lógica definida
function verificarValor(valor) {
    if (typeof valor !== 'number') {
        throw new Error("El valor no es un número");
    } else if (valor < 0) {
        throw new Error("El valor es negativo");
    } else if (valor === 0) {
        throw new Error("El valor es cero");
    } else if (valor > 100) {
        throw new Error("El valor es mayor que 100");
    } else {
        console.log("El valor es válido");
    }
}

try {
    verificarValor(6); // Cambia este valor para probar diferentes excepciones
} catch (error) {
    console.log(error.message);
}
// 7. Captura varias excepciones en un mismo try-catch
function verificarValor2(valor) {
    if(typeof valor !== "number"){
        throw new TypeError("Este valor no es un numero")
    } else if (valor < 0) {
        throw new RangeError("El valor es negativo");
    } else if (valor === 0) {
        throw new Error("El valor es cero");
    } else if (valor > 100) {
        throw new RangeError("El valor es mayor que 100");
    } else {
        console.log("El valor es válido");
    }
}

try {
    verificarValor2("a"); // Cambia este valor para probar diferentes excepciones
} catch (error) {
    if(error instanceof TypeError){
        console.log("Error de tipo: ", error.message)
    } else if(error instanceof RangeError){
        console.log("Error de rango: ", error.message)
    } else {
        console.log("Error: ", error.message)
    }
}
// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
let valores = ["123.45", "abc", "456.78", null, "789.01", undefined, "0.12"];

for (let i = 0; i < valores.length; i++) {
    try {
        let valor = parseFloat(valores[i]);
        if (isNaN(valor)) {
            throw new Error(`El valor en la posición ${i} no se puede convertir a float: ${valores[i]}`);
        }
        console.log(`El valor en la posición ${i} convertido a float es: ${valor}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}
// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

class PropiedadNoEncontradaError extends Error {
    constructor(propiedad) {
        super(`La propiedad '${propiedad}' no se encontró en el objeto`);
        this.name = "PropiedadNoEncontradaError";
    }
}

function verificarPropiedad(obj, propiedad) {
    if (!obj.hasOwnProperty(propiedad)) {
        throw new PropiedadNoEncontradaError(propiedad);
    } else {
        console.log(`La propiedad '${propiedad}' existe en el objeto`);
    }
}

try {
    let obj = { nombre: "Juan", edad: 30 };
    verificarPropiedad(obj, "apellido"); // Cambia 'apellido' por 'nombre' para probar diferentes casos
} catch (error) {
    if (error instanceof PropiedadNoEncontradaError) {
        console.log("Error personalizado capturado: " + error.message);
    } else {
        console.log("Error: " + error.message);
    }
}
    */
// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function reintentarHasta10Veces() {
    let intentos = 0;
    for(let i=0; i<10; i++){
        try {
            let numero = Math.random();
            if (numero < 0.5) {
                throw new Error("El número es menor que 0.5");
            }
            console.log("Número válido: " + numero);
            break;
        } catch (error) {
            console.log("Error: " + error.message);
            intentos++;
        }
    }
    console.log("Intentos: " + intentos);
}
reintentarHasta10Veces()