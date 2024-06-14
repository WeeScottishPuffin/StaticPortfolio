enableScrollObj = false;
function scroll(obj,rate=10){
  obj.style.backgroundPositionX = "0px";
  return window.setInterval(function(){
    if (enableScrollObj){
      a = parseFloat(obj.style.backgroundPositionX.slice(0,-2));
      a+=(rate/100);
      obj.style.backgroundPositionX = `${a}px`;
    };
  },10)
}