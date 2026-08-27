// 2 – Crie uma função que receba dois números como parâmetro em seguida faça a divisão entre eles. O
// resultado deve ser exibido no console concatenado com uma string. (Ex: “O resultado da divisão foi...”). A
// função deve ser chamada ao final passando dois números como argumento.

const n1 = 10;
const n2 = 5;

// Criando a função com os parâmetros n1 e n2
function divisao(n1, n2) {
  let resultado = n1 / n2;
  document.write(`O resultado da divisão de ${n1} por ${n2} é ${resultado}`);
}

// Invocando a função
divisao(n1, n2);
