
function calcularComisiones() {

    const baseSalary = parseFloat(document.getElementById('baseSalary').value);
    const sales1 = parseFloat(document.getElementById('sales1').value);
    const sales2 = parseFloat(document.getElementById('sales2').value);
    const sales3 = parseFloat(document.getElementById('sales3').value);

    const comisionTotal = (sales1 + sales2 + sales3) * 0.1;

    const total = baseSalary + comisionTotal;


    document.getElementById('result').innerHTML = `Comisión Total: $${comisionTotal.toFixed(2)}<br>Total a Recibir: $${total.toFixed(2)}`;
}
