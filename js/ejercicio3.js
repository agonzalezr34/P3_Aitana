//AITANA GÓNZÁLEZ RODRÍGUEZ
//Script que muestra la hora actual y el tiempo restante hasta el final de curso
//Se actualiza cada segundo, viendo los segundos contar

//Cuando la página carga
window.onload = actualizarRelojes;

//FUNCIONES
//Función que recibe una fecha y devuelve la hora formateada como HH:MM:SS
function formateaHora(fecha) {
    //Obtengo las horas, minutos y segundos en varibles que iran cambiando
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    //Añado un 0 delante por si son menores de 10 (para que se vean como 09:07:04 porque sino, se veria 9:7:4 
    if (horas < 10) horas = "0" + horas;
    if (minutos < 10) minutos = "0" + minutos;
    if (segundos < 10) segundos = "0" + segundos;

    //Devuelvo la cadena de la hora formateada
    return horas + ":" + minutos + ":" + segundos;
}

//Función que calcula el tiempo restante hasta las vacaciones y lo devuelve como texto
function tiempoVacaciones(fechaFin) {
    const presente = new Date(); //Fecha y hora actuales
    const diferencia = fechaFin - presente; //Diferencia en milisegundos

    //Por si ya ha pasado la fecha o es justo esa
    if (diferencia <= 0) {
        return "¡¡¡Ya terminó el curso!!!";
    }

    //Constantes para los cálculos
    const segundosTotales = Math.floor(diferencia / 1000); //Para pasar la diferencia de milisegundos a segundos
    const dias = Math.floor(segundosTotales / (60 * 60 * 24)); //Para pasarlo a dias
    const horas = Math.floor((segundosTotales % (60 * 60 * 24)) / (60 * 60)); //Para pasarlo a horas
    const minutos = Math.floor((segundosTotales % (60 * 60)) / 60); //Para pasarlo a minutos
    const segundos = segundosTotales % 60; //Para los segundos

    //Devuelvo el texto formateado
    return `${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos`;
}

//Función que actualiza el reloj y el contador cada segundo
function actualizarRelojes() {
    //Referencias a los elementos del HTML
    const Reloj = document.getElementById("divReloj");
    const Vacaciones = document.getElementById("divVacaciones");

    //Fecha del fin del curso
    const fechaFin = new Date("June 25, 2026 00:00:00"); //En este caso he puesto 25 de junio de 2026

    //Función para actualizar la información
    function actualizar() {
        const presente = new Date();
        Reloj.textContent = formateaHora(presente);
        Vacaciones.textContent = tiempoVacaciones(fechaFin);
    }

    //Actualizo la primera vez inmediatamente
    actualizar();

    //Actualizo con un intervalo: después cada segundo o 1000 ms
    setInterval(actualizar, 1000);
}