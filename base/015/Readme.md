# Corações

![_](cover.jpg)

Vamos fazer dois corações que batem no compasso.

- Faça a função parametrizada que desenha um coração dado x, y e tam.
- Crie uma variável que controla o tamanho do coração.
- Faça essa variável aumentar dentro da função `draw` e quando ela chegar num certo valor máximo, ela deve começar a diminuir.
- Ao invés de pintar o background a cada frame, pinte um quadrado translúcido para criar o comportamento de fade.

## Draft

```js
let tam = 0, dir = 3;

function setup() {
  createCanvas(600, 400);
  background(0);
  noStroke();
}

function coracao(x, y, t) {
  
}

function draw() {
    //pinte o fundo utilizando um rect translúcido para criar o fade

    coracao(100, 100, 100 + tam);
    coracao(200, 200, 200 - tam);
  
    //manipule o tamanho usando a direção
    //faça o tam ir de 0 até 100
    //e depois voltar até 0
}

```
