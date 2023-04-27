# Limitar

![](cover.jpg)

Faça uma função que tenha o seguinte comportamento:

```js
function limitar(valor, minimo, maximo) {
    // se valor for menor que minimo, retorne minimo
    // se valor for maior que maximo, retorne maximo
    // caso contrário, retorne valor
}
```

## Draft

Execute esse código e olhe os valores que saem no console.

```js
function setup() {
  console.log(limitar(-5, 0, 10)); // 0
  console.log(limitar(6, 2, 8)); // 6
  console.log(limitar(20, 10, 15)); // 15
}

function limitar(v, lower, upper) {
  //faça sua função aqui
}

```