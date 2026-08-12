/* Função com parâmetros 
2 – Crie uma função que receba dois números como parâmetro em seguida faça a divisão entre eles. O 
resultado deve ser exibido no console concatenado com uma string. (Ex: “O resultado da divisão foi...”). A 
função deve ser chamada ao final passando dois números como argumento. */

const n1 = 40;
const n2 = 20;

function divisao(n1, n2) {
  let resultado = n1 / n2;
  document.write(`A divisão de ${n1} por ${n2} é igual a ${resultado}.`);
}

divisao(n1, n2);
