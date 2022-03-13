
function setup() {
    createCanvas (windowWidth, windowHeight);
  }
  
  function draw() {
    background(0, 0, 0);
  
    //The structure of the room
  stroke(128, 128, 128);
  line(771,1,771,447);
  line(771,447,1,848);
  line(771,447,2001,848);
  
  //Lightbulb Chain
  noStroke();
  fill(99, 99, 99)
  ellipse(420,5,10,10);
  ellipse(420,15,10,10);
  ellipse(420,25,10,10);
  ellipse(420,35,10,10);
  ellipse(420,45,10,10);
  ellipse(420,55,10,10);
  ellipse(420,65,10,10);
  ellipse(420,75,10,10)
  
  //Screw
  fill(308, 158, 158);
  rect(328,-10,15,31,20);
  
  //Lightbulb
  fill(255, 255, 0);
  ellipse(871,307,30,30);
  ellipse(871,307,15,15);
  
  //the Light
  fill(255, 255, 0, 15);
  ellipse(871,307,1200,1200);
  ellipse(871,307,1400,1400);
  ellipse(871,307,955,945);
  ellipse(871,307,660,660);
  ellipse(871,307,440,440);
  ellipse(871,307,267,267);
  
  //Person
  //Head
  stroke(255, 255, 255);
  fill(0, 0, 0);
  ellipse(143,289,42,41);
  
  //Back
  line(203,352,163,298);
  
  //Legs
  line(202,351,130,368);
  line(203,351,129,382);
  line(208,374,130,368);
  line(203,380,129,382);
  
  //arms
  line(180,320,165,364);
  line(150,311,165,364);
  line(173,310,155,366);
  line(141,308,158,364);
    translate (200, 200)
  }