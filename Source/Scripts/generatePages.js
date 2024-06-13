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
    createElementFromHTML(`<img src='Source/Images/${obj[1]}'></img>`,"descc")
  }
})
links = pdata["Links"]
links.forEach((obj) => {
  if(obj[2]){
    createElementFromHTML(`<li><a href="${obj[1]}" download target="_blank">${obj[0]}</a></li>`,"links")
  } else {
    createElementFromHTML(`<li><a href="${obj[1]}" target="_blank">${obj[0]}</a></li>`,"links")
  }
})