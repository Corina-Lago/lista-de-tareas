const fecha = document.getElementById("fecha");

const input = document.getElementById("input");

console.log(input);

const mas = document.getElementById("icono-input");

const lista = document.getElementById("lista-uno");


const hecho = "fa-check-circle";  
 
const pendiente = "fa-circle";

const tachado = "tachado"; 

let id = 0;

let LIST = [];

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
                <i class="far ${estado} check" id="${id}" data="check"></i>
                <p class="tarea ${tachar}">${tarea}</p>
                <i class="fas fa-trash de borrar" id="${id}" data="borrar"></i>
            </li>`
    
    lista.insertAdjacentHTML("beforeend",elemento);
};


const tareaRealizada = (element) => {
element.classList.toggle(hecho);
element.classList.toggle(pendiente);

element.parentNode.querySelector(".tarea").classList.toggle(tachado); 

LIST[element.id].check = !LIST[element.id].check;
console.log(LIST[element.id]);
};



const tareaEliminada = (element) => {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].eliminado = true;
    console.log(LIST[element.id]);
};


const cambiarEstilos = () => {
    const link = document.getElementById("estilo");
    link.href = link.href.includes("style.css") ? "style2.css" : "style.css";
};



//Llamar funcion
mas.addEventListener(`click`,() => {
const tarea = input.value;
if (tarea.length>20){alert("la tarea no puede tener más de 20 caracteres");
    return
} 



if(tarea) {
    agregartarea(tarea, false, false, id);
    LIST.push({
    tarea:tarea,
    check:false,
    eliminado:false,
    id:id
    });
    localStorage.setItem("GUARDADO",JSON.stringify(LIST));
    id++
}

input.value = ""; 
console.log(LIST);

}

)


document.addEventListener("keyup", (e) => {
    if(e.key == 'Enter') {
        const tarea = input.value;
        if (tarea.length>20){alert("la tarea no puede tener más de 20 caracteres");
            return
        }  


        if(tarea) {
            agregartarea(tarea, false, false, id);
            LIST.push({
                tarea:tarea,
                check:false,
                eliminado:false,
                id:id
                });
                localStorage.setItem("GUARDADO",JSON.stringify(LIST));
                id++;
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
localStorage.setItem("GUARDADO",JSON.stringify(LIST));

}
)

let data = localStorage.getItem("GUARDADO");
if(data){
    LIST = JSON.parse(data);
    console.log(LIST);
    id = LIST.length;
    cargarLista(LIST);
} else {
    LIST = [];
    id = 0;
}

function cargarLista(array){
    array.forEach(function(item){
    agregartarea(item.tarea,item.check,item.eliminado,item.id)
    });
}
