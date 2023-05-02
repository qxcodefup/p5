# Timer


[_](https://user-images.githubusercontent.com/4747652/235505327-7f299b3d-6a9c-40c2-8b60-b17c24695e30.mp4)

## Intro

O objetivo dessa atividade é trabalhar com o conceito de timer. Um timer é um contador que é incrementado a cada frame. Quando o contador atinge um valor máximo, ele é zerado e o processo se repete. Toda vez que o timer é zerado, um evento é disparado. Nesse caso, o evento é a mudança da posição do círculo.

## Instruções

- Valendo 2 pontos:
  - Inicialize o timer `timer_count`.
  - Faça o timer incrementar a cada frame.
  - Quando atingir o valor máximo `timer_max`:
    - Zere o timer.
    - Faça o círculo mudar de posição.
  - Faça o código que desenha o fundo de azul e o círculo de branco.
- Valendo 4 pontos:
  - Escreva dentro do círculo o valor do timer.
- Valendo 5 pontos:
  - Escreva dentro do círculo o valor do timer de forma regressiva.

## Draft

```js
let larg = 900, prof = 600;
let timer_count = 0, timer_max = 60;
let x = larg / 2, y = prof / 2, tam = 50; // variaveis do circulo
function setup () {
    createCanvas(larg, prof);
    textAlign(CENTER);
    frameRate(30);
}

function draw() {
    //se código aqui
}


```