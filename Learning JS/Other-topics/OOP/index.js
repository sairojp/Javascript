let bubble;
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
let timerid;
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function setup(){
  bubble1 = new Bubble(200,200,20) ;
  bubble2 = new Bubble(300,300,10) ;
   
}
function draw(){
  timerid = setInterval(frame , 150);
}
function frame(){
  bubble1.clear();
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
}

class Bubble{
  constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
  }
   move(){
    if(this.x >=500 || this.y >= 500 ||this.x<0 || this.y<0 ){
      this.x = 200;
      this.y = 200;
    }
    else 
    this.x = this.x + getRndInteger(-10,10);
    console.log(this.x);
    this.y = this.y + getRndInteger(-10,10);
  }

   show(){
    
    context.beginPath();
    context.strokeStyle = "white";
    context.lineWidth = 5;
    context.arc(this.x,this.y,this.r,0 ,2 * Math.PI);
    context.stroke();
  }
  clear(){
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
}

setup();
draw();
clearInterval(timerid);


