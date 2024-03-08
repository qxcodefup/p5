# Fun Programming with p5.js

<!-- toc -->

<!-- toc -->

## 02 Use point() and line()

```js
function setup() {
  //cria uma tela de 100 por 100
  createCanvas(100, 100);
  
  //pinta de cinza a tela
  background("gray");
  
  //ponto na posição x, y
  point(50, 50);
  point(51, 50);
  point(52, 50);
  point(53, 50);
  point(54, 50);
  point(55, 50);
  
  //linha entre os pontos a e b
  //linha(xa, ya, xb, yb);
  line(0, 0, 99, 99);
}
```

## 03. Create an animation, use random()

```js
function setup() {
  createCanvas(100, 100);
}

function draw() {
  // limpa a tela usando a cor do rgb
  background(255, 204, 0);
  
  //random(valor) gera um número de 0 at valor
  //gera uma linha de um ponto qualquer para um ponto qualquer
  line(random(100), random(100), random(100),random(100)); 
}
```
