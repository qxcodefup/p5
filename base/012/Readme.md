# Escada

[_](https://user-images.githubusercontent.com/4747652/235675484-d6f3a14b-3c4f-4510-b5a9-bb8d3a1c6080.mp4)

## Intro

Vamos trabalhar o uso de laços de repetição para fazer uma escada.

## Instruções

- Valendo 2 pontos:
  - Desenhe os pretos da escada.
- Valendo 2 pontos:
  - Desenhe os vermelhos da escada.
- Valendo 1 pontos:
  - Desenhe os verdes da escada.

## Draft

```js
let larg = 900, prof = 600;
let nl = 10, nc = 10, tam = 50;

function setup() {
    createCanvas(larg, prof);
    background(255);
    noStroke();
    fill(0);
    for (let l = 0; l < nl; l += 1) {
        for (/* seu código aqui */) {
            rect (c * tam, l * tam, tam - 1);
        }
    }
    fill("red")
    for (let l = 0; l < nl; l += 1) {
        for (/* seu código aqui */) {
            rect (c * tam, l * tam, tam - 1);
        }
    }
    fill("green")
    for (let l = 0; l < nl; l += 1) {
        /* seu código aqui */
    }
}


```