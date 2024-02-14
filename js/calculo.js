window.onload = function() {
    var selectMeses = document.getElementById("meses");
    var selectDias = document.getElementById("dias");

    var selectPeriodo = document.getElementById("periodo");
    selectPeriodo.addEventListener("change", function() {
        selectDias.value = selectPeriodo.value === "meses" ? 0 : selectDias.value;
        selectMeses.value = selectPeriodo.value === "dias" ? 0 : selectMeses.value;
    });

    selectDias.addEventListener("change", function() {
        selectMeses.value = selectDias.value !== "0" ? 0 : selectMeses.value;
    });

    selectMeses.addEventListener("change", function() {
        selectDias.value = selectMeses.value !== "0" ? 0 : selectDias.value;
    });
};
