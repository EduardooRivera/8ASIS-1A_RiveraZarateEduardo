document.addEventListener('DOMContentLoaded', function () {
    var boton = document.getElementById("boton");
    boton.onclick = function () {
        validacion_capital();
    }

    var porcentajeSelect = document.getElementById("porcentaje");
    for (let i = 1; i <= 100; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.textContent = i + "%";
        porcentajeSelect.appendChild(option);
    }
});

function validacion_capital() {
    var capital = document.getElementById("capital").value;
    var mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = "";

    var cantidad = parseInt(document.getElementById("cantidad").value); 
    var porcentajeInversion = parseFloat(document.getElementById("porcentaje").value); 
    var periodo = document.getElementById("periodo").value;

    if (capital === "") {
        mensaje.innerHTML = "Campo vacío";
    } else {
        let verificar = isNaN(capital);
        if (verificar === true) {
            mensaje.innerHTML = "Campo no válido";
        } else {
            let capital2 = Number.parseFloat(capital);
            if (!Number.isFinite(capital2)) {
                mensaje.innerHTML = "El valor introducido no es un número decimal.";
                return;
            }
            capital2 = capital2.toFixed(2);
            if (capital2 <= 0) {
                mensaje.innerHTML = "El número debe ser mayor a 0.";
            } else if (capital2 > 10000) {
                mensaje.innerHTML = "El número debe ser menor o igual a 10000.";
            } else {
                if (isNaN(porcentajeInversion) || porcentajeInversion <= 0 || porcentajeInversion > 100 || isNaN(cantidad) || cantidad <= 0 || cantidad > (periodo === "dias" ? 1095 : 36)) {
                    alert("Por favor, complete todos los campos correctamente. La cantidad de " + (periodo === "dias" ? "días" : "meses") + " debe estar entre 1 y " + (periodo === "dias" ? 1095 : 36) + ".");
                    return;
                }

                var cantidadFinal = parseFloat(capital2);
                var tablaResultados = document.getElementById("tablaResultados");
                var tableHTML = "<h2>Resultado de la inversión:</h2>";
                tableHTML += "<table><tr><th>" + (periodo === "dias" ? "Día" : "Mes") + "</th><th>Cantidad</th></tr>";

                var porcentajeAnual = (Math.pow(1 + (porcentajeInversion / 100), periodo === "dias" ? 1/365 : 1/12) - 1) * 100;

                for (var unidad = 1; unidad <= cantidad; unidad++) {
                    cantidadFinal *= (1 + (porcentajeAnual / 100));
                    
                    tableHTML += "<tr><td>" + unidad + "</td><td>" + cantidadFinal.toFixed(2) + "</td></tr>";
                }
                
                tableHTML += "</table>";
                tablaResultados.innerHTML = tableHTML;
            }
        }
    }
}
