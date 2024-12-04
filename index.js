/**
 * Project: Portfolio_MacOS_Ui
 * Author: anluisgl
 * License: MIT
 * Repository: https://github.com/anluisgl
 */

const lightRedSpan = document.querySelector('.light.red');

lightRedSpan.addEventListener('click', function() {

  document.getElementById('box').style.display = 'none';
});


document.addEventListener("DOMContentLoaded", () => {
  const aboutMeImage = document.querySelector('.imgfolder[src="img/inconosmac1.png"]');
  aboutMeImage.addEventListener('click', () => updateFolderContent(`
      <div class="aboutmejs">
          <h1>TEST ABOUT ME</h1>
      </div>
  `));

  const knowledgeImage = document.querySelector('.imgfolder[src="img/folderknow.png"]');
  knowledgeImage.addEventListener('click', () => updateFolderContent(`
      <div class="conocimientosjs">
          <h1>TEST CONOCIMIENTOS</h1>
      </div>
  `));
});

function updateFolderContent(content) {
  const folder2 = document.getElementById("folder2");
  folder2.innerHTML = content;
}
