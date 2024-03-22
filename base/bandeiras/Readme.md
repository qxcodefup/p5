# @bandeiras

Partindo do código de geração de bolinhas, tente recriar os variados padrões de bandeiras solicitados.

## Rascunho

```js
let larg = 600, prof = 400;
function setup() {
  createCanvas(larg, prof);
  background(220);
}
function draw() {
  let x = random(larg);
  let y = random(prof);
  if (x < 300) {
    fill("blue")
  } else {
    fill("yellow")
  }
  circle(x, y, 10);
}
```

## Leste Oeste

![image](01.png)

## Norte Sul

![image](02.png)

## Leste Meio Oeste

![image](03.png)

## Norte Meio Sul

![image](04.png)

## Leste Norte Sul

![image](05.png)

## Quadrantes

![image](06.png)

## Diagonal

![image](07.png)

## Desafio 1: Contradiagonal

![image](08.png)

## Desafil 2: X

![image](09.png)

## Desafio 3: X não quadrado

![image](10.png)
