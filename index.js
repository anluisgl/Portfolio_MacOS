/**
 * Project: Portfolio_MacOS
 * Author: anluisgl
 * License: MIT
 * Repository: https://github.com/anluisgl
 */

document.addEventListener("DOMContentLoaded", () => {

  // About Me
  const aboutMeImg = document.querySelector('.imgfolder[src="img/inconosmac1.webp"]')
  aboutMeImg.addEventListener('click', () => {
    updateFolderContent(`
      <div class="aboutmejs">
        <div class="traffic-lights2">
          <span class="light2 red"></span>
          <span class="light2 yellow"></span>
          <span class="light2 green" id="cambiarTamano"></span>
        </div>
        <div class="divimgaboutmejs">
          <img class="imgaboutme" src="img/face.webp" alt="">
        </div>
        <h1 class="h1aboutmejs">Antonio Luis García Laredo</h1>
        <h1 class="h1aboutmejs2">- Frontend Development -</h1>
        <p class="pboutmejs">
            Frontend developer specializing in creating functional and engaging web experiences, with a strong focus on crafting interactive and visually appealing user interfaces.
        </p>
        <p class="pboutmejs">
            Committed to continuous learning and innovation to deliver effective solutions for diverse projects, ensuring mastery of every acquired skill.
        </p>
        <p class="pboutmejs">
            Focused on blending technical precision with creativity to transform ideas into impactful digital realities.
        </p>


      </div>
    `)

    const folder2 = document.getElementById("folder2")
    folder2.style.display = "flex"
    requestAnimationFrame(() => {
      folder2.classList.add("active")
    });


    const lightGreenSpan2 = document.querySelector('.light2.green')
    lightGreenSpan2.addEventListener('click', () => {
      folder2.classList.toggle("expandido")
    })

    const lightRedSpan2 = document.querySelector('.light2.red')
    lightRedSpan2.addEventListener('click', () => {
      folder2.classList.remove("active")
      setTimeout(() => {
        folder2.style.display = "none"
      }, 300)
    })
  })

  // Knowledge
  const knowledgeImg = document.querySelector('.imgfolder[src="img/folderknow.webp"]')
  knowledgeImg.addEventListener('click', () => {
    updateFolderContent(`
      <div class="knowledgejs">
        <div class="traffic-lights2">
          <span class="light2 red"></span>
          <span class="light2 yellow"></span>
          <span class="light2 green" id="cambiarTamano"></span>
        </div>
      </div>
    `)

    const folder2 = document.getElementById("folder2")
    folder2.style.display = "flex"
    requestAnimationFrame(() => {
      folder2.classList.add("active")
    })

    const lightGreenSpan2 = document.querySelector('.light2.green')
    lightGreenSpan2.addEventListener('click', () => {
      folder2.classList.toggle("expandido")
    })

    const lightRedSpan2 = document.querySelector('.light2.red')
    lightRedSpan2.addEventListener('click', () => {
      folder2.classList.remove("active")
      setTimeout(() => {
        folder2.style.display = "none"
      }, 300)
    })
  })

  // Projects
  const ProjectImg = document.querySelector('.imgfolder[src="img/folderwork.webp"]')
  ProjectImg.addEventListener('click', () => {
    updateFolderContent(`
      <div class="proyectsjs">
        <div class="traffic-lights2">
          <span class="light2 red"></span>
          <span class="light2 yellow"></span>
          <span class="light2 green" id="cambiarTamano"></span>
        </div>
      </div>
    `)

    const folder2 = document.getElementById("folder2")
    folder2.style.display = "flex"
    requestAnimationFrame(() => {
      folder2.classList.add("active")
    })

    const lightGreenSpan2 = document.querySelector('.light2.green')
    lightGreenSpan2.addEventListener('click', () => {
      folder2.classList.toggle("expandido")
    })

    const lightRedSpan2 = document.querySelector('.light2.red')
    lightRedSpan2.addEventListener('click', () => {
      folder2.classList.remove("active")
      setTimeout(() => {
        folder2.style.display = "none"
      }, 300)
    })
  })

  function updateFolderContent(content) {
    const folder2 = document.getElementById("folder2")
    folder2.innerHTML = content;
  }
})
