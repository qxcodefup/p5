let x = 0;
let y = 0;
let tam = 20;
let larg = 400;
let prof = 300;
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