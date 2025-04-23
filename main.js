const fecha = document.getElementById("fecha");

const input = document.getElementById("input");

console.log(input);

const mas = document.getElementById("icono-input");

const lista = document.getElementById("lista-uno");


const hecho = "fa-check-circle";  
 
const pendiente = "fa-circle";

const tachado = "tachado"; 

let id = 0;

const fechaActual = new Date();
fecha.innerHTML = fechaActual.toLocaleDateString("es-AR", {
    weekday: "long",
    month: "long",
    day: "numeric",
});




const agregartarea = (tarea, check, eliminado, id) => {
    if(eliminado) {return}
    const estado = check ? hecho : pendiente;
    const tachar = check ? tachado : "";
    const elemento = `<li class="estas-son">
                <i class="far ${estado} check" id="check${id}" data="check"></i>
                <p class="tarea ${tachar}">${tarea}</p>
                <i class="fas fa-trash de borrar" id="borrar${id}" data="borrar"></i>
            </li>`
    
    lista.insertAdjacentHTML("beforeend",elemento);
};


const tareaRealizada = (element) => {
element.classList.toggle(hecho);
element.classList.toggle(pendiente);

element.parentNode.querySelector(".tarea").classList.toggle(tachado); 
};



const tareaEliminada = (element) => {
    element.parentNode.parentNode.removeChild(element.parentNode);
};


const cambiarEstilos = () => {
    const link = document.getElementById("estilo");
    link.href = link.href.includes("style.css") ? "style2.css" : "style.css";
};



//Llamar funcion
mas.addEventListener(`click`,() => {
const tarea = input.value 


if(tarea) {
    agregartarea(tarea, false, false, id);
    id++
}

input.value = ""; 

}

)


document.addEventListener("keyup", (e) => {
    if(e.key == 'Enter') {
        const tarea = input.value 


        if(tarea) {
            agregartarea(tarea, false, false, id);
        }
        
        input.value = "";    
    }
}
);


lista.addEventListener("click", function (event) {
  const element = event.target;
  const elementData = element.attributes.data.value;

  if (elementData == "check") {
    tareaRealizada (element)
}

else if (elementData == "borrar") {
    tareaEliminada(element)
}

}
)



