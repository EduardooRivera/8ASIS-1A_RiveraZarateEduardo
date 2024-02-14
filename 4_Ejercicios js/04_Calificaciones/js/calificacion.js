
function calcularCalificacionFinal() {
    const parcial_1 = parseFloat(document.getElementById('parcial_1').value);
    const parcial_2 = parseFloat(document.getElementById('parcial_2').value);
    const parcial_3 = parseFloat(document.getElementById('parcial_3').value);
    const ExamenFinal = parseFloat(document.getElementById('ExamenFinal').value);
    const ProyectoFinal = parseFloat(document.getElementById('ProyectoFinal').value);

    const PromedioP = (parcial_1 + parcial_2 + parcial_3) / 3;
    const Calificacion_Final = (PromedioP * 0.55) + (ExamenFinal * 0.3) + (ProyectoFinal * 0.15);
    
    document.getElementById('Resultado').innerHTML = `Calificación Final: ${Calificacion_Final.toFixed(2)}`;
}
