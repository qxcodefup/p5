# Cortina

[_](https://user-images.githubusercontent.com/4747652/235680850-24c8a352-1ed1-47d4-8544-9e18feb2846e.mp4)

## Intro

Vamos trabalhar o uso de laços de repetição para desenhar bolinhas caindo.

## Instruções

- Valendo 2 pontos:
  - Desenhe as bolinhas caindo.
- Valendo 2 pontos:
  - Faça as bolinhas voltarem ao topo quando chegarem ao final da tela.
- Valendo 1 pontos:
  - Faça as bolinhas mudarem de cor quando chegarem ao final da tela.

## Draft

```js
let larg = 900, prof = 600;
let bolas_y = 0, bolas_tam = 10, bolas_cor = 0;

function setup() {
    createCanvas(larg, prof);
    noStroke();
    background(150);
}

function draw() {
    fill(bolas_cor);
    
    //faça um laço para desenhar as bolinhas
      //todas elas devem ter o mesmo tamanho bolas_tam
      //todas elas devem ter a mesma cor bolas_cor
      //a distancia entre elas deve ser de 2*bolas_tam

    bolas_y += 2;
    
    //se as bolinhas passaram da tela
      //coloque as bolinhas de volta no topo
      //mude a cor das bolinhas
        //se a cor for preta, mude para branca
        //se a cor for branca, mude para preta
}


```