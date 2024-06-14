pname = new URLSearchParams(window.location.search).get("p")
pdata = JSON.parse(data)[pname]
function createElementFromHTML(htmlString,obj) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  document.getElementById(obj).appendChild(div.firstChild);
};
document.getElementById("title").innerHTML = `${pdata["Name"]}  -  ScottishPuffin`
document.getElementById("titleH1").innerHTML = pdata["Name"]
desc = pdata["Desc"]
desc.forEach((obj) => {
  if (obj[0] == "text"){
    createElementFromHTML(`<p>${obj[1]}</p>`,"descc")
  } else if(obj[0] == "image"){
    createElementFromHTML(`<img class='projectImage' src='Source/Images/${obj[1]}'></img>`,"descc")
  }
})
links = pdata["Links"]
document.getElementById("linkContainer").style.width = (Object.keys(links).length+1) * 45 + "px"
/*if (links["download"]) {
  document.getElementById("dl-link").onclick = function(){window.open(links["download"])}
  document.getElementById("dl-link").style.display = "block"
}*/
if (links["web"]) {
  document.getElementById("we-link").onclick = function(){window.open(links["web"])}
  document.getElementById("we-link").style.display = "block"
}
if (links["github"]) {
  document.getElementById("gh-link").onclick = function(){window.open(links["github"])}
  document.getElementById("gh-link").style.display = "block"
}