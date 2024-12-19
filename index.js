/**
 * Project: Portfolio_MacOS
 * Author: anluisgl
 * License: MIT
 * Repository: https://github.com/anluisgl
 */

let links = document.querySelectorAll(".link")
let folder2 = document.querySelector(".folder2")

function clickButton(e){

  fetch(e.target.dataset.page)
    .then(data => data.text())
    .then(text => {
      
      folder2.innerHTML = text;
      folder2.style.opacity = 1;

    })
}

links.forEach(link => {
  link.addEventListener("click", clickButton)
})








/* https://configuroweb.com/construye-tu-propio-reloj-digital-en-javascript-guia-paso-a-paso/#google_vignette */
function actualizarHora() {
  const reloj = document.getElementById('reloj');
  const ahora = new Date();
  const horas = agregarCero(ahora.getHours());
  const minutos = agregarCero(ahora.getMinutes());
  const segundos = agregarCero(ahora.getSeconds());
  reloj.textContent = `${horas}:${minutos}:${segundos}`;
}

function agregarCero(numero) {
  return numero < 10 ? '0' + numero : numero;
}

setInterval(actualizarHora, 1000);
actualizarHora();