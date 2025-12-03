//AITANA GÓNZÁLEZ RODRÍGUEZ
//Script que muestra el tamaño actual de la ventana (ancho y alto) al pulsar un botón

//Cuando la página carga, asigno el evento del botón
window.onload = principal;

//FUNCIONES
//Función para obtener el tamaño de la ventana del navegador y mostrarlo en un div
function mostrarTamañoVentana() {
    //const salida=document.getElementById("salida"); //Añadida esta linea para mostrar los mensajes en la división del html
    try {
        //Obtengo el tamaño actual de la ventana del navegador
        const ancho = window.innerWidth; //Ancho en píxeles
        const alto = window.innerHeight; //Alto en píxeles

        //Muestro por pantalla el tamaño pillando el div de salida con el getElementbyid
        document.getElementById("salida").innerHTML = `
                <div>
                    <strong>Tamaño actual de la ventana:</strong><br>
                    Ancho: ${ancho}px<br>
                    Alto: ${alto}px
                </div>
            `;
    } catch (error) {
        //En caso de cualquier error inesperado
        document.getElementById("salida").innerHTML = `<div>ERROR: No se ha podido obtener el tamaño de la ventana.</div>`;
    }
}
//Función para asignar los eventos a los elementos del html y controla la ejecución del programa y llamar a la función mostrarTamañoVentana();
function principal() {
    //Referencias a los elementos del HTML
    const boton = document.getElementById("botonTamaño");
    //Elimine el if porque lo considero redudante

    //Asigno la función al evento "click" del botón. Ahora sólo cuando haga click en el botón, se ejecutará la función mostrarTamaño
    boton.onclick = function () {
        mostrarTamañoVentana();
    }
}
