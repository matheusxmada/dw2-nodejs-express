// 3 – Crie uma função que receba três números e retorne a multiplicação entre esses números. O resultado
// deve ser exibido no console.

// Declarando variáveis que passarão como parâmetros para a função
const n1 = 2;
const n2 = 3;
const n3 = 5;

// Criando a função
function multiplicacao(n1, n2, n3) {
  let resultado = n1 * n2 * n3;
  document.write(
    `<p>O resultado da multiplicação entre ${n1} * ${n2} * ${n3} é igual a ${resultado}</p>`,
  );
}

// Invocando a função
multiplicacao(n1, n2, n3);
