function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  document.getElementById("cp").appendChild(div.firstChild);
};
for (const [key, value] of Object.entries(JSON.parse(data)).reverse()) {
  createElementFromHTML(`<a class="project" id="project_${key}" href="/project.html?p=${key}" onmouseenter="hover('audio${key}')"><audio id="audio${key}" src="Source/Audio/hover.mp3" preload="auto"></audio><img alt="Cover image for project: ${value["Name"]}" src="Source/Images/${value["Cover"]}"/><p>${value["Name"]}</p></a>`);
}