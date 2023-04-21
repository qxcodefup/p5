# Ratinho

![_](cover.jpg)

Escreva uma função que faça um desenho qualquer dentro de um quadrado na posição x, y de tamanho w. Você pode utilizar o meu ratinho como exemplo. Pode fazer um desenho diferente e mais simples, mas deve ser dentro de um quadrado e utilizar os parâmetros x, y e w.

Aqui está um vídeo explicando como achar os pontos de forma parametrizada: [https://youtu.be/zLpGQPhnQW0](https://youtu.be/zLpGQPhnQW0)

## Exemplo do ratinho

```js
function setup() {
  createCanvas(600, 360);
  background(220);
  drawFace(0, 0, 100);
  drawFace(105, 105, 250);
  drawFace(360, 0, 200);
}

function drawFace(x, y, w) {
  // draw the square
  square(x, y, w);

  // set variables for the mouse face
  const faceSize = w * 0.8;
  const eyeSize = w * 0.2;
  const noseSize = w * 0.1;

  // calculate coordinates for the center of the face
  const centerX = x + w / 2;
  const centerY = y + w / 2;
  
  // draw the ears
  const earSize = w * 0.35;
  fill(255);
  ellipse(centerX - w * 0.3, centerY - w * 0.3, earSize);
  ellipse(centerX + w * 0.3, centerY - w * 0.3, earSize);

  // draw the face shape
  circle(centerX, centerY + w * 0.05, faceSize);


  // draw the eyes
  const leftEyeX = centerX - faceSize * 0.25;
  const rightEyeX = centerX + faceSize * 0.25;
  const eyeY = centerY - faceSize * 0.05;
  fill(255);
  circle(leftEyeX, eyeY, eyeSize);
  circle(rightEyeX, eyeY, eyeSize);
  fill(0);
  circle(leftEyeX, eyeY, eyeSize * 0.3);
  circle(rightEyeX, eyeY, eyeSize * 0.3);
  fill(255);

  // draw the nose
  const noseX = centerX;
  const noseY = centerY + faceSize * 0.01;
  triangle(
    noseX - noseSize / 2, noseY,
    noseX + noseSize / 2, noseY,
    noseX, noseY + noseSize
  );

  // draw the whiskers
  const tam = faceSize * 0.3;
  const desl = faceSize * 0.1;
  const whiskerY = centerY + faceSize * 0.2;
  const delta = faceSize * 0.05
  line(leftEyeX + desl, whiskerY, leftEyeX - tam, whiskerY);
  line(rightEyeX - desl, whiskerY, rightEyeX + tam, whiskerY);
  line(leftEyeX + desl, whiskerY + delta, leftEyeX - tam, whiskerY + delta);
  line(rightEyeX - desl, whiskerY + delta, rightEyeX + tam, whiskerY + delta);
  line(leftEyeX + desl, whiskerY - delta, leftEyeX - tam, whiskerY - delta);
  line(rightEyeX - desl, whiskerY - delta, rightEyeX + tam, whiskerY - delta);
}

```

## Exemplo do sorriso

```js
function setup() {
  createCanvas(400, 400);
  background(220);
}

function desenho(x, y, t) {
  square(x, y, t);
  let olhoxa = x + 0.27 * t;
  let olhoya = y + 0.27 * t;
  let olhoxb = x + 0.42 * t;
  let olhoyb = y + 0.20 * t;
  
  circle(olhoxa, olhoya, 0.10 * t);
  circle(olhoxb, olhoyb, 0.15 * t);
  
  let sxa = x + 0.07 * t;
  let sya = y + 0.45 * t;
  let sxb = x + 0.35 * t;
  let syb = y + 0.57 * t;
  let sxc = x + 0.65 * t;
  let syc = y + 0.25 * t;
  bezier(sxa, sya, sxb, syb, sxb, syb, sxc, syc);
  
}

function draw() {
  desenho(10, 10, 100);
  desenho(100, 200, 200);

}
```