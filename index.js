/**
 * Project: Portfolio_MacOS_Ui
 * Author: anluisgl
 * License: MIT
 * Repository: https://github.com/anluisgl
 */

const lightRedSpan = document.querySelector('.light.red')

lightRedSpan.addEventListener('click', function() {

  document.getElementById('box').style.display = 'none';
})

document.addEventListener("DOMContentLoaded", () => {
  const aboutMeImg = document.querySelector('.imgfolder[src="img/inconosmac1.png"]');
  aboutMeImg.addEventListener('click', () => { updateFolderContent(`
      <div class="aboutmejs">

        <div class="traffic-lights2">
            <span class="light2 red"></span>
            <span class="light2 yellow"></span>
            <span class="light2 green"></span>
        </div>
        
        <div class="divimgaboutmejs">
            <video class="imgaboutme" src="img/face.mp4" alt="" mute autoplay loop>
        </div>

        
        <h1 class="h1aboutmejs"> Antonio Luis García Laredo </h1>
        <h1 class="h1aboutmejs2"> Frontend Development </h1>

      </div>
  `)

  const lightRedSpan2 = document.querySelector('.light2.red')

  lightRedSpan2.addEventListener('click', function() {

    document.getElementById('folder2').style.display = 'none';
  })
    document.getElementById('folder2').style.display = 'flex';
  })

  

  const knowledgeImg = document.querySelector('.imgfolder[src="img/folderknow.png"]');
  knowledgeImg.addEventListener('click', () => { updateFolderContent(`
      <div class="knowledgejs">

      <div class="knowjs1">
        <div class="traffic-lights2">
          <span class="light2 red"></span>
          <span class="light2 yellow"></span>
          <span class="light2 green"></span>
        </div>

          

        </div>

        <div class="knowjs2">

        </div>

        <div class="knowjs3">

        </div>

        <div class="knowjs4">

        </div>

        <div class="knowjs5">

        </div>

        <div class="knowjs6">

        </div>

        <div class="knowjs7">

        </div>

        <div class="knowjs8">

        </div>

        <div class="knowjs9">

        </div>
    
      </div>
  `)
  const lightRedSpan2 = document.querySelector('.light2.red')

  lightRedSpan2.addEventListener('click', function() {

    document.getElementById('folder2').style.display = 'none';
  })
    document.getElementById('folder2').style.display = 'flex';
  })

  const ProjectImg = document.querySelector('.imgfolder[src="img/folderwork.png"]')
  ProjectImg.addEventListener('click', () => updateFolderContent(`
      <div class="proyectsjs">
          <h1>TEST PROJECTS</h1>
      </div>
  `))
})

function updateFolderContent(content) {
  const folder2 = document.getElementById("folder2")
  folder2.innerHTML = content
}




