/**
 * Project: Portfolio_MacOS
 * Author: anluisgl
 * License: MIT
 * Repository: https://github.com/anluisgl
 */

const links = document.querySelectorAll(".link")
const folder2 = document.querySelector(".folder2")
const file1 = document.querySelector(".file1")
const top1 = document.querySelector(".top1")
const menu1 = document.querySelector(".menu1")
const finderIcon = document.querySelector(".imgdock.finder")

function clickButton(e) {
  const page = e.currentTarget.dataset.page
  if (!page) return

  fetch(page)
    .then(response => response.text())
    .then(text => {
      folder2.innerHTML = text
      folder2.style.opacity = 1
    })
}

links.forEach(link => link.addEventListener("click", clickButton))

document.addEventListener("click", e => {
  if (e.target.classList.contains("light") && e.target.classList.contains("red")) {
    file1.style.opacity = 0
    top1.style.opacity = 0
    menu1.style.opacity = 0
  } else if (e.target.classList.contains("light2") && e.target.classList.contains("red")) {
    folder2.style.opacity = 0
    folder2.innerHTML = ""
  } else if (e.target.classList.contains("light3") && e.target.classList.contains("red")) {
    folder2.style.opacity = 0
    folder2.innerHTML = ""
  }
})

finderIcon.addEventListener("click", () => {
  file1.style.opacity = 1
  top1.style.opacity = 1
  menu1.style.opacity = 1
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


