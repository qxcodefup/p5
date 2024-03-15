# @swap

[_]()

## Instruções

- Crie e desenhe dois pontos `a` e `b` conforme as atividades anteriores.
- Crie uma variavel cor para cada ponto e inicialize com "pink" e "yellow".
- Vamos implementar a função `keyPressed()` com as seguintes regras:
  - Se a tecla `t` for pressionada, troque posição dos pontos.
  - Se a tecla `c` for pressionada, troque a cor dos pontos.
- Para verificar o `valor`da tecla pressionada, use a variável `key` e um texto.

```js
function keyPressed() {
  if (key == "t") {
  }
  if (key == "c") {
  }
}
```

- Para trocar o valor de duas variáveis, use uma variável auxiliar.

```js
let r = 5;
let s = 7;

//queremos trocar os valores de r e s
let aux = r; //salvo r
r = s; //movo s para r
s = aux; // recupero o valor antigo de r
```

- Para trocar a posição dos pontos, troque os valores das variáveis 
  - `ax` com `bx`
  - `ay` com `by`.

