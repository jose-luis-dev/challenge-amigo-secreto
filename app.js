// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// Se realiza la referencia a los elementos DOM

const inputAmigos = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const listaSorteo = document.getElementById('resultado');
const btnCaptura = document.getElementById('captura');
const btnSorteo = document.getElementById('sorteo');
const btnReiniciar = document.getElementById('reiniciar');


// Se agrega el Array de amigos
let amigos = [];

//Se realiza las funciones correspondientes

// 01. Agrega un evento al dar click en Añadir

btnCaptura.addEventListener('click', () => {
    const amigo = inputAmigos.value.trim();

    if (amigo === '') {
        alert('Por favor, inserte un nombre');
        return;
    }

    if (amigos.includes(amigo)) {
        alert('Este nombre ya está en la lista');
        return;
    }

    amigos.push(amigo);
    actualizarLista();
    limpiarDatos();
    btnReiniciar.removeAttribute('disabled');
});

//02. Funcion para actualizar la lista en HTML
function actualizarLista() {
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

//03. Funcion para al dar clic en sortear amigo realice de manera aleatoria
btnSorteo.addEventListener('click', () => {

    if (amigos.length > 0) {
        // Limpiar la lista de resultados previos
        listaSorteo.innerHTML = '';
        // Declaro las variables para realizar un amigo al azar
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceAleatorio];
        // Declaro la variable para crear un lista con el nombre del amigo sorteado
        const nuevoElemento = document.createElement('li');
        // Se indica el contenido de la lista
        nuevoElemento.textContent = `Amigo secreto es: ${amigoSorteado}`;

        // Agrega la propiedad <li> a la lista de resultados
        listaSorteo.appendChild(nuevoElemento);
        // Limpiar la lista de amigos después del sortear
        listaAmigos.innerHTML = '';
        // Vaciar el array de amigos
        amigos = [];
    } else {
        alert('No hay amigos en la lista para sortear');
        return;
    }
});


// 04. Funcion para validar cuando se escribe un numero o carateres especiales

inputAmigos.addEventListener('input', (event) => {
    let valor = event.target.value;

    // Expresión regular: Solo permite letras y espacios
    let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/;
    if (!regex.test(valor)) {
        input.value = valor.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");
    }

    // Convertir a formato de nombre (Primera letra de cada palabra en mayúscula)
    event.target.value = event.target.value.toLowerCase().replace(/\b\w/g, (letra) => letra.toUpperCase());
}
);

// Funcion para limpiar los datos de input
function limpiarDatos() {
    inputAmigos.value = '';
}

// Boton para reiniciar el juego nuevamente

btnReiniciar.addEventListener('click', () => {
    listaSorteo.innerHTML = '';
    listaAmigos.innerHTML = '';
    amigos = [];
    limpiarDatos();


    btnReiniciar.setAttribute('disabled', 'true');
});

