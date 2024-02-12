
function CalcularPorcentaje() {

    const NumHombres = parseInt(document.getElementById('NumHombres').value);
    const NumMujeres = parseInt(document.getElementById('NumMujeres').value);
    const TotalEstudiantes = NumHombres + NumMujeres;

    const porcentajeHombres = (NumHombres / TotalEstudiantes) * 100;
    const porcentajeMujeres = (NumMujeres / TotalEstudiantes) * 100;

    document.getElementById('result').innerHTML = `Porcentaje de Hombres: ${porcentajeHombres.toFixed(2)}%<br>Porcentaje de Mujeres: ${porcentajeMujeres.toFixed(2)}%`;
}
