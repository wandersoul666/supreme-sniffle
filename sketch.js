
// variables
var  hr;
var mn;
var sn; 


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  angleMode(DEGREES);

}


function draw() {
  background("black");  
  

translate (200,200);
rotate(-90);

  hr = hour (); 
  mn = minute ();
  sn = second ();

  scAngle = map (sn,0,60,0,360);

  //drawing
  push();
  rotate(scAngle);
  stroke("cyan");
  strokeWeight(6);
  line(0,0,100,0);
  pop()


  noFill();
  stroke("cyan");
  strokeWeight(6);
arc (0,0,200,200,0,scAngle);

mnAngle = map (mn,0,60,0,360);


//drawing
push();
  rotate(mnAngle);
  stroke("yellow");
  strokeWeight(6);
  line(0,0,70,0);
  pop()

  noFill();
  stroke("yellow");
  strokeWeight(6);
arc (0,0,150,150,0,mnAngle);

hrAngle = map (hr%12,0,12,0,360);


//drawing
push();
  rotate(hrAngle);
  stroke("magenta");
  strokeWeight(6);
  line(0,0,120,0);
  pop()

  noFill();
  stroke("magenta");
  strokeWeight(6);
arc (0,0,250,250,0,hrAngle);


}



