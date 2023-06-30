let bubble;
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
let timerid;
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function setup(){
  bubble = new Bubble() ;
  console.log(bubble.x); 
}
function draw(){
  timerid = setInterval(frame , 150);
}
function frame(){
  bubble.move();
  bubble.show();
}

class Bubble{
  constructor(){
    this.x = 250;
    this.y = 250;
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
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.strokeStyle = "white";
    context.lineWidth = 5;
    context.arc(this.x,this.y,20,0 ,2 * Math.PI);
    context.stroke();
  }
}

setup();
draw();
clearInterval(timerid);


