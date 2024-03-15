# @floresta

[_](https://user-images.githubusercontent.com/4747652/235668912-3432bbb9-11f4-481b-8203-66dae5266a10.mp4)

Vamos utilizar os conceitos das atividades Mosaico, Limitar e Prisão para fazer uma floresta.

Leia atentamente as instruções e faça o que se pede.

## Draft

```js
let bola_x = 200, bola_y = 200, tam = 5;
let r = 100, g = 100, b = 100;
let larg = 400, prof = 400;

function setup() {
  createCanvas(larg, prof);
  background(200);
  noStroke();
}

function limitar(v, lower, upper) {
    //copiar da atividade 008
}

function draw() {
  for (let i = 0; i < 100; i++) {
    fill(r, g, b);
    //faça r variar de -1 a +1 e limite entre 0 e 255
    //faça g variar de -1 a +1 e limite entre 0 e 255
    //faça b variar de -1 a +1 e limite entre 0 e 255
    
    circle(bola_x, bola_y, 2 * tam);
    //faça bola_x variar de -tam a +tam e limite entre 0 e larg
    //faça bola_y variar de -tam a +tam e limite entre 0 e prof
  }
}

```
