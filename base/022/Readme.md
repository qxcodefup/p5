# MouseOver

[_]()

## Instruções

Faça um programa com o seguinte comportamento:

- Crie uma lista capaz de armazenar objetos do tipo Bola.
- Cada bola deve ter um x, um y e um raio.
- Ao clicar com um botão do mouse, deve ser criada uma Bola na posição do mouse. O raio deve ser um valor aleatório entre 30 e 50.
- Se o clique for com o botão esquerdo, a bola deve ser inserida no final da lista, se for com o botão do meio, a bola deve ser inserida no início da lista.
- Ao passar o mouse sobre uma bola, ela deve mudar de cor enquanto o mouse estiver sobre ela.

## Draft

```js
class Bola {
  constructor(x, y, raio) {
    this.x = x;
    this.y = y;
    this.raio = raio;
  }
}

function distancia(ax, ay, bx, by) {
  // ...
}

function setup() {
  createCanvas(400, 400);
}

let bolas = [];

function mousePressed() {
  // ...
}

function draw() {
  background(220);
  // ...
}
```