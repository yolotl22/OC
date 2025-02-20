// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "taco-negro.jpg"}, //Se cambió la ruta
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "zapato-rojo.jpg"}
];

const listaProductos = document.querySelector("#lista-de-productos"); // Cambiado a querySelector
const inputFiltro = document.querySelector('.input'); // Cambiado a nombre más descriptivo

function mostrarProductos(productos) {
  listaProductos.innerHTML = ''; // Limpiar la lista antes de mostrar los productos

  productos.forEach(producto => {
    const divProducto = document.createElement("div");
    divProducto.classList.add("producto");

    const titulo = document.createElement("p");
    titulo.classList.add("titulo");
    titulo.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img);

    divProducto.appendChild(titulo);
    divProducto.appendChild(imagen);

    listaProductos.appendChild(divProducto);
  });
}

mostrarProductos(productos); // Mostrar todos los productos inicialmente

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  const texto = inputFiltro.value.toLowerCase(); // Convertir a minúsculas para hacer la búsqueda insensible a mayúsculas
  const productosFiltrados = filtrado(productos, texto);
  mostrarProductos(productosFiltrados);
};

const filtrado = (productos = [], texto) => {
  return productos.filter(item => 
    item.tipo.toLowerCase().includes(texto) || 
    item.color.toLowerCase().includes(texto)
  );
};