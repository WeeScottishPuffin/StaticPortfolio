let enableHoverSound = false;
function hover(x){
  if (!enableHoverSound){return}
  document.getElementById(x).volume = 0.2;
  document.getElementById(x).play();
}