# Prisão

Vamos utilizar a função limitar da atividade @008 para manter uma bolinha inquieta dentro da tela.

[_](https://user-images.githubusercontent.com/4747652/235666421-466fb5ab-00ab-4214-b994-da2f52f5d9e9.mp4)

## Draft

```js

let x = 200, y = 200, tam = 10;
let larg = 800, prof = 450;
function setup() {
  createCanvas(larg, prof);
  background(100);
  square(100, 100, 200);
}

function draw() {
  //faça o x variar de -tam até +tam utilizando o random
  //faça o y variar de -tam até +tam utilizando o random
  //chame a função limitar para limitar o x entre 0 e larg
    // x recebe o valor da função limitar(x, 100, 300)
  //chame a função limitar para limitar o y entre 0 e prof
    // y recebe o valor da função limitar(y, 100, 300)
   circle(x, y, tam);
}

function limitar(v, lower, upper) {
  //copiar da atividade 008
}
```
