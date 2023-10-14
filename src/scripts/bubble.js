const bubbleContainer = document.getElementById("bubble-container");
let w = bubbleContainer.clientWidth;
let h = bubbleContainer.clientHeight;

var v = function (c) {
  let bubbles = [];
  let grid = [];

  c.setup = () => {
    c.createCanvas(w, h);
    c.noStroke();
    c.frameRate(30); // Taxa de atualização da animação

    // Inicialize a grade pixel art
    for (let x = 0; x < w; x += 20) {
      for (let y = 0; y < h; y += 20) {
        grid.push(new Pixel(x, y));
      }
    }
  };

  c.draw = () => {
    c.background(0);

    // Atualize e exiba a grade pixel art
    for (let i = 0; i < grid.length; i++) {
      grid[i].update();
      grid[i].display();
    }

    for (let i = bubbles.length - 1; i >= 0; i--) {
      bubbles[i].move();
      bubbles[i].display();

      // Check for collisions and merge bubbles
      for (let j = i + 1; j < bubbles.length; j++) {
        if (bubbles[i].intersects(bubbles[j])) {
          bubbles[i].merge(bubbles[j]);
          bubbles.splice(j, 1);
        }
      }

      if (bubbles[i].isOffscreen()) {
        bubbles.splice(i, 1);
      }
    }
  };

  c.mousePressed = function () {
    let bubble = new Bubble(c.mouseX, c.mouseY);
    bubbles.push(bubble);
  };

  class Pixel {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = 20; // Tamanho do pixel
      this.color = c.color(c.random(255), c.random(255), c.random(255)); // Cor inicial
    }

    update() {
      // Atualize a cor do pixel suavemente
      this.color = c.lerpColor(
        this.color,
        c.color(c.random(255), c.random(255), c.random(255)),
        0.1
      );
    }

    display() {
      c.fill(this.color);
      c.rect(this.x, this.y, this.size, this.size);
    }
  }
};

var myp5 = new p5(v, "bubble-container");
