/**
 * Project: Portfolio_MacOS_Ui
 * Author: anluisgl
 * License: MIT
 * Repository: https://github.com/anluisgl
 */

document.addEventListener('DOMContentLoaded', () => {
  const videoContainer = document.getElementById('video-container')
  const introVideo = document.getElementById('intro-video')
  const body = document.body

  introVideo.muted = true;

  introVideo.play().catch((error) => {
      console.log('Reproducción automática bloqueada:', error)
  })

  introVideo.addEventListener('ended', () => {
      videoContainer.style.opacity = '0'

      setTimeout(() => {
          videoContainer.style.display = 'none'
          body.classList.remove('hidden')
          body.classList.add('visible')
      }, 1500)
  })
})




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
        <p class="pboutmejs">I’m a frontend developer constantly learning and passionate about creating engaging and functional web experiences. I also specialize in building and managing ecommerce platforms, mainly on Shopify, with additional experience in WordPress.

          My creative mindset and enthusiasm for learning drive me to give 100% when something sparks my interest. I firmly believe in mastering every skill I find valuable, which allows me to deliver innovative and effective solutions for any project I work on.

          With every step, I aim to blend technical expertise with creativity, turning ideas into impactful digital realities.</p>
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
