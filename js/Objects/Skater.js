var x=0
var y=0
function Skater(){
    this.doGravity=true;
    this.x = 100;
    this.y = 441;
    this.width = 100;
    this.height = 120;
    this.img = new Image();
    this.img.src = images.bart;
    this.img.onload = function(){
    }.bind(this);

    this.sprite = function(){
      if(this.doGravity)
       this.y += gravity;
    ctx.drawImage(this.img,
                     130*x,
                     135*y,
                     130,135,
                     this.x,
                     this.y,
                     this.width,this.height);
    if(frames%10 === 0){
      x++;
    }
    if(x>0.9){
      x=0;
      y++;
    }
    if(y>2){
      y=0;
    }
    console.log(this.y)
  }
  
  
    this.moveSkaterUp = function(){
      if(this.y < 446) return;
      this.doGravity = false;
      var i=0;
      var inter = setInterval(function(){
        this.y-=20;
        this.x+=13;
        i++;
        if(i>10) {
          clearInterval(inter);
          this.doGravity = true;

        }
      }.bind(this),30)

    }
    
    this.left = function(){
      this.x -=8;
    }
    
    this.right = function(){
      this.x +=6;

    }
  }

  var gravity = 7;      
