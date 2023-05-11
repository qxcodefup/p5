# Campo

[_]()

## Intro

Vamos aprender a controlar os botões do mouse.

## Instruções

1. Pinta a metade esquerda da tela de amarelo e a metade direita de verde.
2. Crie variáveis para guardar as posições dos pontos `a` e `b`.
3. Desenhe um circulo de tamanho 20 nas posições `a: (30, 100)` e `b: (300, 40)`.
4. Escreva o nome `a` no ponto `a` e o nome `b` no ponto `b` usando a função `text(texto, x, y)`.
5. Se você clicar com o botão ESQUERDO do mouse na parte AMARELA
    - mova o ponto `a` para a posição do mouse
6. Se você clicar com o botão ESQUERDO do mouse na parte VERDE
    - mova o ponto `b` para a posição do mouse

## Draft

```js
let larg = 400, prof = 400;
let ax = 30, ay = 100;
let bx = 300, by = 40;

function setup() {
  createCanvas(larg, prof);
}

function draw() {
  background(255);
  //desenho os circulos e textos
}
function mousePressed() {
  if (mouseButton == LEFT) {
  }
}


```
