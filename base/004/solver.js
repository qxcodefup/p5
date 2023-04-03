let larg = 426, prof = 240;
let x = larg / 2, y = 50, diam = 50;
let vx = -1, vy = 1;
function setup() {
  createCanvas(larg, prof);
  fill("cyan");
}

function draw() {
  background(0);

  circle(x, y, diam);
  x += vx;
  y += vy;
  let raio = diam / 2;
  if (x < raio) {
    x = raio;
    vx = -vx;
  }
  if (x + raio > larg) {
    x = larg - raio;
    vx = -vx;
  }
  if (y < raio) {
    y = raio;
    vy = -vy;
  }
  if (y + raio > prof) {
    y = prof - raio;
    vy = -vy;
  }
}