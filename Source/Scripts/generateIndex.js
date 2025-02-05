projects = [];
projectsJSON = Object.entries(JSON.parse(data));
sortList = [];

sortSelec = document.getElementById("sort");

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  projects.push(div.firstChild);
  document.getElementById("cp").appendChild(div.firstChild);
};

function generateIndex(){
  projectsJSON = Object.entries(JSON.parse(data));
  if (sortSelec.value == "old"){
    sorted_data = projectsJSON
  } else if (sortSelec.value == "new"){
    sorted_data = projectsJSON.reverse()
  }

  projects.forEach(project => {
    project.remove();
  });
  for (const [key, value] of sorted_data) {
    let tags = "";
    value["Tags"].forEach(element => {
      tags += `<span class=\"tag tag-${element}\">${element}</span>`
    });
    createElementFromHTML(`<a class="project" id="project_${key}" href="/project.html?p=${key}" onmouseenter="hover('audio${key}')"><audio id="audio${key}" src="Source/Audio/hover.wav" preload="auto"></audio><img alt="Cover image for project: ${value["Name"]}" src="Source/Images/${value["Cover"]}"/><p>${value["Name"]} ${tags}</p></a>`);
  }

}

generateIndex()