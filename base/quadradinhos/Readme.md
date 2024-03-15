# @quadradinhos

[Video](https://user-images.githubusercontent.com/4747652/227679690-25f1661d-8f5f-41ca-8bdb-fd6b9737dd86.mp4)

## Intro

Ação, pintar a tela com quadradinhos como se fosse uma máquina de escrever.

## Guide

- Utilize as variáveis `x` e `y` para controlar a posição do quadrado.
- Retire o comando de `background` do `draw` para não apagar a tela em cada frame.
- No `draw`, incremente o x e utilize um `if` para retornar ao ponto inicial se por acaso ele sair da tela pela direita.

## Draft

```js
let x = 0, y = 0, tam = 10;
let larg = 500, prof = 300;

function setup() {
  createCanvas(larg, prof);
  background(0);
  noStroke();
  fill(0, 255, 255);
}
function draw() {
//seu código aqui
}
```

## Solve

[LINK](https://editor.p5js.org/sena.ufc/sketches/YC65wtDuU)
