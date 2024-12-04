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
  aboutMeImg.addEventListener('click', () => updateFolderContent(`
      <div class="aboutmejs">
          <h1>TEST ABOUT ME</h1>
      </div>
  `))

  const knowledgeImg = document.querySelector('.imgfolder[src="img/folderknow.png"]');
  knowledgeImg.addEventListener('click', () => updateFolderContent(`
      <div class="knowledgejs">
          <h1>TEST CONOCIMIENTOS</h1>
      </div>
  `))

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
