let larg = 400, prof = 400;
let radius = 150;

function setup() {
    createCanvas(larg, prof);
  circle(larg/2, prof/2, 2 * radius);
}

function calc_distancia(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function draw() {
  
  let x = random(larg);
  let y = random(prof);
  if (calc_distancia(x, y, larg/2, prof/2) < radius) {
    ellipse(x, y, 10);
  }
}