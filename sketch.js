var weight;

var r = 220;
var g = 237;
var b = 49;

function setup() {
  createCanvas(600,600);
  frameRate(1);
  background(255);
}

function draw() {
  
  for(var x=25; x<580; x+=50){
    for(var y=25; y<580; y+=50){
      
      for(var rad=10; rad<101; rad+=10){

          var weight = 5;
           stroke(r,g, b);
           strokeWeight(weight);
          noFill();
          
          
          if (random() <0.5){
            
         stroke(g,b,r);
         line( x, y+20,x+20, y);
         
      
  }
      line(x,y,x+20,y+20); 
      }
      
      
    }

}
}

 function mousePressed() {
  r = random(255);
  g = random(255);
  b = random(255);
  }