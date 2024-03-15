# @quadrantes

[Vídeo](https://user-images.githubusercontent.com/4747652/228835366-3b4b9b47-131f-4165-8d08-3efa23a138d7.mp4)

## Intro

Vamos treinar if e else

## Guide

- Parta do código de rascunho.
- Faça linhas divisórias na tela dividindo os 4 quadrantes.
- Evite usar números diretamente no código, coloque os números nas variáveis e utilize as variáveis.
- Utilize o random para gerar aleatoriamente uma posição para bolinha na tela.
- Faça if para verificar onde a bolinha foi gerada e modifique a cor dela antes da pintura.
- Tente simplificar os if elses para ter o mínimo de código repetido.

## Draft

```js
let larg = 780, prof = 440;
function setup() {
  createCanvas(larg, prof);
  background(220);
}

function draw() {
  let x = random(larg);
  let y = random(prof);
  //desenhe as linhas divisórias
  
  //faça os ifs para trocar de cor
  //dependendo de onde a bolinha cair
  circle(x, y, 10);
}
```
