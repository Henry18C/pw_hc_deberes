function sumar(idNum1, idNum2) {
    console.log
    var num1 = parseInt(document.getElementById(idNum1).value) ;
    var num2 = parseInt(document.getElementById(idNum2).value);
    var respuesta= num1 +num2;
    console.log(respuesta)
    document.getElementById("idResultado").innerText=respuesta;

}

function restar(idNum1, idNum2) {
    var num1 = parseInt(document.getElementById(idNum1).value) ;
    var num2 = parseInt(document.getElementById(idNum2).value);
    var respuesta= num1 -num2;
    console.log(respuesta)
    document.getElementById("idResultado").innerText=respuesta;

}

function multiplicar(idNum1, idNum2) {
    var num1 = parseInt(document.getElementById(idNum1).value) ;
    var num2 = parseInt(document.getElementById(idNum2).value);
    var respuesta= num1 *num2;
    console.log(respuesta)
    document.getElementById("idResultado").innerText=respuesta;

}

function dividir(idNum1, idNum2) {
    var num1 = parseInt(document.getElementById(idNum1).value) ;
    var num2 = parseInt(document.getElementById(idNum2).value);
    var respuesta= num1 /num2;
    console.log(respuesta)
    document.getElementById("idResultado").innerText=respuesta;

}











