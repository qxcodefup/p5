# Ricochete

Vamos fazer a bolinha andar apenas dentro dos slots e ricochetear nas paredes da tela.

- 2 Pontos: Desenhar o tabuleiro de bolinhas
- 2 Pontos: Fazer a bolinha andar e ricochetear na tela
- 

## Draft

```js
let nc = 7, nl = 4, tam = 100;
let larg = nc * tam, prof = nl * tam;

let x = 1, y = 0, dx = 1, dy = 1;
let timer = 0, interval = 25;

function setup() {
    createCanvas(larg, prof);
    ellipseMode(CORNER);
}

function draw() {
    background(100);
    fill("white");
    //desenhe o tabuleiro de bolinhas

    timer += 1;
    if (timer > interval) {
        timer = 0;
        x += dx;
        y += dy;
    }

    // verifique se a bolinha saiu do tabuleiro
    // e reposicione-a

    fill("pink");
    circle(x * tam, y * tam, tam);
}

```
