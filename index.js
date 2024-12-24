/**
 * Project: Portfolio_MacOS
 * Author: anluisgl
 * License: MIT
 * Repository: https://github.com/anluisgl/Portfolio_MacOS
 */



/* estaba usando esto para poder quitar el "a" de los iconos del dock por que
no se centraban... tambien lo uso para poder experimentar otras opciones aparte */
document.querySelectorAll('.thefolder').forEach(folder => {
  folder.addEventListener('click', function () {
      const url = folder.getAttribute('data-url')
      if (url) {
          window.open(url, '_blank')
      }
  })
})

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

document.querySelector(".imgdock.opacity1").addEventListener("click", function() {
  document.querySelector(".folder3").style.opacity = "1"
})

document.querySelector(".light3.red").addEventListener("click", function() {
  document.querySelector(".folder3").style.opacity = "0"
})


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


/* el reloj lo he echo yo pero he usado "https://desarrolloweb.com/articulos/549.php" y 
la explicacion que dio en clase el profesor para ayudarme a crearlo */
setInterval(() => {
  const reloj = document.getElementById("reloj")
  const ahora = new Date()
  const dias = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const meses = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const dia = dias[ahora.getDay()]
  const fecha = ahora.getDate()
  const mes = meses[ahora.getMonth()]
  const horas = ahora.getHours().toString().padStart(2, "0")
  const minutos = ahora.getMinutes().toString().padStart(2, "0")
  reloj.textContent = `${dia} ${fecha} ${mes} ${horas}:${minutos}`
}, 1000)