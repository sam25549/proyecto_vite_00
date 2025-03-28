var mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
};

var trase = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
};

var friction02 = 0.06;

var friction = 0.1;



window.setup = () => {
  // Create a canvas that fills the window
  // and set the background color to black
  createCanvas(windowWidth, windowHeight);
  background('black');
};

// p5.js draw function
window.draw = () => {
  background('black');
  mouse.x += (mouseX - mouse.x) * friction;
  mouse.y += (mouseY - mouse.y) * friction;

  trase.x += (mouseX - trase.x) * friction02;
  trase.y += (mouseY - trase.y) * friction02;
  ellipse(trase.x, trase.y, 10, 10);
  fill(255, 0, 0);
  ellipse(mouse.x, mouse.y, 10, 10);
  text(mouseX + ", " + mouseY, mouse.x, mouse.y);
  fill(255);
};

// p5.js windowResized function
window.windowResized = () => {
resizeCanvas(windowWidth, windowHeight);
background('black'); // Reset background after resizing
};