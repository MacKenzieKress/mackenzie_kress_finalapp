var gui;

function setup() {
  gui = new Gui();
  let gui_setup = new dat.GUI();
  createCanvas(windowWidth, windowHeight);
  d = select('.div-block');
  d.position(0,0);
  gui_setup.add(gui, 'fontFamily', ["Abril Fatface", "Ceviche One", "Londrina Solid", "Montserrat", "Nosifer", "Skranji"]).onChange(setValue);
  gui_setup.add(gui, "points", 10, 50).step(1);
  gui_setup.add(gui, "stroke", 1, 50).step(1);
  gui_setup.add(gui, "radius1", 10, 200).step(1);
  gui_setup.add(gui, "radius2", 20, 200).step(1);
 // gui_setup.addColor(gui, "textColor");
  gui_setup.addColor(gui, "starsColor");
  gui_setup.addColor(gui, "backgroundColor");
   gui_setup.add(gui, 'showDescription').onChange(description);






}

function draw() {
  background(gui.backgroundColor);
  
  strokeWeight(gui.stroke);
  noFill();
  stroke(gui.starsColor);
  noLoop();


  for (let i = windowWidth * .25; i <= windowWidth * .75; i += windowWidth * .25) {
    for (let y = windowHeight / 2 - windowHeight / 4; y <= windowHeight / 2 + windowHeight / 4; y += windowHeight / 4) {
      star(random(50, windowWidth), random(50, windowHeight), random(gui.radius1), random(gui.radius2), gui.points, gui.stroke);
    }
  }

  textAlign(CENTER);
  textSize(120);
  textFont(gui.fontFamily);
  noStroke();
  fill('#fffff');
  text('March 2021', windowWidth / 2, windowHeight / 2);






  noLoop();
}



function setValue() {
  redraw();
}




function Gui() {
  this.fontFamily = "Montserrat";
  this.points = 30;
  this.stroke = 25
  this.radius1 = 60
  this.radius2 = 30
  this.starsColor = ('#eb9e3f');
  this.backgroundColor = ('#f05bb7');
  this.showDescription = true;

}

function description(){
  if(gui.showDescription){
    d.style('display','block');
  } else {
    d.style('display','none');
  }
}


function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);

}

 function keyPressed(){
   save("March2021wallpaper.png"); 
 }


function mousePressed() {
  redraw();
}