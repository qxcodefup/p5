# DVD

[](https://user-images.githubusercontent.com/4747652/230169846-4861ecbc-05bc-45d1-b58a-377dd7ebd1de.mp4)

## Intro

Fazer a bolinha quicar na tela toda vez que a borda da bola tocar a tela.

## Guide

- Utilize as variáveis `x` e `y` para controlar a posição do quadrado.
- Já está implementado para ela quicar na borda esquerda, implemente as outras bordas.

## Draft

```js
let larg = 400, prof = 300;
let x = larg / 2, y = 50, diam = 50;
let vx = -1, vy = 1;
function setup() {
  createCanvas(larg, prof);
  noStroke();
}

function draw() {
  background(0);
  fill("cyan");
  circle(x, y, diam);
  x += vx;
  y += vy;
  let raio = diam / 2;
  if (x < raio) {
    x = raio;
    vx = -vx;
  }
}
```

## Solve

