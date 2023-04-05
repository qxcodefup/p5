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
