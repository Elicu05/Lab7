/*
Ejercicio 10: Calculadora de años bisiestos
Escribe una función llamada esBisiesto(anio) 
que reciba un año como argumento y retorne "Es bisiesto" si el año es divisible entre 4 pero no entre 100, 
o si es divisible entre 400. En caso contrario, retorne "No es bisiesto".
*/
function esBisiesto(año) {
    if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
        return "Es bisiesto";
    } else {
        return "No es bisiesto";
    }
}

console.log("-----------------------------------")
console.log("EJERCICIO 10")
console.log("-----------------------------------")
console.log(esBisiesto(2020)); // "Es bisiesto"
console.log(esBisiesto(2100)); // "No es bisiesto"