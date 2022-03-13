

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  angleMode (DEGREES)
} 


function draw () {
  background(30)


  rotateX(60)

  noFill()
  stroke(455)
  
  for (var i = 0; i < 50; i++) {
    
    var r = map(sin(frameCount / 90), -1, 1, 100, 200)
    var g = map(i, 0, 20, 100, 200)
    var b = map(cos (frameCount), -1, 1, 200, 100)

    stroke(r, g, b)

    rotate(frameCount / 120)
    
    
      beginShape()
      for (var j = 0; j < 360; j += 20) {
      var rad = i * 10
      var x = rad * cos(j)
      var y = rad * sin(j)
      var z = sin(frameCount * 2.5 + i * 5) * 100

          vertex(x, y, z) 
          
      

    }
    endShape(CLOSE)
  
  }

}