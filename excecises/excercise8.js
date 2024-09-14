/*
Escribe una función llamada calcularIMC(peso, altura) que reciba el peso (en kg) y la altura (en metros) de una persona, 
y retorne su índice de masa corporal (IMC), con base en la fórmula:
IMC = peso / altura^2.

Además, debe clasificar el IMC:

"Bajo peso" si es menor de 18.5,
"Normal" si está entre 18.5 y 24.9,
"Sobrepeso" si está entre 25 y 29.9,
"Obesidad" si es 30 o más.
*/
function calcularIMC(peso, altura) {
    // Validamos que el peso y la altura sean números positivos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        return "Por favor ingresa valores válidos para peso y altura.";
    }

    // Calculamos el IMC
    let imc = peso / (altura * altura);

    // Clasificamos el resultado del IMC
    let clasificacion;
    if (imc < 18.5) {
        clasificacion = "Bajo peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        clasificacion = "Normal";
    } else if (imc >= 25 && imc <= 29.9) {
        clasificacion = "Sobrepeso";
    } else {
        clasificacion = "Obesidad";
    }

    // Retornamos el IMC calculado y la clasificación
    return `Tu IMC es ${imc.toFixed(2)}. Clasificación: ${clasificacion}.`;
}

console.log("-----------------------------------")
console.log("EJERCICIO 8")
console.log("-----------------------------------")
console.log(calcularIMC(60, 1.7)); // "Normal"
console.log(calcularIMC(80, 1.7)); // "Sobrepeso"