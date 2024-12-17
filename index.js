/**
 * Project: Portfolio_MacOS
 * Author: anluisgl
 * License: MIT
 * Repository: https://github.com/anluisgl
 */

let links = document.querySelectorAll(".link")
let folder2 = document.querySelector(".folder2")
console.log(links)
function clickButton(e){
  console.log(e.target.dataset)

  fetch(e.target.dataset.page)
    .then(data => data.text())
    .then(text => folder2.innerHTML = text)
}

links.forEach(link => {
  link.addEventListener("click", clickButton)
})