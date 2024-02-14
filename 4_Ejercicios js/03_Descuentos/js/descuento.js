
function calcularDescuento() {
   
    const totalPurchase = parseFloat(document.getElementById('totalPurchase').value);

   
    const descuento = totalPurchase * 0.15;

    
    const totalFinal = totalPurchase - descuento;

    
    document.getElementById('result').innerHTML = `Descuento: $${descuento.toFixed(2)}<br>Total a Pagar: $${totalFinal.toFixed(2)}`;
}
