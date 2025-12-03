//AITANA GÓNZÁLEZ RODRÍGUEZ
//Script que codifica un texto dando la vuelta a todas las palabras que tenga este.

//Cuando la página carga
window.onload = principal;

//FUNCIONES
//Función que separa la entrada por el separador indicado, devuelve un array.
function separaPalabras(entrada, separador) {
    return entrada.split(separador); //Separo con el separador del parametro con la función split()
}

//Función que devuelve la cadena con todas las palabras invertidas
function giraPalabras(entrada) { //Transforma el texto
    const palabras = separaPalabras(entrada, " "); //Separo las palabras cuando haya espacio generando un array palabras
    //Creo un array vacio para las palabrasInvertidas
    let palabrasInvertidas = []; //Uso let porque se va a ir modificando
    //Recorro el array de palabras
    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i]; //Palabra actual
        let letras = palabra.split("");//Convierto la palabra en array de letras
        let letrasAlReves = letras.reverse(); //Invierto el orden de las letras
        let palabraInvertida = letrasAlReves.join(""); //Vuelvo a unirlas en una cadena
        palabrasInvertidas.push(palabraInvertida); //Añado la palabra al nuevo array
    }
    //Devuelvo todas las palabras
    return palabrasInvertidas.join(" "); //Uso el join para devolver las palabras invertidas con los espacios como separador

}

//Función que comprueba si la cadena es un palíndromo (independientemente de si esta en minúsculas o mayúsculas)
function esPalindromo(entrada) { //Analiza el texto
    //Convierto el texto a minúsculas y elimino cualquier carácter que no sea letra o número, y permito las tildes también
    const cadena = entrada.toLowerCase().replace(/[^a-záéíóúüñ0-9]/g, "");
    /*  USO DEL PATRÓN en el replace()
        ^ dentro de los corchetes [] significa “todo lo que no sea”.
        a-z cubre todas las letras minúsculas del alfabeto inglés.
        0-9 cubre los números.
        g es el modificador “global” → aplica la sustitución en toda la cadena.*/
    //Creo la cadena invertida
    const cadenaAlreves = cadena.split("").reverse().join("");
    //Devuelvo true si la cadena no está vacía y es igual a su versión invertida
    return (cadena.length > 0 && cadena === cadenaAlreves);
}

//Función principal que se ejecuta al cargar la página
function principal() {
    //Constantes de los elementos del html
    const boton = document.getElementById("botonProcesar"); //Al pulsar el botón aparece el texto con las palabras del revés
    const input = document.getElementById("texto"); //Texto recogido a través de un input
    const salida = document.getElementById("salida"); //Aquí se mostrará el texto en la division con el id "salida"

    //Asigno la función al evento "click" del botón
    boton.onclick = function () {
        try {
            //Adquiero el texto introducido y elimino espacios sobrantes
            const texto = input.value.trim();

            //Comprobaciones de datos
            if (texto === "") { //Por si el campo está vacío
                salida.innerHTML = "<div>ERROR: No se ha introducido ningún texto</div>";
                return; //detengo la ejecución
            }
            if (!isNaN(texto)) { //Por si el texto solo contiene números
                salida.innerHTML = "<div>ERROR: El texto no puede ser solo números</div>";
                return;
            }
            if (texto.length < 2) { //Por si el texto es demasiado corto (para mi, tiene que tener más de dos para poder al menos hacer el inverso)
                salida.innerHTML = "<div>ERROR: Introduce al menos dos caracteres</div>";
                return;
            }

            //Uso las funciones con el texto
            const textoInvertido = giraPalabras(texto);
            const resultadoPalindromo = esPalindromo(texto) ? "Sí, el texto es palíndromo" : "No, el texto no es palíndromo";

            //Muestro por pantalla los resultados
            salida.innerHTML = `<br>
            <div> Texto introducido: ${texto}<br>
            Texto invertido: ${textoInvertido}<br>
            ¿Texto palíndromo?: ${resultadoPalindromo} 
            </div>
            `;
        } catch (error) { //Si ocurre algún otro error
            salida.innerHTML = `<div>ERROR: ${error.message}</div>`
        }
    }
}
