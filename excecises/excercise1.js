/*
Ejercicio 1: Saludo personalizado
Escribe una función llamada saludar(nombre) 
que reciba un nombre como argumento y retorne un mensaje que diga "Hola, [nombre]". 
Si el nombre es vacío o no se proporciona, el mensaje debe ser "Hola, desconocido".
*/
function saludar(nombre = "desconocido") {
    return `Hola, ${nombre || "desconocido"}`;
}


console.log("-----------------------------------")
console.log("EJERCICIO 1")
console.log("-----------------------------------")
console.log(saludar("Eli"));  // "Hola, Eli"
console.log(saludar());        // "Hola, desconocido"

