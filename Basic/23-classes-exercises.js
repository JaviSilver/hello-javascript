/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    //Añade un método a la clase que utilice las propiedades
    showProperties(){
        console.log(this.name)
        console.log(this.age)
    }
    
}
let persona1= new Person("Brais", 37)
console.log(persona1.name)
console.log(persona1.age)
// 2. Añade un método a la clase que utilice las propiedades
class Person2{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    showProperties(){
        console.log(this.name)
        console.log(this.age)
    }
}
let persona2 = new Person2("Brais", 37)

// 3. Muestra los valores de las propiedades e invoca a la función
persona2.showProperties()
// 4. Añade un método estático a la primera clase
class Person3 {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    //Añade un método a la clase que utilice las propiedades
    showProperties(){
        console.log(this.name)
        console.log(this.age)
    }
    static showStatic(){
        console.log("Soy un método estático")
    }
    
}

// 5. Haz uso del método estático
Person3.showStatic()
// 6. Crea una clase que haga uso de herencia
class PersonaGenerica{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    showProperties(){
        console.log(this.name)
        console.log(this.age)
    }
}

class Javier extends PersonaGenerica{
    constructor(name, age, alias){
        super(name, age)
        this.alias = alias
    }
    showProperties(){
        super.showProperties()
        console.log(this.alias)
    }
}
let javier = new Javier("Javier", 30, "Javi")
javier.showProperties()

// 7. Crea una clase que haga uso de getters y setters
class Person4 {
    #name
    #age
    constructor(name, age) {
        this.#name = name
        this.#age = age
    }
    get name() {
        return this.#name
    }
    set name(name) {
        this.#name = name
    }
    get age() {
        return this.#age
    }
    set age(age) {
        this.#age = age
    }
}

let person7 = new Person4("Brais", 37)
console.log(person7.name)
person7.name = "Javier"
console.log(person7.name)
// 8. Modifica la clase anterior con getters y setters para que use propiedades privadas
class Person5 {
    #name
    #age
    constructor(name, age) {
        this.#name = name
        this.#age = age
    }
    get name() {
        return this.#name
    }
    set name(name) {
        this.#name = name
    }
    get age() {
        return this.#age
    }
    set age(age) {
        this.#age = age
    }
}
// 9. Utiliza los get y set y muestra sus valores
let person8 = new Person5("Brais", 37)
console.log(person8.name)
person8.name = "Javier"
console.log(person8.name)
// 10. Sobrescribe un método de una clase que utilice herencia 
class AnimalGenerico{
    constructor(name){
        this.name = name
    }
    sound(){
        console.log("Soy un animal")
    }
}

class Perro{
    constructor(name){
        this.name = name
    }
    sound(){
        console.log("Guau")
    }
}

let animal = new AnimalGenerico("Animal")
let perro = new Perro("Perro")
animal.sound()
perro.sound()