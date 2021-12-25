const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

function Symbol(x,y,fontSize){
  this.x = x;
  this.y = y;
  this.fontSize = fontSize;
  var characters = '01';
  this.draw = function(){
    ctx.fillStyle = "green";
    ctx.font = this.fontSize+"px arial";
    var symbol = characters.charAt(Math.floor(Math.random() * characters.length));
    ctx.fillText(symbol,this.x * this.fontSize,this.y * this.fontSize);
    
    if(this.y * this.fontSize > canvas.height && Math.random() > 0.95){
      this.y = 0;
    } else {
      this.y++;
    }
  }
  this.draw();
}
function Effect(){
  this.fontSize = 20;
  this.columns = canvas.width / this.fontSize;
  
  this.gameRules = function(){
    for(var i = 0; i < this.columns; i++){
      symbolsArray.push(new Symbol(i,0,this.fontSize));
    }
  }
  this.gameRules();
}
var symbolsArray = [];

var effect = new Effect();

function animate(){
  requestAnimationFrame(animate);
  ctx.fillStyle = "rgba(0,0,0,0.1)";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  for(var i = 0; i < symbolsArray.length; i++){
    symbolsArray[i].draw();
  }
  
}
animate();