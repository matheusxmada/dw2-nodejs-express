// 7 – Crie uma arrow function que receba quatro números como parâmetro e retorne a soma entre esses
// números. O resultado deve ser impresso no console.

//Utilizando eval... Um operador nativo que realiza cálculos matemáticos a partir de dois (ou mais números) e um operador.
const calculaSoma = (n1, n2, n3, n4, operador) => {
  return eval(`${n1} ${operador} ${n2} ${operador} ${n3} ${operador} ${n4}`);
};

const n1 = 2;
const n2 = 3;
const n3 = 5;
const n4 = 7;
const operador = "+";

document.write(
  `O resultado da de ${n1} ${operador} ${n2} ${operador} ${n3} ${operador} ${n4} é igual a ${calculaSoma(n1, n2, n3, n4, operador)}`,
);
