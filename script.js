var btn = document.getElementById("btn");
var contador = 0;

btn.addEventListener("click", cambio, true);

function cambio() {
  contador++;
  console.log("Veces que la pagina fue visitada: " + contador);
}
