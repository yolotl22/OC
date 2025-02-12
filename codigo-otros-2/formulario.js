const formulario = document.querySelector("#form"); //Se cambiaron todos los var pot const y añadieron ; en todo el codigo

formulario.onsubmit = function(e) {

  e.preventDefault();// Se agregó el Default
  
  const n = formulario.elements[0];
  const e = formulario.elements[1];
  const na = formulario.elements[2];

  const nombre = n.value;
  const edad = e.value;

  const i = na.selectedIndex;
  const nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad);
  }
};

function agregarInvitado(nombre, edad, nacionalidad) { //SSe cambió if por switch 

  switch (nacinalidad) {
    case "ar": 
      nacionalidad = "Argentina";
      break;

    case "mx":
      nacionalidad = "Mexicana";
      break;
      
    case "vnzl";
     nacionalidad = " Venezolana";
     break;
     
    case "per":
      nacionalidad ="Peruana";
      break;
    
      default:
        nacionalidad ="Desconocida";
        break;

  }

const lista = document.getElementById("lista-de-invitados")

const elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista")//added no existe
lista.appendChild(elementoLista);

function crearElemento(descripcion, valor) {
  const spanDescripcion = document.createElement("span");
  const inputValor = document.createElement("input");
  const espacio = document.createElement("br");

  spanDescripcion.textContent = descripcion + ": ";
  inputValor.value = valor;
  inputValor.disabled = true; // Hacer el input solo lectura

  elementoLista.appendChild(spanDescripcion);
  elementoLista.appendChild(inputValor);
  elementoLista.appendChild(espacio);
}

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);

const botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
const corteLinea = document.createElement("br");

elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);

botonBorrar.onclick = function() {
  elementoLista.remove(); // Eliminar el elemento completo, no solo el botón
}
};