const input = document.getElementById("input");

console.log(input);

const mas = document.getElementById("icono-input");

const lista = document.getElementById("lista-uno");

const agregartarea = (tarea) => {
    const elemento = `<li class="estas-son" id="estas-son">
                <i class="fas fa-circle co check" id="check" data-="check"></i>
                <p class="tarea tachado" id="tarea">${tarea}</p>
                <i class="fas fa-trash de borrar" id="borrar" data-="borrar"></i>
            </li>`
    
    lista.insertAdjacentHTML("beforeend",elemento);
};


//Llamar funcion
mas.addEventListener(`click`,() => {
const tarea = input.value 


if(tarea) {
    agregartarea(tarea)
}

input.value = ""; 

}

)