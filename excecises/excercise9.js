/*
Ejercicio 9: Conversor de temperaturas
Crea una función llamada convertirTemperatura(temperatura, escala) 
que reciba una temperatura y una escala ("C" para Celsius o "F" para Fahrenheit), 
y convierta la temperatura a la otra escala. Retorna la temperatura convertida. 
Si la escala es "C", convierte de Celsius a Fahrenheit. Si la escala es "F", convierte de Fahrenheit a Celsius.
*/
function convertirTemperatura(temperatura, escala) {
    // Validamos que la escala sea 'C' o 'F'
    if (escala !== "C" && escala !== "F") {
        return "Escala no reconocida. Usa 'C' para Celsius o 'F' para Fahrenheit.";
    }
    
    // Convertimos la temperatura según la escala
    if (escala === "C") {
        // Convertir de Celsius a Fahrenheit
        let fahrenheit = (temperatura * 9/5) + 32;
        return `${temperatura}°C es equivalente a ${fahrenheit.toFixed(2)}°F.`;
    } else if (escala === "F") {
        // Convertir de Fahrenheit a Celsius
        let celsius = (temperatura - 32) * 5/9;
        return `${temperatura}°F es equivalente a ${celsius.toFixed(2)}°C.`;
    }
}


console.log("-----------------------------------")
console.log("EJERCICIO 9")
console.log("-----------------------------------")
console.log(convertirTemperatura(0, "C"));  // 32
console.log(convertirTemperatura(32, "F")); // 0