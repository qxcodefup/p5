let larg = 900, prof = 600;
let timer_count = 0, timer_max = 60;
let x = larg / 2, y = prof / 2, tam = 50; // variaveis do circulo
function setup () {
    createCanvas(larg, prof);
    textAlign(CENTER);
    frameRate(30);
}

function draw() {
    timer_count++;
    if (timer_count > timer_max) {
        timer_count = 0;
        x = random(0, larg);
        y = random(0, prof);
    }

    background("blue");
    fill("white");
    circle(x, y, tam);
    fill("black");
    text(timer_max - timer_count, x, y);
}

