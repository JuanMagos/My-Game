function Homero(){
    this.x = 1180;
    this.y = 421;
    this.width = 100;
    this.height = 140;
    this.img = new Image();
    this.img.src = images.homer;
    this.img.onload = function(){
      this.draw();
    }.bind(this);
    this.draw = function(){
      this.x--;
     ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
     
    }
  }

var homers = [];


function homerGenerator(){
  homers.push(new Homero);
}

function homerDrawer(){
  if(frames%500 === 0){
    homerGenerator();
  }
  homers.forEach(function(h){
    h.draw();
  });
}

