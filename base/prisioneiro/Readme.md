# @prisioneiro

Esse é o código final do prisioneiro. Seu objetivo é gerar os códigos intermediários antes de chegar no código final.

```js
let x = 300;
let y = 50;

let vx = 0; //velocidade em x
let vy = 0; //velocidade em y

function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
}

function draw() {
  background(220);
  vx += random(-1, 1); //aceleração em x
  vy += random(-1, 1); //gravidade constante
  
  //debug
  //entre aspas duplas são o texto
  //toFixed faz o número ter apenas 2 casas decimais
  console.log("vx=" + vx.toFixed(2) + " vy=" + vy.toFixed(2))
  
  //se a nova posicao ainda estiver dentro da tela
  if(x + vx < 600 && x + vx > 0) { //se andar nao faz ela sair da tela
    x += vx; //ande em x
  } else { //fora da tela
    vx = 0;
  }
  if (y + vy < 400 && y + vy > 0) {
    y += vy;
  } else {
    vy = 0;
  }

  rect(x, y, 30, 30, 5);
}
```

## Etapas

- 01. Bolinha tremendo
  - Crie um código apenas com x e y e uma bolinha.
  - Faça o random modificar x e y de -1 a 1.
  - O objetivo é uma bolinha que se mexe pela tela tremendo.
- 02. Velocidade
  - Crie um código com x, y, vx e vy.
  - Faça o random modificar vx e vy de -1 a 1.
  - Faça a cada frame a posição mudar pela velocidade.
  - A bolinha vai se mover pela tela de forma mais fluida.
- 03. Debug
  - Faça um comando de console.log para mostrar a velocidade em x e y.
  - Use o toFixed para mostrar apenas 2 casas decimais.
- 04. Bloqueando X
  - Faça a bolinha não sair da tela em x
  - A bolinha apenas deve andar em x se esse andar não fizer ela sair da tela.
- 05. Bloqueando Y
  - Faça a bolinha não sair da tela em y.
  - A bolinha apenas deve andar em y se esse andar não fizer ela sair da tela.
- 06. Parando
  - Faça a bolinha zerar a velocidade em x se ela sair da tela pelas laterais.
  - Faça a bolinha zerar a velocidade em y se ela sair da tela por cima ou por baixo.
- 07. Seja criativo
  - Modifique a cor ou alguma característica da bolinha para deixar o código mais interessante.
  - Pode ser na hora da colisão, ela se tornar maior ou menor.
  - Que tal evitar que ela fique pequena demais ou grande demais?