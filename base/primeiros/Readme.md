# @primeiros códigos com p5

<!-- toc -->
- [02 Usando point() e line()](#02-usando-point-e-line)
- [03. Criando uma animação, usando random()](#03-criando-uma-animação-usando-random)
- [04. Frames por segundo e tons de cinza](#04-frames-por-segundo-e-tons-de-cinza)
- [05. Efeito velocidade da luz e tons de verde](#05-efeito-velocidade-da-luz-e-tons-de-verde)
- [06. Linhas entre as bordas da esquerda e direita](#06-linhas-entre-as-bordas-da-esquerda-e-direita)
- [07. Animando linhas horizontais utilizando uma variável](#07-animando-linhas-horizontais-utilizando-uma-variável)
- [08. Animação de linhas verticais utilizando uma variável](#08-animação-de-linhas-verticais-utilizando-uma-variável)
- [09. Tamanho da tela e linhas coloridas animadas](#09-tamanho-da-tela-e-linhas-coloridas-animadas)
- [10. Desenhando círculos, retângulos e mudando a cor de preenchimento](#10-desenhando-círculos-retângulos-e-mudando-a-cor-de-preenchimento)
- [11. Desenhando um círculo que cruza a tela](#11-desenhando-um-círculo-que-cruza-a-tela)
- [12. Fazendo uma animação em loop utilizando if](#12-fazendo-uma-animação-em-loop-utilizando-if)
<!-- toc -->

## 02 Usando point() e line()

```js
//função setup é chamada uma vez no início do programa
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

## 03. Criando uma animação, usando random()

```js
function setup() {
  createCanvas(100, 100);
}

// função draw é chamada a cada frame
function draw() {
  // limpa a tela usando a cor do rgb
  background(255, 204, 0);
  
  //random(valor) gera um número de 0 at valor
  //gera uma linha de um ponto qualquer para um ponto qualquer
  line(random(100), random(100), random(100),random(100)); 
}
```

## 04. Frames por segundo e tons de cinza

```js
function setup(){
  createCanvas(100, 100);
  frameRate(4); // framerate(frames_por_segundo) 
}

function draw() {
  // limpa a tela com uma cor aleatória
  background(random(255), random(255), random(255));
}
```

## 05. Efeito velocidade da luz e tons de verde

```js
function setup(){
  createCanvas(100, 100);
  background(0); // um único número representa um tom de cinza
}

function draw() {
  // muda a cor do pincel para um tom de verde
  stroke(0, random(255), 0); // R, G, B

  // do meio para qualquer lugar da tela
  line(50, 50, random(100), random(100));
}
```

## 06. Linhas entre as bordas da esquerda e direita

```js
function setup(){
  createCanvas(100, 100);
}

function draw() {
  background(0); //tela preta
  stroke(255); //linha branca
  line(0, random(100), 99, random(100));
}
```

## 07. Animando linhas horizontais utilizando uma variável

```js
function setup(){
  createCanvas(100, 100);
}

function draw() {
  background(0);
  stroke(255);
  // lugar = valor
  let distance_top = random(100); 
  line(0, distance_top, 99, distance_top);
}
```

## 08. Animação de linhas verticais utilizando uma variável

```js
function setup(){
  createCanvas(100, 100);
}

function draw() {
  background(0);
  stroke(255);
  // lugar = valor
  let distancia_esquerda = random(100); 
  line(distancia_esquerda, 0, distancia_esquerda, 99);
}
```

## 09. Tamanho da tela e linhas coloridas animadas

```js
function setup(){
  createCanvas(200, 200);
}

function draw() {
  stroke(random(200,256),random(200,256),random(50,100));
  let distancia_esquerda = random(200); 
  line(distancia_esquerda, 0, distancia_esquerda, 199);
}
```

## 10. Desenhando círculos, retângulos e mudando a cor de preenchimento

```js

function setup(){
  createCanvas(400, 400);
  // definem que o ponto de origem do retangulo é o centro
  rectMode(CENTER);
  // we change the color of our background
  background("#C0E1EA"); // here we are using hexadecimal code instead of R G B
  // we change the line color
  strokeWeight(3);
  stroke("#FFBC03");
  // we change the fill color for circles and rectangles
  fill("#B6FF00");
  // we draw a rectangle
  rect(200, 200, 150, 150);
  // we draw a circle
  ellipse(200, 200, 150, 150);
}
```

## 11. Desenhando um círculo que cruza a tela

```js
let circle_x = 0;

function setup() {
  createCanvas(400,400);
  noStroke(); //sem borda
  fill("#C1FF3E");
}

function draw() {
  background("#1BB1F5");
    
  ellipse(circle_x, 50, 50, 50);
  
  circle_x = circle_x + 1;
}
```

## 12. Fazendo uma animação em loop utilizando if

```js
let slow_circle_x = 0;
let fast_circle_x = 0;

function setup() {
  createCanvas(400,400); 
  noStroke();
}

function draw() {
  background("#1BB1F5");
  
  fill("#C1FF3E");
  ellipse(slow_circle_x, 50, 50, 50);
  slow_circle_x = slow_circle_x + 1;

  fill("#FF4800");
  ellipse(fast_circle_x,50, 50, 50);
  fast_circle_x = fast_circle_x + 5;

  if (slow_circle_x > 400) {
    slow_circle_x = 0;
  }
  if (fast_circle_x > 400) {
    fast_circle_x = 0;
  }
}
```
