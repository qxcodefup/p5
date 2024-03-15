# @mosaico

[Vídeo](https://user-images.githubusercontent.com/4747652/227681901-f5331fb0-9a72-49c6-a652-a8a9097accd9.mp4)

## Intro

Vamos partir do código 01 e pintar nossos quadradinhos.

## Guide

- Complete a parte de fazer o rect andar com o código que você fez no exercício 01.
- Inicialize as variáveis r, g, e b todas com valor 100. 
- Em cada quadro, utilize a função random para alterar em até 10 unidades para mais ou para menos os valores de r, g e b.

## Draft

```js
let x = 0, y = 0, tam = 10;
let larg = 500, prof = 300;
//crie suas variaveis r, g, e b

function setup() {
  createCanvas(larg, prof);
  background(0);
  noStroke();
}

function draw() {
  //alterar os valores de r, b, b
  fill(r, g, b);
  rect(x, y, tam);
  //fazer o rect andar
}
```

## Solve

[LINK](https://editor.p5js.org/sena.ufc/sketches/-j5a1l4s4)