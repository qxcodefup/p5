# Troca

[_]()

## Instruções

1. Crie variáveis para guardar as posições dos pontos `a` e `b`.
2. Desenhe um circulo de tamanho 20 nas posições `a: (30, 100)` e `b: (300, 40)`.
3. Escreva o nome `a` no ponto `a` e o nome `b` no ponto `b` usando a função `text(texto, x, y)`.
4. Vamos apenas utilizar o botão ESQUERDO do mouse.
    - O primeiro clique muda a posição do ponto `a`.
    - O segundo clique muda a posição do ponto `b`.
    - O terceiro clique muda a posição do ponto `a` e assim por diante.

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
