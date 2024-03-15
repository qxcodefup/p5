# @letras

## Instruções

- Nessa atividade, cada vez que digitarmos uma letra, vamos escrever ela na tela na posição que o mouse está.
- O evento que dispara a ação de escrever é o `keyPressed()`.
- Vamos guardar uma variável `text_size` com o tamanho da letra, e a cada vez que apertarmos o botão `+` ou `-`, vamos aumentar ou diminuir o tamanho da letra.
- Verifique na função `keyPressed()` se a tecla apertada é o `+` ou o `-`, e se for, aumente ou diminua o tamanho da letra. Faça o teste usando `if (key == "+")`.
- Para escrever a letra na tela, use a função `text()`, passando como parâmetros a letra, e as coordenadas do mouse `mouseX` e `mouseY`.
- Para escrever a letra na cor amarela, use a função `fill("yellow")` antes de chamar a função `text()`.
- Para acompanhar o tamanho atual da letra, vamos escrever o tamanho atual no canto superior esquerdo da tela. Como não estamos limpando a tela toda, vamos escrever um quadrado preto por cima do texto anterior, para apagar o texto anterior.
- Não vamos escrever as teclas especiais como `Shift`, `Control` e `Alt`. Para isso, vamos verificar se a tecla apertada é diferente dessas teclas especiais, e só escrever a letra se for diferente.

```js
let larg = 600, prof = 400;
let text_size = 20;
function setup() {
  createCanvas(larg, prof);
  background(50);
}

function draw() {
  fill("black"); //fazendo um quadradinho preto para apagar o texto anterior
  square(0, 0, 60);
  fill("white");
  text(text_size, 20, 30);
}

function keyPressed() {
  textSize(text_size);
  if (key == "+") {
    text_size += 1;
  } else if (key == "-") {
    text_size -= 1;
  } 
  fill("yellow");
  text(key, mouseX, mouseY);

}

```