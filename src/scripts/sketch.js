let bubbles = [];
const sketch = document.getElementById("sketch-container");
let w = sketch.clientWidth;
let h = sketch.clientHeight;

const v = function (c) {
  c.setup = setup;
  c.draw = draw;
};

function setup() {
  c.createCanvas(w, h);
  c.background(0);
  c.frameRate(9);

  // Create and initialize bubbles
  for (let i = 0; i < 2; i++) {
    bubbles.push(new Bubble(Math.random() * w, Math.random() * h));
  }
}

function draw() {
  c.background(150);

  // Update and display bubbles
  for (let bubble of bubbles) {
    bubble.update();
    bubble.display();
  }
}

class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 25;
  }

  update() {
    // Move the bubble randomly
    this.x += Math.random(-2, 2);
    this.y += Math.random(-2, 2);

    // Constrain the bubble within the canvas
    this.x = c.constrain(this.x, 0, w - this.radius);
    this.y = c.constrain(this.y, 0, h - this.radius);
  }

  display() {
    // Display the bubble
    c.noStroke();
    c.fill("#3498db");
    c.ellipse(this.x, this.y, this.radius * 2);
  }
}

var myp5 = new p5(v, "sketch-container");
