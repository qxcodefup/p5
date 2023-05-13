# Clique

[_]()

## Intro

Vamos aprender a controlar os botões do mouse.

## Instruções

1. A função `mousePressed()` é chamada **AUTOMATICAMENTE** quando o botão do mouse é pressionado.
2. Dentro dela, você pode verificar qual botão foi pressionado usando a variável `mouseButton`.
    1. `LEFT` para o botão esquerdo
    2. `RIGHT` para o botão direito
    3. `CENTER` para o botão do meio (click com a roda do mouse)
3. Para verificar se o clique esquerdo aconteceu seria assim:

````js
function mousePressed() {
  if (mouseButton == LEFT) {
    console.log("botao esquerdo clicado");
  }
}
```

## Atividade

- Crie variáveis para guardar as posições dos pontos `a` e `b`.

```js
let ax = 30, ay = 100;
let bx = 300, by = 40;
```

- Na função `draw` desenhe um circulo de tamanho 20 nas posições.
- Usando a função `text(texto, x, y)`
  - Escreva o nome `a` no ponto `a` e o nome `b` no ponto `b`.
- Se o botão esquerdo foi pressionado
    - mova o ponto `a` para a posição do mouse
7. Se o botão direito foi pressionado
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
    //movimente o ponto a
  }
  //faça o teste e movimente o ponto b
}


```
