var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var bart;
var music = new Audio ();

var frames = 0;
var images = {
  bg:"images/desierto3.jpg",
  bart:"images/bart.png",
  redbull:"images/redbull.png",
  rock:"images/rock.png",
  homer:"images/Homer_Simpson.png",
  homerkilling:"images/homerchokebart.gif",
  nemesis:"images/patiño.png",
  floor:"images/segundoNivel.png"
};
music.src ="sounds/television-simpsons.mp3";
window.onload = function() {
    var board = new Board();
    bart = new Skater();

    setTimeout(function(){
      function updateGame(){
        //contar:
        frames++;
        board.x-=7;
        //Borrar todo antes
        ctx.clearRect(0,0,canvas.width,canvas.height);
        //chars
        if (board.x<-board.width){
        board.x=0;
        }
        board.draw();
        hitBottom();
        bart.sprite();
        homerDrawer();
        crash();
      }
          interval= setInterval(updateGame,1000/fps);
    }, 2000)
  };

var fps=60; 
var interval; 

document.addEventListener("keydown", function(e){
  switch(e.keyCode){
    case 32:
      //bart.up();
      bart.moveSkaterUp();
      break;
    case 37:
      bart.left();
      break;
    case 39:
      bart.right();
      break;
      case 27:
      console.log("key")
      location.reload();

      break;
         } 
});
  
function hitBottom () {
  var bartBottom = canvas.height - bart.height - 91;
    if (bart.y > bartBottom) {
      bart.y = bartBottom;
    }
 }

 function startGame(){
  frames = 0;
  homers = [];
  interval = setInterval(updateGame, 1000/60)
}

function CheckCollition(homero,bart){
  console.log (homero);
  console.log (bart);
    return  (bart.x < homero.x + homero.width) &&
            (bart.x + bart.width > homero.x) &&
            (bart.y < homero.y + homero.height) &&
            (bart.y + bart.height > homero.y);
  
}
 function crash(){
   console.log(homers)
  homers.forEach(function(homero){
    if(CheckCollition(homero,bart)){
      stopGame();
    }
  });
}

 function stopGame(){
  ctx.fillStyle = "black";
  ctx.font = "100px Arial"
  ctx.fillText("GAME OVER", 100,200);
  ctx.fillStyle = "red";
  ctx.font = "30px Arial"
  ctx.fillText("Press 'ESC' for restart", 100,300);
  clearInterval(interval);
}

startGame();
music.play();
