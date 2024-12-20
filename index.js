/**
 * Project: Portfolio_MacOS
 * Author: anluisgl
 * License: MIT
 * Repository: https://github.com/anluisgl
 */

let links = document.querySelectorAll(".link")
let link2 = document.querySelector(".link2")
let folder2 = document.querySelector(".folder2")
let file1 = document.querySelector(".file1")
let top1 = document.querySelector(".top1")
let menu1 = document.querySelector(".menu1")
let finderIcon = document.querySelector(".imgdock.finder")

function clickButton(e) {
  fetch(e.target.dataset.page)
    .then(data => data.text())
    .then(text => {
      folder2.innerHTML = text
      folder2.style.opacity = 1
    })
}

links.forEach(link => {
  link.addEventListener("click", clickButton)
})

function closeWindowOnClick() {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("light") && e.target.classList.contains("red")) {
      file1.style.opacity = 0
      top1.style.opacity = 0
      menu1.style.opacity = 0
    }
    if (e.target.classList.contains("light2") && e.target.classList.contains("red")) {
      folder2.style.opacity = 0
      folder2.innerHTML = ""
    }
  })
}

function restoreOnClick() {
  finderIcon.addEventListener("click", () => {
    file1.style.opacity = 1
    top1.style.opacity = 1
    menu1.style.opacity = 1
  })
}

function modifyFile1OnLink2Click() {
  link2.addEventListener("click", () => {
    fetch(link2.dataset.page)
      .then(data => data.text())
      .then(text => {
        file1.innerHTML = text
      })
  })
}

closeWindowOnClick()
restoreOnClick()
modifyFile1OnLink2Click()







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