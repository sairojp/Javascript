let bubbles = [];
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
let timerid;

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function getDistance(x1 ,y1 , x2 ,y2){
  let x = x2 - x1 ;
  let y = y2 - y1;
  
  return Math.sqrt(x*x + y*y);
}

function setup(){
  for(let i = 0; i < 2 ; i++){
    let x = 200 + 30 * i;
    bubbles[i]= new Bubble(x,200,40);
  } 
}

function draw(){
  timerid = setInterval(frame , 150);
}
function frame(){
  bubbles[0].clear();
  bubbles.forEach((bubbles)=>{
    bubbles.show();
    bubbles.move();  
  })
}


//adds new object on mouse click

/*canvas.addEventListener("mousedown",(e)=>{
  addNewBubble(canvas,e);
})
function addNewBubble(canvas , e){  
  let r = getRndInteger(5,50);
  console.log(e.clientX);
  let bubbleCreated = new Bubble(e.clientX,e.clientY,r);
  bubbles.push(bubbleCreated);  
}*/

//deletes on pressing d
window.addEventListener("keypress",(e)=>{
  if(e.key === 'd'){
    if(bubbles.length>1){
    bubbles.pop();
    }
  }
})

canvas.addEventListener("mousedown",(e)=>{
  bubbles.forEach((bubbles)=>{
    bubbles.hover(e.clientX,e.clientY);
  })
})







class Bubble{
  constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = "white";
  }

   move(){
    if(this.x >=600 || this.y >= 600 ||this.x<0 || this.y<0 ){
      this.x = 200;
      this.y = 200;
    }
    else 
    this.x = this.x + getRndInteger(-10,10);
    
    this.y = this.y + getRndInteger(-10,10);
  }

   show(){
    context.beginPath();
    context.strokeStyle = this.color;
    context.lineWidth = 3;
    context.arc(this.x,this.y,this.r,0 ,2 * Math.PI);
    context.stroke();
  }

  clear(){
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  hover(x , y){
    let distance = getDistance(x ,y,this.x ,this.y) ;
    console.log(distance);
    if(this.r > distance){
      this.color = "red";
    }
    
  }
}

setup();
draw();
//clearInterval(timerid);