
// Solicitar al usuario que ingrese un número

const input = prompt("Ingrese un número:");
//con esta linea nosotros podemos comprobar que la entrada del dato esta com string
console.log(typeof(input));
//convertimos la entrada del dato en numerico
const numero = parseFloat(input);
if (isNaN(numero)) {
    console.error("Error: La entrada no es un número válido.");
} else {
    console.log("El número ingresado es:", numero);
}



