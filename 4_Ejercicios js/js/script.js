document.addEventListener('DOMContentLoaded', function () {
   
    cargarProyecto('01_Intereses/Index.html');

    const enlacesProyectos = document.querySelectorAll('nav ul li a');
    enlacesProyectos.forEach(enlace => {
        enlace.addEventListener('click', function (event) {
            event.preventDefault(); 
            const rutaProyecto = this.getAttribute('href');
            cargarProyecto(rutaProyecto);
        });
    });
});

function cargarProyecto(rutaProyecto) {
    const proyectoIframe = document.getElementById('proyecto-iframe');
    
    proyectoIframe.src = `${rutaProyecto}?${Date.now()}`;
}
