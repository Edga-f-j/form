
function determinarMayorMenor() {
    // Obtenemos los números ingresados por el usuario
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = parseFloat(document.getElementById('num3').value);

    // Variables para almacenar el mayor y el menor
    let mayor, menor;

    // Condicionales para determinar el mayor y el menor
    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
    } else {
        mayor = num3;
    }

    

    if (num1 <= num2 && num1 <= num3) {
        menor = num1;
    } else if (num2 <= num1 && num2 <= num3) {
        menor = num2;
    } else {
        menor = num3;
    }

    // Mostramos el resultado en la página
    document.getElementById('resultado').innerHTML = `El número mayor es: ${mayor} <br> El número menor es: ${menor}`;

}
