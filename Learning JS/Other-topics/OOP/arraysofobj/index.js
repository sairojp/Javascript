let bubbles = [];
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
let timerid;
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function setup(){
  for(let i = 0; i < 5 ; i++){
    let x = 10 + 30 * i;
    bubbles[i]= new Bubble(x,200,40);
  }
  
   
}
function draw(){
  timerid = setInterval(frame , 150);
}
function frame(){
  bubbles[0].clear();
  for(let i = 0; i < 5 ; i++){
    bubbles[i].move();
  }
  for(let i = 0; i < 5 ; i++){
    bubbles[i].show();
  }
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

