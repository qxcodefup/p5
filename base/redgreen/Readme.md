# @redgreen

[Vídeo](https://user-images.githubusercontent.com/4747652/227686774-64c315c7-051a-403b-bb2d-e6cbee9902eb.mp4)

## Intro

Vamos construir várias linhas, cada uma no seu lugar.

## Guide

- Esteja atendo às variáveis. Utilize-as ao invés de colocar os valores diretamente.
- Você vai tentar fazer uma linha da borda esquerda para borda direita.
- Gere aleatoriamente o y de partida e o y de chegada.
- Se ambos os valores estiverem do meio para cima, faça a linha utilizando algum tom de vermelho.
- Se ambos os valores estiverem do meio para baixo, faça a linha utilizando algum tom de verde.

## Draft

```js
let larg = 600, prof = 300;
function setup() {
  createCanvas(larg, prof);
}

function draw() {
  let ya = random(prof);
  let yb = random(prof);
  // se ambos acima do meio, faça linha de vermelhor
  // se ambos abaixo do meio, faça a linha de verde
}
```
