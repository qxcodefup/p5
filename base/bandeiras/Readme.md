# @bandeiras - treinando if else

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

![image](https://gist.github.com/assets/4747652/42e7e710-51f1-4b1b-a825-a79317415282)

## Norte Sul

![image](https://gist.github.com/assets/4747652/00e2f9b0-ee2b-4677-bad3-78b26c232123)

## Leste Meio Oeste

![image](https://gist.github.com/assets/4747652/29ef14e0-8ed4-46d8-ae48-ed316cf16f32)

## Norte Meio Sul

![image](https://gist.github.com/assets/4747652/51e3b7c4-95d6-4965-8d49-976520928ee4)

## Leste Norte Sul

![image](https://gist.github.com/assets/4747652/e293ee58-55a4-4f65-916e-0a94ebb69523)

## Quadrantes

![image](https://gist.github.com/assets/4747652/0c5b25a2-9a9a-4508-94c0-cb07d2b1acae)

## Diagonal

![image](https://gist.github.com/assets/4747652/cc875791-cbe1-4e6d-a7d2-dfee3104398d)

## Desafio 1: Contradiagonal

![image](https://gist.github.com/assets/4747652/11604de8-ad7e-42d0-9814-fb9926d8826e)

## Desafil 2: X

![image](https://gist.github.com/assets/4747652/bfd861a6-646a-44af-933f-cd8fa2e57427)

## Desafio 3: X não quadrado

![image](https://gist.github.com/assets/4747652/c3c43035-d336-4cd1-8663-1b805a963804)