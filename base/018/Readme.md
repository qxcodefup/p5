# Próximo

[_]()

## Instruções

- Crie e desenhe dois pontos `a` e `b` conforme as atividades anteriores.
- Vamos apenas utilizar o botão ESQUERDO do mouse.
  - O primeiro clique muda a posição do ponto `a`.
  - O segundo clique muda a posição do ponto `b`.
  - O terceiro clique muda a posição do ponto `a` e assim por diante.
- Crie uma variavel global `vez` que define de quem é a vez de mudar.

```js
  let vez = "a";
```

- Na função `mousePressed()` verifique se a vez é do ponto `a`.
  - Se for, mude a posição do ponto `a` e passe a vez para o ponto `b` usando `vez = "b"`.
- Se não for a vez do `a`, verifique se é a vez do ponto `b`.
  - Se for, mude a posição do ponto `b` e passe a vez para o ponto `a` usando `vez = "a"`.

## Draft

```js
let larg = 400, prof = 400;
let ax = 30, ay = 100;
let bx = 300, by = 40;
let vez = "a";

function setup() {
  createCanvas(larg, prof);
}

function draw() {
  background(255);
  //desenho os circulos e textos
}

function mousePressed() {
  if (vez == "a") {
  }
}


```
