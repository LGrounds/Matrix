


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  noLoop();
}

function draw() {
  var color1 = color(0, 0, 153);
  var color2 = color(204, 51, 0);
  setGradient(0, 0, windowWidth, windowHeight, color1, color2, "Y");

 fill(13, 80, 28);
  rect(0, 600, 2000, 400);
  translate(width / 2, height / 2 + 200);
  branch(100);
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis == "Y") {

    for (let i = y; i <= y + h; i++) {
      var inter = map(i, y, y + h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis == "X") {

    for (let j = x; j <= x + w; j++) {
      var inter2 = map(j, x, x + w, 0, 1);
      var d = lerpColor(c1, c2, inter2);
      stroke(d);
      line(j, y, j, y + h);
    }
  }
}








function branch(len) {
  push();
  if (len > 10) {
    strokeWeight(map(len, 10, 100, 1, 15));
    stroke(70, 40, 20);
    line(0, 0, 0, -len);
    translate(0, -len);
    rotate(random(-20, -30));
    branch(len * random(0.7, 0.9));
    rotate(random(50, 60));
    branch(len * random(0.7, 0.9));
  } else {
    var r = 70 + random(-20, 20);
    var g = 115 + random(-20, 20);
    var b = 40 + random(-20, 20);
    fill(r, g, b, 150);
    noStroke();

    beginShape();
    for (var i = 45; i < 135; i++) {
      var rad = 15;
      var x = rad * cos(i);
      var y = rad * sin(i);
      vertex(x, y);
    }
    for (var i = 135; i > 40; i--) {
      var rad = 15;
      var x = rad * cos(i);
      var y = rad * sin(-i) + 20;
      vertex(x, y);
    }
    endShape(CLOSE);
  }
  pop();
}


