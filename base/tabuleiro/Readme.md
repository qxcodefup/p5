# @tabuleiro

[_](https://user-images.githubusercontent.com/4747652/235684696-78ffa6a3-ee2c-4d63-a60f-04994f84bd8e.mp4)

## Intro

Vamos trabalhar o uso de laços de repetição para fazer uma escada.

## Instruções

1. Crie um tabuleiro de xadrez com 8 linhas e 8 colunas.
2. Cada quadrado deve ter 100 pixels de lado.
3. Use as cores preto e branco para pintar os quadrados.

## Draft

```js
let larg = 800, prof = 800;
let nl = 8, nc = 8, tam = 100;

function setup() {
    createCanvas(larg, prof);
    noStroke();
    fill(0);
    for (let l = 0; l < nl; l += 1) {
        for (let c = 0; c < nc; c += 1) {
            /* qual cor pintar? */
            rect (c * tam, l * tam, tam - 1);
        }
    }
}

```