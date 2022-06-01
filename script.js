var valorTotal
const precioEstudiante = 200 * 0.2;
const precioTrainee = 200 * 0.5;
const precioJunior = 200 * 0.85;
function total() {
   var seleccion = document.getElementById("categoria");
   cantidad = parseInt(document.getElementById("quantity").value);
    switch (seleccion.value) {
        case '1':
        valorTicket = precioEstudiante;
        break;
        case '2':
        valorTicket = precioTrainee;
        break;
        case '3':
        valorTicket = precioJunior;
        break;
        case '4':
        valorTicket = 200;
        break;
    }
    valorTotal = cantidad * valorTicket
    document.getElementById("idtotal").innerHTML = "Total a pagar:$"+valorTotal;
    return(0);
    
}