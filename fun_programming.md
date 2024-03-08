# Fun Programming with p5.js

<!-- toc -->
- [02 Use point() and line()](#02-use-point-and-line)
- [03. Create an animation, use random()](#03-create-an-animation-use-random)
- [04. Shades of gray and colors, frameRate()](#04-shades-of-gray-and-colors-framerate)
- [05. Light speed effect, change line colors](#05-light-speed-effect-change-line-colors)
- [06. Animate white lines across the display](#06-animate-white-lines-across-the-display)
- [07. Random lines with random colors](#07-random-lines-with-random-colors)
<!-- toc -->

## 02 Use point() and line()

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

## 03. Create an animation, use random()

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

## 04. Shades of gray and colors, frameRate()

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

## 05. Light speed effect, change line colors

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

## 06. Animate white lines across the display

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

## 07. Random lines with random colors

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


