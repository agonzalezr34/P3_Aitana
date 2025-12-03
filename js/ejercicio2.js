//AITANA GÓNZÁLEZ RODRÍGUEZ
//Script para la lotería

//Cuando la página carga
window.onload = principal;

//FUNCIONES
//Función que genera un número aleatorio entero entre min y max DE LOTERÍA
function generaAleatorio(min, max) {
    //Math.random() devuelve un número entre 0 y 1, asi que lo ajusto al rango con * (max - min + 1))
    //He usado Math.floor para redondear hacia abajo y devuelva solo número y el +min es para desplazar el rango al valor mínimo que le doy
    return Math.floor(Math.random() * (max - min + 1)) + min;;
}

//Función que devuelve un array números aleatorios con ayuda de la función generaAleatorio()
function generaNAleatorios(cantidad, min, max) {
    const numeros = []; //Array donde voy a guardar los números generados
    //Voy añadiendo numeros aleatorios en el array según la cantidad pedida
    for (let i = 0; i < cantidad; i++) {
        numeros.push(generaAleatorio(min, max)); //Utilizo la función generaAleatorio()
    }
    return numeros;
}

//Función principal que se ejecuta al cargar la página´
function principal() {
    //Constantes de los elementos del html
    const boton = document.getElementById("botonGenerar");
    const input = document.getElementById("cantidad");
    const salida = document.getElementById("salida");

    //Asigno la función al evento "click" del botón
    boton.onclick = function () {
        try {
            //Adquiero la cantidad del input, elimino espacios sobrantes y convierto a numero entero
            const cantidad = parseInt(input.value.trim());

            //Comprobaciones de datos
            if (isNaN(cantidad)) { //Por si no es un número
                salida.innerHTML = "<div>ERROR: Introduce un número válido</div>";
                return;
            }
            if (cantidad <= 0) { //Por si el numero no es positivo
                salida.innerHTML = "<div>ERROR: Debe ser un número positivo</div>";
                return;
            }
            if (cantidad > 99999) { //Por si el máximo supera lo permitido
                salida.innerHTML = "<div>ERROR: Máximo permitido: 99999 </div>";
                return;
            }

            //Genero los numeros
            const numeros = generaNAleatorios(cantidad, 0, 99999); //AQUI 5 nueves PORQUE PILLAS UN DECIMO DE LOTERIA

            //Muestro los números generados que simula los números de la lotería
            salida.innerHTML = `<br><div>Se han generado ${cantidad} números aleatorios entre 0 y 99999:</div> 
                                <div>${numeros.join(", ")}</div>`; //Los uno con ,

            //Para buscar si coincide el número
            let contador = 0;
            let numeroCoincide = null;

            //Aqui pruebo cuantas veces un número de lotería puede ser ganador o no. Son intentos hasta encontrar una coincidencia o llegar al límite
            //Bucle para generar nuevos números hasta encontrar uno que coincida
            while (contador < 999999) { //6 nueves según pide el enunciado. 1 millon y menos 1 veces porque tiene que tener un fin el bucle ya que es un limite.
                const nuevoNumero = generaAleatorio(0, 99999);
                contador++;
                if (numeros.includes(nuevoNumero)) { //Si el nuevoNumero se incluye en el array de los numero generados
                    numeroCoincide = nuevoNumero; 
                    break; //Se rompe el bucle
                }
            }

            //Muestro por pantalla los resultados
            if (numeroCoincide !== null) {
                salida.innerHTML += `<br><div>¡¡¡COINCIDENCIA ENCONTRADA con el número ${numeroCoincide} !!!</div>
                                     <div>Números que se han generado hasta coincidir: ${contador}</div>`;
            } else {
                salida.innerHTML += `<br><div> No se ha encontrado una coincidencia después de generar 999999 números</div>`;//6 nueves
            }

        } catch (error) {
            salida.innerHTML = `<div>ERROR: ${error.message}</div>`;
        }
    }
}

