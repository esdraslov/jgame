var inited = false;
exports.getInit = function() {
  inited = true;
};
exports.makeplayer = function(color, borderradius) {
  if(inited){
    console.log(color)
    const player = document.createElement("div")
    const style = 
      "background: "+color+";"+
      "border-radius: "+borderradius+";"

    player.setAttribute("style", style)
    
    document.body.appendChild(player)
  }
}
exports.makebg = function(color) {
  if(inited){
    console.log(color)
    document.body.style.background = color
  }
}