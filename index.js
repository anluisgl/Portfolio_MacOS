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
        <h1 class="h1aboutmejs2"> - Frontend Development - </h1>
        <p class="pboutmejs"> I’m a junior frontend developer with great potential, passionate about creating engaging and functional web interfaces. As a Shopify expert, I’ve designed and managed over five e-commerce stores, optimizing performance and user experience.

        With additional skills in server administration and cybersecurity, I bring stability and security to every project.

        And yes, you’re reading this on something I built from scratch. 😏 </p>

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

        <div class="traffic-lights2">
          <span class="light2 red"></span>
          <span class="light2 yellow"></span>
          <span class="light2 green"></span>
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




