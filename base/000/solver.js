let x = 0, y = 0, tam = 20;
let larg = 400, prof = 300;
function setup() {
  createCanvas(larg, prof);
  background(0);
  noStroke();
  fill("cyan");
}

function draw() {
  rect(x, y, tam);
  x += tam;
  if (x > larg) {
    x = 0;
    y += tam;
  }
}