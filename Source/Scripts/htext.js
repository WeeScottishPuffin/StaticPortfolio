alphabet = "&#x200B;".split(" ")

function effect(object,text,delay){
  disp = "";
  for (let i=0; i<text.length; i++){
    disp += alphabet[Math.floor(Math.random()*alphabet.length)]
  }
  object.innerHTML = disp;

  for (let i = 0; i < text.length+1; i++) {
    setTimeout(function() {
      disp=text.substring(0,i)
      for (let x=0; x<(text.length-i); x++){
        disp += alphabet[Math.floor(Math.random()*alphabet.length)]
      }
      object.innerHTML=disp;
    }, i * delay)};
}